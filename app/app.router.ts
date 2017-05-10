/**
 * Created by Administrator on 2017/3/29.
 */
import {NgModule}             from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from "./daily/busieness/components/dashboard.component";
import {TaskComponent} from "./daily/busieness/components/main/task.component";
import {ZoneComponent} from "./daily/busieness/components/main/zone.component";
import {SettingComponent} from "./daily/busieness/components/main/setting.component";
const routes: Routes = [
    {path: '', redirectTo: "/dashboard", pathMatch: 'full'},
    {path:'dashboard',component:DashboardComponent},
    {path:'task',component:TaskComponent},
    {path:'zone',component:ZoneComponent},
    {path:'setting',component:SettingComponent},
    {path:'logout',component:DashboardComponent},
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRouterModule {
}