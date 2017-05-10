import {Component, OnInit} from "@angular/core";
import {HeroService} from "../../service/HeroService";
import {Hero} from "../../bean/hero";
import {TestService} from "../../service/TestService";
import {stringify} from "querystring";
import {SSOErrorService} from "../../service/sso.error.service";
/**
 * Created by Administrator on 2017/3/29.
 */
@Component({
    moduleId: module.id,
    selector: 'app-dashboard',
    templateUrl: '../views/dashboard.html',
    styleUrls: ['../styles/dashboard.css'],
    providers: [HeroService, TestService]
})
export class DashboardComponent{

}