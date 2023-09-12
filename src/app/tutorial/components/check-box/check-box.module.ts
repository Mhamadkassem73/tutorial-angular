import { NgModule } from "@angular/core";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatRadioModule } from "@angular/material/radio";
import { MatSelectModule } from "@angular/material/select";
import { DirectivesModule } from "app/tutorial/directives/directive.module";
import { SharedModule } from "app/shared/shared.module";
import { CheckBoxComponent } from "./check-box.component";


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
        DirectivesModule
    ],
    providers: [
    ],
    declarations: [
        CheckBoxComponent
    ],
    exports : [
        CheckBoxComponent
    ]
})
export class CheckBoxModule
{

}
