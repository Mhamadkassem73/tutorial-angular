import { NgModule } from "@angular/core";
import { SharedModule } from "app/shared/shared.module";
import { ErpGridModule } from "../erp-grid/erp-grid.module";
import { ReusableGridComponent } from "./reusable-grid.component";

@NgModule({
    imports  : [
        SharedModule,
        ErpGridModule

    ],
    providers: [
    ],
    declarations: [
        ReusableGridComponent
    ],
    exports : [
        ReusableGridComponent
    ]
})
export class ReusableGridnModule
{
}
