"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var remote_service_1 = require("../../service/remote.service");
/**
 * Created by Administrator on 2017/3/29.
 */
var DashboardComponent = (function () {
    function DashboardComponent(remote) {
        this.remote = remote;
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
                indicator: [
                    { name: '学习', max: 10 },
                    { name: '家庭', max: 10 },
                    { name: '工作', max: 10 },
                    { name: '休闲', max: 10 },
                    { name: '思考', max: 10 },
                    { name: '娱乐', max: 10 }
                ]
            },
            series: [{
                    name: '日常偏向',
                    type: 'radar',
                    // areaStyle: {normal: {}},
                    data: [
                        { value: [0, 0, 0, 0, 0, 0], name: '日常偏向' }
                    ]
                }]
        };
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.remote.post("http://localhost:8080/daily/dashboard/trendStatistics", { userName: "liguanghao" }, {}, function (data) { return _this.init(data); });
    };
    DashboardComponent.prototype.init = function (data) {
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
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'app-dashboard',
        templateUrl: '../views/dashboard.html',
        styleUrls: ['../styles/dashboard.css'],
        providers: [remote_service_1.RemoteService]
    }),
    __metadata("design:paramtypes", [remote_service_1.RemoteService])
], DashboardComponent);
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map