/**
 * Created by china on 2017/2/12.
 */
import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent}   from './app.component';
import {FormsModule}   from '@angular/forms';
import {AppRouterModule} from "./app.router";
@NgModule({
    imports: [BrowserModule, FormsModule,AppRouterModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
}


