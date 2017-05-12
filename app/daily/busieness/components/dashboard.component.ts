import {Component, OnInit} from "@angular/core";
import {RemoteService} from "../../service/RemoteService";
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
        this.remote.post("http://localhost:8080/daily/dashboard/trendStatistics", {name: "liguanghao"}, {}, data => this.init(data))
    }

    constructor(private remote: RemoteService) {
    }

//     option = {
//     title : {
//         text: '南丁格尔玫瑰图',
//         subtext: '纯属虚构',
//         x:'center'
//     },
//     tooltip : {
//         trigger: 'item',
//         formatter: "{a} <br/>{b} : {c} ({d}%)"
//     },
//     legend: {
//         x : 'center',
//         y : 'bottom',
//         data:['rose1','rose2','rose3','rose4','rose5','rose6','rose7','rose8']
//     },
//     toolbox: {
//         show : true,
//         feature : {
//             mark : {show: true},
//             dataView : {show: true, readOnly: false},
//             magicType : {
//                 show: true,
//                 type: ['pie', 'funnel']
//             },
//             restore : {show: true},
//             saveAsImage : {show: true}
//         }
//     },
//     calculable : true,
//     series : [
//         {
//             name:'半径模式',
//             type:'pie',
//             radius : [20, 110],
//             center : ['25%', '50%'],
//             roseType : 'radius',
//             label: {
//                 normal: {
//                     show: false
//                 },
//                 emphasis: {
//                     show: true
//                 }
//             },
//             lableLine: {
//                 normal: {
//                     show: false
//                 },
//                 emphasis: {
//                     show: true
//                 }
//             },
//             data:[
//                 {value:10, name:'rose1'},
//                 {value:5, name:'rose2'},
//                 {value:15, name:'rose3'},
//                 {value:25, name:'rose4'},
//                 {value:20, name:'rose5'},
//                 {value:35, name:'rose6'},
//                 {value:30, name:'rose7'},
//                 {value:40, name:'rose8'}
//             ]
//         },
//         {
//             name:'面积模式',
//             type:'pie',
//             radius : [30, 110],
//             center : ['75%', '50%'],
//             roseType : 'area',
//             data:[
//                 {value:10, name:'rose1'},
//                 {value:5, name:'rose2'},
//                 {value:15, name:'rose3'},
//                 {value:25, name:'rose4'},
//                 {value:20, name:'rose5'},
//                 {value:35, name:'rose6'},
//                 {value:30, name:'rose7'},
//                 {value:40, name:'rose8'}
//             ]
//         }
//     ]
// };

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