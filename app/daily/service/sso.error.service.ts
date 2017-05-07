import {Injectable} from "@angular/core";
import {CookieService} from "angular2-cookie/services/cookies.service";
/**
 * Created by Administrator on 2017/5/7.
 */
@Injectable()
export class SSOErrorService{
    constructor(private cookie: CookieService){}

    resolveRemoteResult(data:any,next?: (value: any) => void){
        debugger;
        if(data.status == 'ok'){
            next(data.result);
            return;
        }
        if(data.result.hasOwnProperty("access") && !data.result.access){
            this.cookie.put("sso_redirect_url",location.href);
            location.href = 'http://192.168.1.3:8080/';
        }
    }
}