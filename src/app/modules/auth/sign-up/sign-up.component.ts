import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { fuseAnimations } from '@fuse/animations';
import { FuseAlertType } from '@fuse/components/alert';
import { AuthService } from 'app/core/auth/auth.service';
import { UserService } from 'app/tutorial/services/user.service';

@Component({
    selector: 'auth-sign-up',
    templateUrl: './sign-up.component.html',
    encapsulation: ViewEncapsulation.None,
    animations: fuseAnimations
})
export class AuthSignUpComponent implements OnInit {
    @ViewChild('signUpNgForm') signUpNgForm: NgForm;

    alert: { type: FuseAlertType; message: string } = {
        type: 'success',
        message: ''
    };
    signUpForm: FormGroup;
    showAlert: boolean = false;

    /**
     * Constructor
     */
    constructor(
        private _authService: AuthService,
        private _userService: UserService,
        private _formBuilder: FormBuilder,
        private _router: Router
    ) {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void {
        // Create the form
        this.signUpForm = this._formBuilder.group({
            name: ['', Validators.required],
            userName: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            phone: ['', Validators.required],
            password: ['', Validators.required],
            agreements: ['']
        }
        );
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Sign up
     */
    signUp(): void {
        console.log(this.signUpForm.value);
        // Do nothing if the form is invalid
        if (this.signUpForm.invalid) {
            return;
        }

        // Disable the form
       // this.signUpForm.disable();

        console.log(this.signUpForm.value);

        // this._userService.signUp(this.signUpForm.value).subscribe(response=>{
        //     console.log(response);
        // },error=>{

        //     console.log(error);
        // });
        this._userService.signUp(this.signUpForm.value)
            .subscribe(
                (response) => {
                    console.log(response);
                    this._router.navigateByUrl('/confirmation-required');
                },
                (error) => {
                    console.log(error);
                    this.signUpForm.enable();
                    var msg = 'Something went wrong, please try again.';
                    if (error.code == 409) {
                        msg = "userNameOrEmailExist";
                    }
                    this.alert = {
                        type: 'error',
                        message: msg
                    };
                    this.showAlert = true;
                }
            );
    }
}
