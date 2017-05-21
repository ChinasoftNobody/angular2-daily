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
/**
 * Created by Administrator on 2017/5/21.
 */
var PaginationComponent = (function () {
    function PaginationComponent() {
    }
    PaginationComponent.prototype.ngOnInit = function () {
    };
    return PaginationComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], PaginationComponent.prototype, "total", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], PaginationComponent.prototype, "pageSize", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], PaginationComponent.prototype, "pageNumber", void 0);
PaginationComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'daily-pagination',
        templateUrl: '../../views/common/pagination.html',
        styleUrls: ['../../styles/common/pagination.css'],
        providers: []
    })
], PaginationComponent);
exports.PaginationComponent = PaginationComponent;
//# sourceMappingURL=pagination.component.js.map