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
var cookies_service_1 = require("angular2-cookie/services/cookies.service");
var SSOErrorService = (function () {
    function SSOErrorService(cookie) {
        this.cookie = cookie;
    }
    SSOErrorService.prototype.resolveRemoteResult = function (data, next) {
        if (data.status == 'ok') {
            next(data.result);
            return;
        }
        if (data.result.hasOwnProperty("access") && !data.result.access) {
            this.cookie.put("sso_redirect_url", location.href);
            location.href = 'http://192.168.1.9:8080/';
        }
    };
    return SSOErrorService;
}());
SSOErrorService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [cookies_service_1.CookieService])
], SSOErrorService);
exports.SSOErrorService = SSOErrorService;
//# sourceMappingURL=sso.error.service.js.map