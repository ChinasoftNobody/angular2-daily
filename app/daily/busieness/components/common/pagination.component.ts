import {Component, Input, OnInit} from "@angular/core";
/**
 * Created by Administrator on 2017/5/21.
 */
@Component({
    moduleId: module.id,
    selector: 'daily-pagination',
    templateUrl: '../../views/common/pagination.html',
    styleUrls: ['../../styles/common/pagination.css'],
    providers: []
})
export class PaginationComponent implements OnInit{
    ngOnInit(): void {

    }

    @Input()total:number;
    @Input()pageSize:number;
    @Input()pageNumber:number;


}