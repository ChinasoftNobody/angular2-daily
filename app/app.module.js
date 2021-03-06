"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by china on 2017/2/12.
 */
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_component_1 = require("./daily/busieness/components/app.component");
var forms_1 = require("@angular/forms");
var app_router_1 = require("./app.router");
var http_1 = require("@angular/http");
var cookies_service_1 = require("angular2-cookie/services/cookies.service");
var dashboard_component_1 = require("./daily/busieness/components/dashboard.component");
var header_component_1 = require("./daily/busieness/components/common/header.component");
var footer_component_1 = require("./daily/busieness/components/common/footer.component");
var task_component_1 = require("./daily/busieness/components/main/task.component");
var setting_component_1 = require("./daily/busieness/components/main/setting.component");
var zone_component_1 = require("./daily/busieness/components/main/zone.component");
var echarts_ng2_module_1 = require("./daily/common/echarts-ng2.module");
var Dialog_1 = require("./daily/common/Dialog");
var remote_service_1 = require("./daily/service/remote.service");
var pagination_component_1 = require("./daily/busieness/components/common/pagination.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, app_router_1.AppRouterModule, http_1.HttpModule, echarts_ng2_module_1.EchartsNg2Module],
        declarations: [app_component_1.AppComponent, dashboard_component_1.DashboardComponent, header_component_1.HeaderComponent, footer_component_1.FooterComponent, task_component_1.TaskComponent, setting_component_1.SettingComponent, zone_component_1.ZoneComponent, pagination_component_1.PaginationComponent],
        providers: [cookies_service_1.CookieService, Dialog_1.NgLayer, remote_service_1.RemoteService],
        bootstrap: [app_component_1.AppComponent, header_component_1.HeaderComponent, footer_component_1.FooterComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map