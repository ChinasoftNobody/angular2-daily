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
var HeroService_1 = require("../../service/HeroService");
var TestService_1 = require("../../service/TestService");
var sso_error_service_1 = require("../../service/sso.error.service");
/**
 * Created by Administrator on 2017/3/29.
 */
var MainComponent = (function () {
    function MainComponent(heroService, testService, ssoErrorService) {
        this.heroService = heroService;
        this.testService = testService;
        this.ssoErrorService = ssoErrorService;
        this.name = 'local message';
    }
    MainComponent.prototype.ngOnInit = function () {
        this.getHeroes();
    };
    ;
    MainComponent.prototype.onSelect = function (hero) {
        this.selectedHero = hero;
    };
    MainComponent.prototype.getHeroes = function () {
        var _this = this;
        this.testService.getMessage().subscribe(function (data) { return _this.ssoErrorService.resolveRemoteResult(data.json(), function (result) { return _this.name = result; }); });
    };
    return MainComponent;
}());
MainComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'app-main',
        templateUrl: '../views/dashboard.html',
        styleUrls: ['../styles/dashboard.css'],
        providers: [HeroService_1.HeroService, TestService_1.TestService]
    }),
    __metadata("design:paramtypes", [HeroService_1.HeroService,
        TestService_1.TestService,
        sso_error_service_1.SSOErrorService])
], MainComponent);
exports.MainComponent = MainComponent;
//# sourceMappingURL=dashboard.component.js.map