(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/core'), require('@angular/forms')) :
    typeof define === 'function' && define.amd ? define('ngx-bank-account-br', ['exports', '@angular/common', '@angular/core', '@angular/forms'], factory) :
    (factory((global['ngx-bank-account-br'] = {}),global.ng.common,global.ng.core,global.ng.forms));
}(this, (function (exports,common,core,forms) { 'use strict';

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
            { type: core.Directive, args: [{
                        selector: '[ngx-elastic-input]'
                    },] }
        ];
        /** @nocollapse */
        NgxElasticInputDirective.ctorParameters = function () {
            return [
                { type: core.ViewContainerRef },
                { type: forms.NgModel }
            ];
        };
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
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule],
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

    exports.NgxElasticInputDirectiveModule = NgxElasticInputDirectiveModule;
    exports.ɵa = NgxElasticInputDirective;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=ngx-bank-account-br.umd.js.map