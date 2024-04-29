import { ZoomComponent } from "./zoom.component";

import { NgModule } from "@angular/core";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatButtonModule } from "@angular/material/button";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatDialog } from "@angular/material/dialog";
import { MatDividerModule } from "@angular/material/divider";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatMenuModule } from "@angular/material/menu";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatRadioModule } from "@angular/material/radio";
import { MatSelectModule } from "@angular/material/select";
import { MatSortModule } from "@angular/material/sort";
import { MatTableModule } from "@angular/material/table";
import { MatTooltipModule } from "@angular/material/tooltip";
import { RouterModule } from "@angular/router";
import { FuseAlertModule } from "@fuse/components/alert";
import { FuseCardModule } from "@fuse/components/card";
import { SharedModule } from "app/shared/shared.module";
import { AutoCompleteFieldModule } from "../components/auto-complete-field/auto-complete-field.module";
import { CheckBoxModule } from "../components/check-box/check-box.module";
import { DropdownFieldModule } from "../components/dropdown-field/dropdown-field.module";
import { InputFieldModule } from "../components/input-field/input-field.module";
import { RadioButtonModule } from "../components/radio-button/radio-button.module";
import { TextAreadModule } from "../components/text-area/text-area.module";
import { DirectivesModule } from "../directives/directive.module";

import { ErpGridComponent } from "../components/erp-grid/erp-grid.component";
import { ErpGridModule } from "../components/erp-grid/erp-grid.module";
import { zoomRoutes } from "./zoom.routing";


@NgModule({
    imports  : [
        RouterModule.forChild(zoomRoutes),
        MatButtonModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatProgressSpinnerModule,
        FuseCardModule,
        FuseAlertModule,
        MatSortModule,
        MatPaginatorModule,
        MatTableModule,
        SharedModule,
        MatSelectModule,
        MatRadioModule,
        InputFieldModule,
        DropdownFieldModule,
        MatAutocompleteModule,
        AutoCompleteFieldModule,
        MatTooltipModule,
        MatMenuModule,
        MatDividerModule,
        DirectivesModule,
        CheckBoxModule,
        RadioButtonModule,
        TextAreadModule,
        ErpGridModule,



        
    ],
    providers: [
        MatDialog
    ],
    declarations: [
ZoomComponent
  ]
})
export class ZoomModule
{
}
