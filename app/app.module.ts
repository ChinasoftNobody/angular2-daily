/**
 * Created by china on 2017/2/12.
 */
import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent}   from './daily/component/components/app.component';
import {FormsModule}   from '@angular/forms';
import {AppRouterModule} from "./app.router";
import {MainComponent} from "./daily/component/components/dashboard.component";
import {HttpModule} from "@angular/http";
@NgModule({
    imports: [BrowserModule, FormsModule,AppRouterModule,HttpModule],
    declarations: [AppComponent,MainComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
}


