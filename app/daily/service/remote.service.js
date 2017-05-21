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
var http_1 = require("@angular/http");
var RemoteService = RemoteService_1 = (function () {
    function RemoteService(http) {
        this.http = http;
    }
    RemoteService.resolveResult = function (data, next, error) {
        if (data.status == 'ok') {
            next(data.result);
        }
        else {
            if (error) {
                error(data.result);
            }
            else {
                console.error(data.result);
            }
        }
    };
    RemoteService.prototype.get = function (url, option, next, error) {
        this.http.get(url, option).subscribe(function (data) { return RemoteService_1.resolveResult(data.json(), next, error); });
    };
    RemoteService.prototype.post = function (url, body, option, next, error) {
        this.http.post(url, body, option).subscribe(function (data) { return RemoteService_1.resolveResult(data.json(), next, error); });
    };
    return RemoteService;
}());
RemoteService = RemoteService_1 = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], RemoteService);
exports.RemoteService = RemoteService;
var RemoteService_1;
//# sourceMappingURL=remote.service.js.map