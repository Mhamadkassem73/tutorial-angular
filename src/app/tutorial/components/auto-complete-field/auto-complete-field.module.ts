import { NgModule } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { SharedModule } from 'app/shared/shared.module';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatAutocompleteModule} from '@angular/material/autocomplete';
import { AutoCompleteFieldComponent } from './auto-complete-field.component';

@NgModule({
    imports  : [
        MatCheckboxModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        SharedModule,
        MatSelectModule,
        MatRadioModule,
        MatButtonToggleModule,
        MatAutocompleteModule
    ],
    providers: [
    ],
    declarations: [
        AutoCompleteFieldComponent
    ],
    exports : [
        AutoCompleteFieldComponent
    ]
})
export class AutoCompleteFieldModule
{
}
