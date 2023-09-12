import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ErpGridComponent } from '../erp-grid/erp-grid.component';
import { LoggerService } from 'app/tutorial/services/logger.service';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-reusable-grid',
  templateUrl: './reusable-grid.component.html',
  styleUrls: ['./reusable-grid.component.scss']
})
export class ReusableGridComponent implements OnInit, AfterViewInit {
  @ViewChild('erpGrid') erpGrid: ErpGridComponent;
  // @ViewChild(MatPaginator) private _paginator: MatPaginator;
  // @ViewChild(MatSort) private _sort: MatSort;
  // @Input('dataSource') dataSource : MatTableDataSource<any> ;
  @Input('data') data;
  @Input('columns') columns;
  @Input('screen') screen;
  @Input('endButtons') endButtons;
  @Input('columnsExpand') columnsExpand;
  @Input('buttons') buttons = ['edit', 'printNoMenu'];
  @Input('withFooter') withFooter: boolean = false;
  @Input('price') price = null;
  @Input('timeFrameWithMax') timeFrameWithMax = null;
  @Input('checkboxLabel') checkboxLabel : any;
  @Output() onStartRowSelect = new EventEmitter<any>();
  @Output() onAllSelection = new EventEmitter<any>();
  @Output() rowsSelectionEvent = new EventEmitter<any>();
  @Input('footerCols') footerCols = [];
  constructor(private _loggerService: LoggerService) { }
  ngAfterViewInit(): void {
    this.fetchData();
  }

  ngOnInit(): void {
  }


  onEdit(event) {

  }

  onPrint(event) {

  }


  fetchData() {
    this.erpGrid.dataSource.data = this.data;
    this.erpGrid.displayedColumns = this.columns.map(c => c.columnDef);
  }

  onCheckboxSelection(element)
  {
    this.onStartRowSelect.emit(element);
  }

  onAllSelectionGrid(arrayOfSelected)
  {
    this._loggerService.logger(arrayOfSelected);
    this.onAllSelection.emit(arrayOfSelected);
  }

  onRowsSelection(arrayOfDataWithStatus)
  {
    this.rowsSelectionEvent.emit(arrayOfDataWithStatus);
  }

}
