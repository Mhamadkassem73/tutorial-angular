import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { fuseAnimations } from '@fuse/animations';
import { FuseAlertType } from '@fuse/components/alert';
import { AuthService } from 'app/core/auth/auth.service';
import { AuthenticationService } from 'app/tutorial/services/authentication.service';
import { LoggerService } from 'app/tutorial/services/logger.service';
import { UserService } from 'app/tutorial/services/user.service';

@Component({
    selector     : 'auth-sign-in',
    templateUrl  : './sign-in.component.html',
    encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations
})
export class AuthSignInComponent implements OnInit
{
    @ViewChild('signInNgForm') signInNgForm: NgForm;

    alert: { type: FuseAlertType; message: string } = {
        type   : 'success',
        message: ''
    };
    signInForm: FormGroup;
    showAlert: boolean = false;
    loginValid: boolean = false;
    
    /**
     * Constructor
     */
    constructor(
        private _activatedRoute: ActivatedRoute,
        private _authService: AuthService,
        private _formBuilder: FormBuilder,
        private _router: Router,
        private _authenticationService:AuthenticationService,
        private _loggerService:LoggerService,
        private _userService:UserService,
    )
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
        // Create the form
        this.signInForm = this._formBuilder.group({
            user_name     : ['', [Validators.required]],
            password  : ['', Validators.required],
            rememberMe: ['']
        });
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Sign in
     */
    signIn(): void
    {
        // Return if the form is invalid
        if ( this.signInForm.invalid )
        {
            return;
        }

        // Disable the form
        this.signInForm.disable();

        // Hide the alert
        this.showAlert = false;

        // Sign in
        this._userService.signIn(this.signInForm.value)
        .subscribe(
            (response) => {
            // Navigate to the redirect url
            this._loggerService.logger(this.signInForm.value);
            this._loggerService.logger(response);
           // const redirectURL = this._activatedRoute.snapshot.queryParamMap.get('redirectURL') || '/signed-in-redirect';
            const token = response.data.token_type+" "+response.data.access_token;
            this._userService.setToken(response.data.access_token,response.data.user.name);
            //this._userService.loggedUser.next(response.data.data); // emit user info
           // this._splashScreenService.getUtilities();
            //this._router.navigateByUrl('/user');
            setTimeout(() => {
                this._router.navigateByUrl('/test/level-page');  
            }, 100);
           
        },(error) =>{
            this._loggerService.logger(error);
            // Re-enable the form
            this.signInForm.enable();
            this._loggerService.logger(error);
            // Reset the form
            this.signInNgForm.resetForm();

            // Set the alert
            this.alert = {
                type   : 'error',
                message: 'Wrong email or password'
            };

            // Show the alert
            this.showAlert = true;
        });
    }


}
