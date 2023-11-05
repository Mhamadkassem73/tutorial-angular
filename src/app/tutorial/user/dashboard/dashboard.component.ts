import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'app/core/user/user.types';
import { ErpGridComponent } from 'app/tutorial/components/erp-grid/erp-grid.component';
import { QuestionService } from 'app/tutorial/services/question.service';
import { Shared } from 'app/tutorial/shared/shared';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent extends Shared implements OnInit {
  @ViewChild('userGrid') userGrid: ErpGridComponent;
  @ViewChild(MatPaginator) private _paginator: MatPaginator;
  @ViewChild(MatSort) private _sort: MatSort;
  userId: any;
  dialogRef;
  lessons = [];
  constructor(
    private _questionService: QuestionService,
    private _matDialog: MatDialog,
    private _router: Router,
    private route: ActivatedRoute,
    private _formBuilder: FormBuilder,
  ) {
    super();
  }
  dashboardForm: FormGroup;
  currentPage = 0;
  pageSize = 10;
  length = 0;
  columns = [
    {
      columnDef: 'question',
      header: 'question',
      cell: (element) => `${element.userAnswer_question || ''}`,
    },
    {
      columnDef: 'user Answer',
      header: 'user ANswer',
      cell: (element) => `${element.userAnswer_answer || ''}`,
    },
    // {
    //   columnDef: 'IS ',
    //   header: 'IS TRUE',
    //   cell: (element) => `${element.userAnswer_isTrue || ''}`,
    // },

    {
      columnDef: 'ISTRUE',
      header: 'IS TRUE',
      type: 'highlight',
      cellCode: (element) => `${!element.userAnswer_isTrue ? 'warn' : 'success'}`,
      cell: (element) => `${!element.userAnswer_isTrue ? 'False' : 'True'}`,
    },

  ];

  ngOnInit(): void {
    this.dashboardForm = this._formBuilder.group({
      lessons: ['', Validators.required],
    })
    this.route.paramMap.subscribe(parms => {
      this.userId = parms.get('id');
    });
    this._questionService.fetchLessons().subscribe(response => {
      this.lessons = response['data'];
;
    });
    //this.fetchQuestionAnswers();
  }




  fetchQuestionAnswers(event?): Promise<any> {

    console.log(this.dashboardForm.get("lessons").value);
    return new Promise((resolve, reject) => {
      var skip = this.currentPage * this.pageSize;
      var take = this.pageSize;

      //this.formAreas.disable();
      //this._areasService.fetchQuestionAnswers(this.formAreas.value.status).subscribe(response => {
      let payload = {
        userId: this.userId,
        lesson: this.dashboardForm.get("lessons").value
      }

      this._questionService.selectAnswersByuser(payload).subscribe(response => {
        console.log(response);
        this.userGrid.dataSource.data = response['data']['answers'];
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
    this.fetchQuestionAnswers().then(response => {
    })
  }













}
