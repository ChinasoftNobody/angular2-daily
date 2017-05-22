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
        this.pageable = {
            pageSize: 10,
            pageNumber: 0
        };
        this.pageSelect = new core_1.EventEmitter(this.pageable);
        this.page = {
            currentPage: 0,
            totalPage: 0,
            showPages: []
        };
    }
    PaginationComponent.prototype.ngOnChanges = function () {
        if (this.pageInfo) {
            this.initPage(this.pageInfo);
        }
    };
    /**
     * 初始化分页
     * @param pageInfo 分页信息
     */
    PaginationComponent.prototype.initPage = function (pageInfo) {
        this.page.currentPage = pageInfo.number;
        this.page.totalPage = pageInfo.totalPages;
        this.page.pageSize = pageInfo.size;
        this.pageable.pageNumber = pageInfo.number;
        this.pageable.pageSize = pageInfo.size;
        if (this.page.totalPage <= 10) {
            this.page.showPages = [];
            for (var i = 0; i < this.page.totalPage; i++) {
                this.page.showPages.push(i);
            }
        }
        else {
            this.page.showPages = [];
            var start = this.page.currentPage - 5;
            var end = this.page.currentPage + 5;
            if (start < 0) {
                for (var i = 0; i < 10; i++) {
                    this.page.showPages.push(i);
                }
            }
            else if (end > this.page.totalPage) {
                for (var i = this.page.totalPage - 10; i < this.page.totalPage; i++) {
                    this.page.showPages.push(i);
                }
            }
            else {
                for (var i = start; i < end; i++) {
                    this.page.showPages.push(i);
                }
            }
        }
    };
    /**
     * 选择页数点击事件
     */
    PaginationComponent.prototype.pageSelectClick = function (pageNumber) {
        this.pageable.pageNumber = pageNumber;
        this.pageSelect.emit(this.pageable);
        this.page.currentPage = pageNumber;
    };
    return PaginationComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], PaginationComponent.prototype, "pageInfo", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], PaginationComponent.prototype, "pageSelect", void 0);
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