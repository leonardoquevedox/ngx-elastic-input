/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license MIT
 * @version 1.1.0
 * @author Leonardo Quevedo
 * @description Elastic input directive.
 */
import { Directive, ViewContainerRef } from '@angular/core';
import { NgModel } from '@angular/forms';
export class NgxElasticInputDirective {
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
if (false) {
    /**
     * @type {?}
     * @private
     */
    NgxElasticInputDirective.prototype._view;
    /**
     * @type {?}
     * @private
     */
    NgxElasticInputDirective.prototype.model;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWVsYXN0aWMtaW5wdXQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWJhbmstYWNjb3VudC1ici8iLCJzb3VyY2VzIjpbIm5neC1lbGFzdGljLWlucHV0LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBT0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGVBQWUsQ0FBQTtBQUMzRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sZ0JBQWdCLENBQUE7QUFNeEMsTUFBTSxPQUFPLHdCQUF3Qjs7Ozs7SUFDakMsWUFBb0IsS0FBdUIsRUFBVSxLQUFjO1FBQS9DLFVBQUssR0FBTCxLQUFLLENBQWtCO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBUztJQUFJLENBQUM7Ozs7SUFFeEUsUUFBUTtRQUNKLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQSxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQ3ZFLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsR0FBRyxFQUFFLEdBQUcsVUFBVSxDQUFDLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFBLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFBLENBQUMsQ0FBQyxDQUFDLENBQUE7SUFDdEcsQ0FBQzs7OztJQUVELG1CQUFtQjs7WUFDWCxhQUFhLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLGlCQUFpQjtRQUN0RSxhQUFhLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUE7UUFDdkMsYUFBYSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFBO1FBQ25DLGFBQWEsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxHQUFHLElBQUksQ0FBQTtJQUNwRSxDQUFDOzs7WUFqQkosU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSxxQkFBcUI7YUFDbEM7Ozs7WUFMbUIsZ0JBQWdCO1lBQzNCLE9BQU87Ozs7Ozs7SUFPQSx5Q0FBK0I7Ozs7O0lBQUUseUNBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlIE1JVFxyXG4gKiBAdmVyc2lvbiAxLjEuMFxyXG4gKiBAYXV0aG9yIExlb25hcmRvIFF1ZXZlZG9cclxuICogQGRlc2NyaXB0aW9uIEVsYXN0aWMgaW5wdXQgZGlyZWN0aXZlLlxyXG4gKi9cclxuXHJcbmltcG9ydCB7IERpcmVjdGl2ZSwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXHJcbmltcG9ydCB7IE5nTW9kZWwgfSBmcm9tICdAYW5ndWxhci9mb3JtcydcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gICAgc2VsZWN0b3I6ICdbbmd4LWVsYXN0aWMtaW5wdXRdJ1xyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIE5neEVsYXN0aWNJbnB1dERpcmVjdGl2ZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF92aWV3OiBWaWV3Q29udGFpbmVyUmVmLCBwcml2YXRlIG1vZGVsOiBOZ01vZGVsKSB7IH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLm1vZGVsLnZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUoKCkgPT4geyB0aGlzLnVwZGF0ZUVsZW1lbnRIZWlnaHQoKSB9KVxyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKSA9PiB7IHNldFRpbWVvdXQoKCkgPT4geyB0aGlzLnVwZGF0ZUVsZW1lbnRIZWlnaHQoKSB9LCAyNTApIH0pXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlRWxlbWVudEhlaWdodCgpIHtcclxuICAgICAgICBsZXQgbmF0aXZlRWxlbWVudCA9IHRoaXMuX3ZpZXcuZWxlbWVudC5uYXRpdmVFbGVtZW50LmZpcnN0RWxlbWVudENoaWxkXHJcbiAgICAgICAgbmF0aXZlRWxlbWVudC5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nXHJcbiAgICAgICAgbmF0aXZlRWxlbWVudC5zdHlsZS5oZWlnaHQgPSAnYXV0bydcclxuICAgICAgICBuYXRpdmVFbGVtZW50LnN0eWxlLmhlaWdodCA9IChuYXRpdmVFbGVtZW50LnNjcm9sbEhlaWdodCkgKyAncHgnXHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==