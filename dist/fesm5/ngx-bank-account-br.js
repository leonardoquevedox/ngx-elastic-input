import { CommonModule } from '@angular/common';
import { Directive, ViewContainerRef, NgModule } from '@angular/core';
import { NgModel } from '@angular/forms';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgxElasticInputDirective = /** @class */ (function () {
    function NgxElasticInputDirective(_view, model) {
        this._view = _view;
        this.model = model;
    }
    /**
     * @return {?}
     */
    NgxElasticInputDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.model.valueChanges.subscribe(function () { _this.updateElementHeight(); });
        window.addEventListener('resize', function () { setTimeout(function () { _this.updateElementHeight(); }, 250); });
    };
    /**
     * @return {?}
     */
    NgxElasticInputDirective.prototype.updateElementHeight = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var nativeElement = this._view.element.nativeElement.firstElementChild;
        nativeElement.style.overflow = 'hidden';
        nativeElement.style.height = 'auto';
        nativeElement.style.height = (nativeElement.scrollHeight) + 'px';
    };
    NgxElasticInputDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[ngx-elastic-input]'
                },] }
    ];
    /** @nocollapse */
    NgxElasticInputDirective.ctorParameters = function () { return [
        { type: ViewContainerRef },
        { type: NgModel }
    ]; };
    return NgxElasticInputDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgxElasticInputDirectiveModule = /** @class */ (function () {
    function NgxElasticInputDirectiveModule() {
    }
    NgxElasticInputDirectiveModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    declarations: [NgxElasticInputDirective],
                    exports: [NgxElasticInputDirective]
                },] }
    ];
    return NgxElasticInputDirectiveModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { NgxElasticInputDirectiveModule, NgxElasticInputDirective as ɵa };

//# sourceMappingURL=ngx-bank-account-br.js.map