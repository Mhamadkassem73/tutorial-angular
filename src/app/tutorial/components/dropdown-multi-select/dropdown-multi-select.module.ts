import { NgModule } from "@angular/core";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatRadioModule } from "@angular/material/radio";
import { MatSelectModule } from "@angular/material/select";
import { SharedModule } from "app/shared/shared.module";
import { DropdownMultiSelectComponent } from "./dropdown-multi-select.component";


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
        DropdownMultiSelectComponent
    ],
    exports : [
        DropdownMultiSelectComponent
    ]
})
export class DropdownMultiSelectModule
{
}
