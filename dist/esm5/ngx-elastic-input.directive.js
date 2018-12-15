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
export { NgxElasticInputDirective };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWVsYXN0aWMtaW5wdXQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWJhbmstYWNjb3VudC1ici8iLCJzb3VyY2VzIjpbIm5neC1lbGFzdGljLWlucHV0LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBT0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGVBQWUsQ0FBQTtBQUMzRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sZ0JBQWdCLENBQUE7QUFFeEM7SUFLSSxrQ0FBb0IsS0FBdUIsRUFBVSxLQUFjO1FBQS9DLFVBQUssR0FBTCxLQUFLLENBQWtCO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBUztJQUFJLENBQUM7Ozs7SUFFeEUsMkNBQVE7OztJQUFSO1FBQUEsaUJBR0M7UUFGRyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsY0FBUSxLQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQSxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQ3ZFLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsY0FBUSxVQUFVLENBQUMsY0FBUSxLQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQSxDQUFDLENBQUMsQ0FBQyxDQUFBO0lBQ3RHLENBQUM7Ozs7SUFFRCxzREFBbUI7OztJQUFuQjs7WUFDUSxhQUFhLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLGlCQUFpQjtRQUN0RSxhQUFhLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUE7UUFDdkMsYUFBYSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFBO1FBQ25DLGFBQWEsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxHQUFHLElBQUksQ0FBQTtJQUNwRSxDQUFDOztnQkFqQkosU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSxxQkFBcUI7aUJBQ2xDOzs7O2dCQUxtQixnQkFBZ0I7Z0JBQzNCLE9BQU87O0lBcUJoQiwrQkFBQztDQUFBLEFBbkJELElBbUJDO1NBZlksd0JBQXdCOzs7Ozs7SUFDckIseUNBQStCOzs7OztJQUFFLHlDQUFzQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZSBNSVRcclxuICogQHZlcnNpb24gMS4xLjBcclxuICogQGF1dGhvciBMZW9uYXJkbyBRdWV2ZWRvXHJcbiAqIEBkZXNjcmlwdGlvbiBFbGFzdGljIGlucHV0IGRpcmVjdGl2ZS5cclxuICovXHJcblxyXG5pbXBvcnQgeyBEaXJlY3RpdmUsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xyXG5pbXBvcnQgeyBOZ01vZGVsIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnXHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICAgIHNlbGVjdG9yOiAnW25neC1lbGFzdGljLWlucHV0XSdcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBOZ3hFbGFzdGljSW5wdXREaXJlY3RpdmUge1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfdmlldzogVmlld0NvbnRhaW5lclJlZiwgcHJpdmF0ZSBtb2RlbDogTmdNb2RlbCkgeyB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5tb2RlbC52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKCgpID0+IHsgdGhpcy51cGRhdGVFbGVtZW50SGVpZ2h0KCkgfSlcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4geyBzZXRUaW1lb3V0KCgpID0+IHsgdGhpcy51cGRhdGVFbGVtZW50SGVpZ2h0KCkgfSwgMjUwKSB9KVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZUVsZW1lbnRIZWlnaHQoKSB7XHJcbiAgICAgICAgbGV0IG5hdGl2ZUVsZW1lbnQgPSB0aGlzLl92aWV3LmVsZW1lbnQubmF0aXZlRWxlbWVudC5maXJzdEVsZW1lbnRDaGlsZFxyXG4gICAgICAgIG5hdGl2ZUVsZW1lbnQuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJ1xyXG4gICAgICAgIG5hdGl2ZUVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gJ2F1dG8nXHJcbiAgICAgICAgbmF0aXZlRWxlbWVudC5zdHlsZS5oZWlnaHQgPSAobmF0aXZlRWxlbWVudC5zY3JvbGxIZWlnaHQpICsgJ3B4J1xyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=