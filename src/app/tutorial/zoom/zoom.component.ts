import { Component, OnInit, ViewChild } from '@angular/core';
import { Zoom } from '../models/zoom.model';
import { ZoomService } from '../services/zoom.service';
import { ErpGridComponent } from '../components/erp-grid/erp-grid.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Shared } from '../shared/shared';

@Component({
  selector: 'app-zoom',
  templateUrl: './zoom.component.html',
  styleUrls: ['./zoom.component.scss']
})
export class ZoomComponent extends Shared implements OnInit {
  @ViewChild('userGrid') userGrid: ErpGridComponent;

  data=[];
  dialogRef;

  constructor(
    private _zoomService: ZoomService,
    private _matDialog: MatDialog,
    private _router: Router,
  ) {
    super();
  }
  currentPage = 0;
  pageSize = 10;
  length = 0;
  columns = [
    {
      columnDef: 'date',
      header: 'date',
      cell: (element: Zoom) => `${element.zoom_date || ''}`,
    },
    {
      columnDef: 'url',
      header: 'url',
      cell: (element: Zoom) => `${element.zoom_url || ''}`,
    },
    {
      columnDef: 'id',
      header: 'id',
      cell: (element: Zoom) => `${element.zoom_meetingid || ''}`,
    },
    {
      columnDef: 'password',
      header: 'password',
      cell: (element: Zoom) => `${element.zoom_password || ''}`,
    },

  ];

  ngOnInit(): void {
    this.fetchZoomById();
  }




  fetchZoomById(): Promise<any> {
    return new Promise((resolve, reject) => {



      //this.formAreas.disable();
      //this._areasService.fetchZoomById(this.formAreas.value.status).subscribe(response => {


      this._zoomService.fetchZoomById().subscribe(response => {
        console.log(response);
        this.data= response['data'];
        this.userGrid.dataSource.data = response['data'];
        this.userGrid.displayedColumns = this.columns.map(c => c.columnDef);
      }, error => {
        console.log(error);
      });
    })
  }




  addNewMeeting() {

    this._zoomService.createNewZoomMeeting().subscribe(response => {
      this.fetchZoomById();
    }, error => {
      console.log(error);
    });

  }











}
