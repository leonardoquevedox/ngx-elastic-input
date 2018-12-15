import { CommonModule } from '@angular/common';
import { Directive, ViewContainerRef, NgModule } from '@angular/core';
import { NgModel } from '@angular/forms';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgxElasticInputDirective {
    /**
     * @param {?} _view
     * @param {?} model
     */
    constructor(_view, model) {
        this._view = _view;
        this.model = model;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.model.valueChanges.subscribe(() => { this.updateElementHeight(); });
        window.addEventListener('resize', () => { setTimeout(() => { this.updateElementHeight(); }, 250); });
    }
    /**
     * @return {?}
     */
    updateElementHeight() {
        /** @type {?} */
        let nativeElement = this._view.element.nativeElement.firstElementChild;
        nativeElement.style.overflow = 'hidden';
        nativeElement.style.height = 'auto';
        nativeElement.style.height = (nativeElement.scrollHeight) + 'px';
    }
}
NgxElasticInputDirective.decorators = [
    { type: Directive, args: [{
                selector: '[ngx-elastic-input]'
            },] }
];
/** @nocollapse */
NgxElasticInputDirective.ctorParameters = () => [
    { type: ViewContainerRef },
    { type: NgModel }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgxElasticInputDirectiveModule {
}
NgxElasticInputDirectiveModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [NgxElasticInputDirective],
                exports: [NgxElasticInputDirective]
            },] }
];

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