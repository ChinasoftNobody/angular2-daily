/**
 * Created by china on 2017/2/12.
 */
import {Component} from '@angular/core';
import {RemoteService} from "../../service/RemoteService";
import {SSOErrorService} from "../../service/sso.error.service";
@Component({
    moduleId:module.id,
    selector: 'my-app',
    templateUrl: '../views/app.html',
    styleUrls:['../styles/app.css'],
    providers:[RemoteService,SSOErrorService]
})
export class AppComponent{
}
