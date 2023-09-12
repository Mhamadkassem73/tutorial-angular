import { NgModule } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { SharedModule } from 'app/shared/shared.module';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { RadioButtonComponent } from './radio-button.component';

@NgModule({
    imports  : [
        MatCheckboxModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        SharedModule,
        MatSelectModule,
        MatRadioModule,
        MatButtonToggleModule
    ],
    providers: [
    ],
    declarations: [
        RadioButtonComponent
    ],
    exports : [
        RadioButtonComponent
    ]
})
export class RadioButtonModule
{
}
