import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatCheckboxModule } from "@angular/material/checkbox";
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
import { SharedModule } from "app/shared/shared.module";
import { CheckBoxModule } from "../check-box/check-box.module";
import { ErpGridComponent } from "./erp-grid.component";
import { ErpGridExpandComponent } from "./erp-grid-expand/erp-grid-expand.component";


@NgModule({
    declarations: [
        ErpGridComponent,
        ErpGridExpandComponent
    ],
    imports     : [
        SharedModule,
        MatSelectModule,
        MatRadioModule,
        MatButtonModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatProgressSpinnerModule,
        MatSortModule,
        MatPaginatorModule,
        MatTableModule,
        MatMenuModule,
        MatTooltipModule,
        CheckBoxModule
    ],
    exports : [
        ErpGridComponent
    ]
})
export class ErpGridModule
{

}