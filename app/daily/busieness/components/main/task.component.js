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
var remote_service_1 = require("../../../service/remote.service");
var Dialog_1 = require("../../../common/Dialog");
var event_service_1 = require("../../../service/event.service");
/**
 * Created by Administrator on 2017/5/10.
 */
var TaskComponent = (function () {
    function TaskComponent(remote, layer, view, eventService) {
        this.remote = remote;
        this.layer = layer;
        this.view = view;
        this.eventService = eventService;
    }
    TaskComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.remote.post("http://localhost:8080/daily/schedule/query", { userName: 'string', pageSize: 10, pageNumber: 0 }, {}, function (data) { return _this.events = data; });
    };
    /**
     * 选择页数事件
     * @param pageable 分页信息
     */
    TaskComponent.prototype.taskPageSelect = function (pageable) {
        var _this = this;
        this.remote.post("http://localhost:8080/daily/schedule/query", { userName: 'string', pageSize: pageable.pageSize, pageNumber: pageable.pageNumber }, {}, function (data) { return _this.events = data; });
    };
    return TaskComponent;
}());
TaskComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'app-task',
        templateUrl: '../../views/main/task.html',
        styleUrls: ['../../styles/main/task.css'],
        providers: [event_service_1.EventService]
    }),
    __metadata("design:paramtypes", [remote_service_1.RemoteService, Dialog_1.NgLayer,
        core_1.ViewContainerRef, event_service_1.EventService])
], TaskComponent);
exports.TaskComponent = TaskComponent;
//# sourceMappingURL=task.component.js.map