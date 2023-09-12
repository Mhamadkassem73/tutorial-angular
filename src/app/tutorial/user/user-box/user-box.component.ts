import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { User } from 'app/tutorial/models/user.model';
import { LoggerService } from 'app/tutorial/services/logger.service';
import { SnackBarService } from 'app/tutorial/services/snack-bar.service';
import { UserService } from 'app/tutorial/services/user.service';
import { Shared } from 'app/tutorial/shared/shared';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-user-box',
  templateUrl: './user-box.component.html',
  styleUrls: ['./user-box.component.scss']
})
export class UserBoxComponent extends Shared implements OnInit {
  areasForm: FormGroup;
  selectedUser: User;
  parentArea;
  typeArea;
  date;
  userRoles=[
   { "code":"admin","name":"admin"},
   { "code":"freeCourse","name":"Free Course"},
   { "code":"paidCourse","name":"Paid Course"},
  ];
  levels=[
    { "code":"1"},
   ];



  constructor(public matDialogRef: MatDialogRef<UserBoxComponent>, private _formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) private _data: any,
    private _snackBarService: SnackBarService,
    private _matDialog: MatDialog,
    private _userService: UserService,
    private _loggerService: LoggerService
  ) {

    super();
    if (_data.selectedUser) {
      this.selectedUser = _data.selectedUser;
    }
    this.parentArea = _data.parent;
    this.typeArea = _data.typeArea;
    this.date = _data.date;
    this._loggerService.logger(_data);
  }


  ngOnInit(): void {

    this.areasForm = this._formBuilder.group({
      id: [''],
      userName: ['',Validators.required],
      userIsActive: [true],
      userRole: ['' ],
      userEmail: ['',Validators.required],
      userPhone: [''],
      name: ['',Validators.required],
      userLevel: ['',Validators.required],
      password: ['0000',Validators.required],

    });
    if (this.selectedUser) {

      this.areasForm.patchValue({
        id: this.selectedUser.id,
        userName: this.selectedUser.user_name,
        userIsActive:this.selectedUser.user_isActive,
        userRole: this.selectedUser.user_role,
        userEmail: this.selectedUser.user_email,
        userPhone: this.selectedUser.user_phone,
        name: this.selectedUser.name,
        userLevel: this.selectedUser.user_level,
      });
    }
  }



  close(): void {
    this.matDialogRef.close();
  }

  saveUser() {

    if (this.areasForm.invalid) {
      this.areasForm.markAllAsTouched();
      return;
    }
    if (!this.selectedUser) {
      this.areasForm.disable();

      this._userService.addUser(this.areasForm.value).pipe(finalize(() => {
        this.areasForm.enable();
      })).subscribe(response => {
        this._loggerService.logger(response);
        this.matDialogRef.close(response);
      }, error => {
        this._snackBarService.snackBarPopup(this.getLabel(error.error.error), 'ok');
        this._loggerService.logger(error);
      })
    }
    else {
      this.areasForm.disable();
      this._userService.updateUser(this.areasForm.value).pipe(finalize(() => {
        this.areasForm.enable();
      })).subscribe(response => {
        this._loggerService.logger(response);
        this.matDialogRef.close(response);
      }, error => {
        this._snackBarService.snackBarPopup(this.getLabel(error.error.error), 'ok');
        this._loggerService.logger(error);
      })
    }
  }
}
