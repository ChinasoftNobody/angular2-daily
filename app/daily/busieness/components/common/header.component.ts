import {Component} from "@angular/core";
/**
 * Created by Administrator on 2017/4/9.
 */
@Component({
    moduleId: module.id,
    selector: 'sso-header',
    templateUrl: '../../views/common/header.html',
    styleUrls: ['../../styles/common/header.css'],
    providers: []
})
export class HeaderComponent {
    dropDownOpen:boolean = false;
    dropDown(){
        this.dropDownOpen = !this.dropDownOpen;
    }
}