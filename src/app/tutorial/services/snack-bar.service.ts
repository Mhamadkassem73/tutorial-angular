import { Injectable } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { MatSnackBar } from "@angular/material/snack-bar";
import { FuseConfirmationService } from "@fuse/services/confirmation";

@Injectable({
    'providedIn' : 'root'
})
export class SnackBarService
{
    private configForm: FormGroup;
    
    constructor(private _snackBar: MatSnackBar,private _formBuilder: FormBuilder,private _fuseConfirmationService: FuseConfirmationService)
    {

    }
    snackBarPopup(msg,action)
    {
        this._snackBar.open(msg,action,{
            verticalPosition: 'top',
            horizontalPosition: 'center',
            duration        : 5000,  
        });
    }

    openConfirmationDialog(title: string,msg: string,type: string = 'warn',label:string = 'remove'): Promise<any>
    {
        return new Promise((resolve, reject) => {
            this.configForm = this._formBuilder.group({
                title      : title,
                message    : msg,
                icon       : this._formBuilder.group({
                    show : true,
                    name : 'heroicons_outline:exclamation',
                    color: type
                }),
                actions    : this._formBuilder.group({
                    confirm: this._formBuilder.group({
                        show : true,
                        label: label,
                        color: type
                    }),
                    cancel : this._formBuilder.group({
                        show : true,
                        label: 'خروج'
                    })
                }),
                dismissible: false
            });
            const dialogRef = this._fuseConfirmationService.open(this.configForm.value);
            dialogRef.afterClosed().subscribe((result) => {
                resolve(result);
            });
        }); 
    }
}