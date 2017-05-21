import {Component, OnInit} from "@angular/core";
import {RemoteService} from "../../service/remote.service";
/**
 * Created by Administrator on 2017/3/29.
 */
@Component({
    moduleId: module.id,
    selector: 'app-dashboard',
    templateUrl: '../views/dashboard.html',
    styleUrls: ['../styles/dashboard.css'],
    providers: [RemoteService]
})
export class DashboardComponent implements OnInit {
    ngOnInit(): void {
        this.remote.post("http://localhost:8080/daily/dashboard/trendStatistics", {userName: "liguanghao"}, {}, data => this.init(data))
    }

    constructor(private remote: RemoteService) {
    }

    option1 = {
        title: {
            text: '我的日常偏向'
        },
        tooltip: {},
        legend: {
            data: ['日常偏向']
        },
        radar: {
            // shape: 'circle'
            indicator: [
                {name: '学习', max: 10},
                {name: '家庭', max: 10},
                {name: '工作', max: 10},
                {name: '休闲', max: 10},
                {name: '思考', max: 10},
                {name: '娱乐', max: 10}]
        },
        series: [{
            name: '日常偏向',
            type: 'radar',
            // areaStyle: {normal: {}},
            data: [
                {value : [0, 0, 0, 0, 0, 0],name : '日常偏向'}
                ]
        }]
    };

    private init(data: any) {
        this.option1 = {
            title: {
                text: '我的日常偏向'
            },
            tooltip: {},
            legend: {
                data: ['日常偏向']
            },
            radar: {
                // shape: 'circle'
                indicator: data.indicator
            },
            series: [{
                name: '日常偏向',
                type: 'radar',
                // areaStyle: {normal: {}},
                data: data.data
            }]
        };
    }


}