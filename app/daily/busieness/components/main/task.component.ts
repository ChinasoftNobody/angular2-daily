import {Component, OnInit, ViewContainerRef} from "@angular/core";
import {DateFormatter} from "@angular/common/src/pipes/intl";
import {RemoteService} from "../../../service/remote.service";
import {NgLayer} from "../../../common/Dialog";
import {EventService} from "../../../service/event.service";
/**
 * Created by Administrator on 2017/5/10.
 */
@Component({
    moduleId: module.id,
    selector: 'app-task',
    templateUrl: '../../views/main/task.html',
    styleUrls: ['../../styles/main/task.css'],
    providers: [EventService]
})
export class TaskComponent implements OnInit{
    constructor(private remote:RemoteService,private layer:NgLayer,
                private view:ViewContainerRef,private eventService:EventService){}

    events:any;
    ngOnInit(): void {
        this.remote.post("http://localhost:8080/daily/schedule/query",{userName:'string',pageSize:10,pageNumber:0},{},data=>this.events = data)
    }

    /**
     * 选择页数事件
     * @param pageable 分页信息
     */
    taskPageSelect(pageable:any){
        this.remote.post("http://localhost:8080/daily/schedule/query",{userName:'string',pageSize:pageable.pageSize,pageNumber:pageable.pageNumber},{},data=>this.events = data)
    }

}