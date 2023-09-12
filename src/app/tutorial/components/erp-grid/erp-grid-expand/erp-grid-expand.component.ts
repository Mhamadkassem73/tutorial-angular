import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

import { ErpGridComponent } from '../erp-grid.component';
import { LoggerService } from 'app/tutorial/services/logger.service';
import { Shared } from 'app/tutorial/shared/shared';

@Component({
  selector: 'app-erp-grid-expand',
  templateUrl: './erp-grid-expand.component.html',
  styleUrls: ['./erp-grid-expand.component.scss']
})
export class ErpGridExpandComponent extends Shared implements OnInit {
  @Input('columnsExpand') columnsExpand = [];
  @ViewChild('erpGridExpand') erpGridExpand: ErpGridComponent;
  @Input('columnsExpandButtons') columnsExpandButtons = [];
  @Output() journalCstCheckBillEventExpand = new EventEmitter<any>();
  @Output() onClickButtonEditExpand = new EventEmitter<any>();
  @Output() onClickButtonPrintExpand = new EventEmitter<any>();
  @Input('initialHeaderColumns') initialHeaderColumns = [];
  @Input('initialHeaderColumnsDef') initialHeaderColumnsDef = [];

  expandColor="bg-gray-200 dark:bg-gray-800";
  constructor(private _loggerService: LoggerService) {
    super();
  }

  ngOnInit(): void {
  }

  onCstCheckBillSelection(event)
  {
    this._loggerService.logger(event);
    this.journalCstCheckBillEventExpand.emit(event);
  }

  onButtonEdit(event)
  {

    this.onClickButtonEditExpand.emit(event);
  }
  onButtonPrint(event)
  {

    this.onClickButtonPrintExpand.emit(event);
  }



}
