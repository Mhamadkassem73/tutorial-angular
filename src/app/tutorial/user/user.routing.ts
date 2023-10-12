import { Route } from "@angular/router";
import { UserComponent } from "./user.component";
import { DashboardComponent } from "./dashboard/dashboard.component";



export const userRoutes: Route[] = [
    {
        path     : '',
        component: UserComponent
    },
    {
        path     : 'user-dashboard/:id',
        component: DashboardComponent
    },

];
