/**
 * Created by Administrator on 2017/3/29.
 */
import {NgModule}             from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
const routes: Routes = [
    {path: '', redirectTo: '/index', pathMatch: 'full'}
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRouterModule {
}