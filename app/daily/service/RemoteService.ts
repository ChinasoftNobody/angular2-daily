import {Injectable} from "@angular/core";
import {Http, RequestOptionsArgs} from "@angular/http";
@Injectable()
export class RemoteService {
    constructor(private http: Http) {
    }

    public static resolveResult(data: any, next?: (value: any) => void, error?: (value: any) => void) {
        if(data.status == 'ok'){
            next(data.result);
        }else {
            if(error){
                error(data.result);
            }else {
                console.error(data.result);
            }
        }
    }

    get(url: string, option: RequestOptionsArgs, next?: (value: any) => void, error?: (value: any) => void) {
        this.http.get(url, option).subscribe(data => RemoteService.resolveResult(data.json(), next, error));
    }

    post(url: string, body: any, option: RequestOptionsArgs, next?: (value: any) => void, error?: (value: any) => void) {
        this.http.post(url, body, option).subscribe(data => RemoteService.resolveResult(data.json(), next, error));
    }
}