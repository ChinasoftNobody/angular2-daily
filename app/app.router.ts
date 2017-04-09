/**
 * Created by Administrator on 2017/3/29.
 */
import {NgModule}             from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from "./daily/component/components/dashboard.component";
const routes: Routes = [
    {path: '', redirectTo: "/dashboard", pathMatch: 'full'},
    {path:'dashboard',component:MainComponent}
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRouterModule {
}