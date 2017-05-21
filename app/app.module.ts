/**
 * Created by china on 2017/2/12.
 */
import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent}   from './daily/busieness/components/app.component';
import {FormsModule}   from '@angular/forms';
import {AppRouterModule} from "./app.router";
import {HttpModule} from "@angular/http";
import {CookieService} from 'angular2-cookie/services/cookies.service';
import {DashboardComponent} from "./daily/busieness/components/dashboard.component";
import {HeaderComponent} from "./daily/busieness/components/common/header.component";
import {FooterComponent} from "./daily/busieness/components/common/footer.component";
import {TaskComponent} from "./daily/busieness/components/main/task.component";
import {SettingComponent} from "./daily/busieness/components/main/setting.component";
import {ZoneComponent} from "./daily/busieness/components/main/zone.component";
import {EchartsNg2Module} from "./daily/common/echarts-ng2.module";
import {NgLayer} from "./daily/common/Dialog";
import {RemoteService} from "./daily/service/remote.service";
import {PaginationComponent} from "./daily/busieness/components/common/pagination.component";

@NgModule({
    imports: [BrowserModule, FormsModule,AppRouterModule,HttpModule,EchartsNg2Module],
    declarations: [AppComponent,DashboardComponent,HeaderComponent,FooterComponent,TaskComponent,SettingComponent,ZoneComponent,PaginationComponent],
    providers: [CookieService,NgLayer,RemoteService],
    bootstrap: [AppComponent,HeaderComponent,FooterComponent]
})
export class AppModule {
}


