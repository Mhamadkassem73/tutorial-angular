import { Component, OnInit, ViewChild } from '@angular/core';
import { Shared } from '../shared/shared';
import { User } from '../models/user.model';
import { UserService } from '../services/user.service';
import { ErpGridComponent } from '../components/erp-grid/erp-grid.component';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { UserBoxComponent } from './user-box/user-box.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent extends Shared implements OnInit {
  @ViewChild('userGrid') userGrid: ErpGridComponent;
  @ViewChild(MatPaginator) private _paginator: MatPaginator;
  @ViewChild(MatSort) private _sort: MatSort;
  dialogRef;

  constructor(
    private _userService: UserService,
    private _matDialog: MatDialog,
  ) {
    super();
  }
  currentPage = 0;
  pageSize = 10;
  length = 0;
  columns = [
    {
      columnDef: 'name',
      header: 'name',
      cell: (element: User) => `${element.name || ''}`,
    },
    {
      columnDef: 'user_name',
      header: 'user_name',
      cell: (element: User) => `${element.user_name || ''}`,
    },
    {
      columnDef: 'phone',
      header: 'phone',
      cell: (element: User) => `${element.user_phone || ''}`,
    },

  ];

  ngOnInit(): void {
    this.fetchUser();
  }




  fetchUser(): Promise<any> {
    return new Promise((resolve, reject) => {

      var skip = this.currentPage * this.pageSize;
      var take = this.pageSize;

      //this.formAreas.disable();
      //this._areasService.fetchUser(this.formAreas.value.status).subscribe(response => {
      let payload = {
        skip: skip,
        take: take
      }

      this._userService.fetchUser(payload).subscribe(response => {
        console.log(response);

        this.userGrid.dataSource.data = response['data'];

        this.length = response['count'];

        this.userGrid.displayedColumns = this.columns.map(c => c.columnDef);

        this.userGrid.dataSource.sort = this._sort;
      }, error => {
        console.log(error);
      });
    })
  }


  handlePage(event) {
    this.currentPage = event.pageIndex;
    this.pageSize = event.pageSize;
    this.fetchUser().then(response => {
    })
  }


  addUser() { this.editUser(); }

  editUser(user?: User) {


    this.dialogRef = this._matDialog.open(UserBoxComponent, {
      data: {
        selectedUser: user,
      },
      disableClose: true,
      maxHeight: '90vh',
    });

    this.dialogRef.afterClosed().subscribe((user) => {
      if (user) {
        this.fetchUser();
      }
    });
  }










}
