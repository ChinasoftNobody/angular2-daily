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
/**
 * Created by Administrator on 2017/5/11.
 */
var core_1 = require("@angular/core");
var echarts = require("echarts");
var EchartsNg2Component = (function () {
    function EchartsNg2Component(el, ngZone) {
        var _this = this;
        this.el = el;
        this.ngZone = ngZone;
        this.opts = { 'height': 400 };
        this.theme = "default";
        this.onBeforeInit = new core_1.EventEmitter();
        this.onAfterInit = new core_1.EventEmitter();
        this.onOptionChange = new core_1.EventEmitter();
        this.init = function () {
            if (!_this.chart) {
                _this.ngZone.runOutsideAngular(function () {
                    _this.onBeforeInit.emit();
                    _this.chart = echarts.init(_this.host.nativeElement, _this.theme, _this.style ? {} : _this.opts);
                    _this.onAfterInit.emit();
                    _this.option && _this.chart.setOption(_this.option);
                    _this.setGroup();
                });
            }
            else {
                _this.option && _this.chart.setOption(_this.option);
            }
        };
        this.dispose = function () {
            _this.chart.dispose();
            _this.chart = null;
        };
        this.setOption = function (option, notMerge, lazyUpdate) {
            _this.chart.setOption(option, notMerge, lazyUpdate);
        };
        this.getWidth = function () {
            return _this.chart.getWidth();
        };
        this.getHeight = function () {
            return _this.chart.getHeight();
        };
        this.getDom = function () {
            return _this.getDom();
        };
        this.getOption = function () {
            return _this.chart.getOption();
        };
        this.resize = function (opts) {
            _this.chart.resize(opts);
        };
        this.dispatchAction = function (payload) {
            _this.chart.dispatchAction(payload);
        };
        this.on = function (eventName, handler, context) {
            _this.chart.on(eventName, handler, context);
        };
        this.off = function (eventName, handler) {
            _this.chart.off(eventName, handler);
        };
        this.convertToPixel = function (finder, value) {
            return _this.chart.convertToPixel(finder, value);
        };
        this.convertFromPixel = function (finder, value) {
            return _this.chart.convertFromPixel(finder, value);
        };
        this.containPixel = function (finder, value) {
            return _this.chart.containPixel(finder, value);
        };
        this.showLoading = function (type, opts) {
            _this.chart.showLoading();
        };
        this.hideLoading = function () {
            _this.chart.hideLoading();
        };
        this.clear = function () {
            _this.chart.clear();
        };
        this.isDisposed = function () {
            return _this.chart ? _this.chart.isDisposed() : true;
        };
        // ----- line -----
        this.connect = function (group) {
            echarts.connect(group);
        };
        this.disconnect = function (group) {
            echarts.disconnect(group);
        };
    }
    EchartsNg2Component.prototype.setGroup = function () {
        this.chart && (typeof this._group !== 'undefined') && (this.chart.group = this._group);
    };
    Object.defineProperty(EchartsNg2Component.prototype, "option", {
        get: function () { return this._option; },
        set: function (option) {
            this._option = option;
            if (this.chart) {
                this.chart.setOption(option);
                this.onOptionChange.emit(option);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EchartsNg2Component.prototype, "group", {
        get: function () { return this._group; },
        set: function (group) {
            this._group = group;
            this.setGroup();
        },
        enumerable: true,
        configurable: true
    });
    EchartsNg2Component.prototype.ngAfterViewInit = function () {
        this.init();
    };
    EchartsNg2Component.prototype.ngOnDestroy = function () {
        this.dispose();
    };
    return EchartsNg2Component;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], EchartsNg2Component.prototype, "theme", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], EchartsNg2Component.prototype, "option", null);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], EchartsNg2Component.prototype, "style", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], EchartsNg2Component.prototype, "group", null);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], EchartsNg2Component.prototype, "onBeforeInit", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], EchartsNg2Component.prototype, "onAfterInit", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], EchartsNg2Component.prototype, "onOptionChange", void 0);
__decorate([
    core_1.ViewChild('host'),
    __metadata("design:type", Object)
], EchartsNg2Component.prototype, "host", void 0);
EchartsNg2Component = __decorate([
    core_1.Component({
        selector: 'echarts-ng2',
        template: '<div #host [ngStyle]="style"></div>'
    }),
    __metadata("design:paramtypes", [core_1.ElementRef,
        core_1.NgZone])
], EchartsNg2Component);
exports.EchartsNg2Component = EchartsNg2Component;
//# sourceMappingURL=ng2-echart.js.map