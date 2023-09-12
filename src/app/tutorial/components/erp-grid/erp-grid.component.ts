import { trigger, state, style, transition, animate } from "@angular/animations";
import { SelectionModel } from "@angular/cdk/collections";
import { Component, OnInit, OnDestroy, ViewChild, Input, Output, EventEmitter, ChangeDetectorRef } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { UserService } from "app/core/user/user.service";
import { transactionScreens } from "app/tutorial/constants/parameters";
import { LoggerService } from "app/tutorial/services/logger.service";
import { Shared } from "app/tutorial/shared/shared";
import { Subject, takeUntil } from "rxjs";
import { ErpGridExpandComponent } from "./erp-grid-expand/erp-grid-expand.component";


@Component({
  selector: 'app-erp-grid',
  templateUrl: './erp-grid.component.html',
  styleUrls: ['./erp-grid.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ErpGridComponent extends Shared implements OnInit,OnDestroy {
  public dataSource = new MatTableDataSource<any>();
  @ViewChild(MatPaginator) private _paginator: MatPaginator;
  @ViewChild(MatSort) private _sort: MatSort;
  @Input('columns') columns = [];
  @Input('buttons') buttons = [];
  @Input('endButtons') endButtons = [];
  @Input('rowClick') rowClick: boolean = false;
  displayedColumns = [];
  @Output() onElementEdit = new EventEmitter<any>();
  @Output() onAddSelected = new EventEmitter<any>();
  @Output() onElementDelete = new EventEmitter<any>();
  @Output() onElementCopy = new EventEmitter<any>();
  @Output() onElementInfo = new EventEmitter<any>();
  @Output() onOpenDetails = new EventEmitter<any>();
  @Output() onPrintPdf = new EventEmitter<any>();
  @Output() onElementReset= new EventEmitter<any>();
  @Output() onClickButtonEdit = new EventEmitter<any>();
  @Output() onClickButtonPrint = new EventEmitter<any>();
  @Output() onClickButtonEditExpand = new EventEmitter<any>();
  @Output() onClickButtonPrintExpand = new EventEmitter<any>();
  @Output() onImgEvent = new EventEmitter<any>();
  @Output() onUploadEvent = new EventEmitter<any>();
  @Output() onElementReverse = new EventEmitter<any>();
  @Output() onViewStatmentSelected = new EventEmitter<any>();
  @Output() onDownloadPdfs = new EventEmitter<any>();



  @Input('footerCols') footerCols = [];
  @Input('initialHeaderColumns') initialHeaderColumns = [];
  @Input('initialHeaderColumnsDef') initialHeaderColumnsDef = [];

  @Input('hasInitialHeader') hasInitialHeader: boolean = false;

  @Input('hasInitialHeaderExpand') hasInitialHeaderExpand: boolean = false;

  expandedElement = null;
  indexOfExpand = null;

  @Input('columnsExpand') columnsExpand = [];
  @Input('columnsExpandButtons') columnsExpandButtons = [];
  @Input('expandColor') expandColor;
  @Input('screen') screen: string;

  userAccessAll;
  @Output() journalCstCheckBillEvent = new EventEmitter<any>();
  @Input('columnKeyRestriction') columnKeyRestriction: string;
  @Input('printButtons') printButtons = [];
  @Input('checkboxLabel') checkboxLabel : any;
  private _unsubscribeAll: Subject<any> = new Subject<any>();
  @Input('goToData') goToData = {};
  @Output() onGoToEvent = new EventEmitter<any>();
  modules = {};
  transactionScreens=transactionScreens;
  @Output() selectedElementEvent = new EventEmitter<any>();
  @Input('doubleClickLineOption') doubleClickLineOption: boolean = false;
  @Input('tooltipRefreshIcon') tooltipRefreshIcon: string;
  selectedElement;

  @Output() onStartRowSelect = new EventEmitter<any>();
  @Output() onAllSelection = new EventEmitter<any>();

  @Output() onPressAddElement = new EventEmitter<any>();
  @Output() onOpenReport = new EventEmitter<any>();
  @Output() onPrintDirect = new EventEmitter<any>();
  @Output() onRequest = new EventEmitter<any>();
  @Input('withFooter') withFooter: boolean = false;
  @Input('price') price = null;
  @Input('timeFrameWithMax') timeFrameWithMax = null;
  @ViewChild('expandedTable') expandedTable: ErpGridExpandComponent;
  @Output() rowsSelectionEvent = new EventEmitter<any>();
  @Output() onTransactionCreation = new EventEmitter<any>();
  selection = new SelectionModel<any>(true, []);
  constructor(private _userService: UserService,private _changeDetectorRef: ChangeDetectorRef,
    private _loggerService: LoggerService,) {
    super();
  }

  ngOnInit(): void {

  }

  editRow(element): void
  {
    this.onElementEdit.emit(element);
  }

  deleteRow(element): void
  {
    this.onElementDelete.emit(element);
  }

  copyRow(element): void
  {
    this.onElementCopy.emit(element);
  }

  openDetails(element): void
  {
    this.onOpenDetails.emit(element);
  }
  downloadPdfsRow(element): void
  {
    this.onDownloadPdfs.emit(element);
  }

  onUploadDocument(element): void
  {
    this.onUploadEvent.emit(element);
  }
  onImageDocument(element): void
  {
    this.onImgEvent.emit(element);
  }



  onAdd(element): void
  {
    this.onAddSelected.emit(element);
  }

  infoRow(element)
  {
    this.onElementInfo.emit(element);
  }

  reset(element)
  {
    this.onElementReset.emit(element);
  }


  onExpandSelection(element,i: number)
  {
    if (element == this.expandedElement) {
      this.expandedElement = null;
      this.indexOfExpand = null;
      return;
    }
    this.expandedElement = element;
    this.indexOfExpand = i;

    setTimeout(() => {
      this.expandedTable.erpGridExpand.dataSource = element.expandedDetails;
      this.expandedTable.erpGridExpand.displayedColumns = this.columnsExpand.map(c => c.columnDef);
    }, 200);
  }

  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next(null);
    this._unsubscribeAll.complete();
  }

  onExpandCstCheckBillSelection(event)
  {
    this.journalCstCheckBillEvent.emit(event);
  }

  onJournalCstCheckBill(element,type: string)
  {
    const eventData = {
      element : element,
      type: type
    }
    this.journalCstCheckBillEvent.emit(eventData);
  }

  goToPage(element: any)
  {
    this.onGoToEvent.emit(element);
  }


  print(element,button)
  {

    this.onPrintPdf.emit({element:element,type:button.code});
  }

  reverseRow(element): void
  {
    this.onElementReverse.emit(element);
  }

  onCheckboxChange(event)
  {
    
  }

  onSelectElement(element)
  {
    if( this.selectedElement == element )
    {
      this.selectedElement = null;
    }
    else
    {
      this.selectedElement = element;
    }

    this.selectedElementEvent.emit(this.selectedElement);
  }

  onButtonEdit(element)
  {
    this.onClickButtonEdit.emit(element);
  }

  onButtonPrint(element)
  {
    this.onClickButtonPrint.emit(element);
  }



  onClickExpandButtonEdit(element)
  {
    this.onClickButtonEditExpand.emit(element);
  }

  onClickExpandButtonPrint(element)
  {
    this.onClickButtonPrintExpand.emit(element);
  }

  allSelection(checked)
  {
    for(var i =0; i < this.dataSource.data.length; i++ )
    {
      this.dataSource.data[i].selected = checked;
    }
    this.rowsSelectionEvent.emit(this.dataSource.data);
  }

  updateSelectionInArray(element,event)
  {
    for(var i =0; i < this.dataSource.data.length; i++ )
    {
      if( this.dataSource.data[i] == element )
      {
        this.dataSource.data[i].selected = event;
        break;
      }
    }
    this.rowsSelectionEvent.emit(this.dataSource.data);
  }

  startRowSelection(element)
  {
    this.selection.toggle(element);
    this.onStartRowSelect.emit(element);
  }

  addNewItem()
  {
    this.onPressAddElement.emit(true);
  }

  openReport(element)
  {
    this.onOpenReport.emit(element);
  }

  printDirect(element)
  {
    this.onPrintDirect.emit(element);
  }

  request(element)
  {
    this.onRequest.emit(element);
  }


  onViewStament(element)
  {
    this.onViewStatmentSelected.emit(element);
  }

  createTransaction(element)
  {
    this.onTransactionCreation.emit(element);
  }

}
