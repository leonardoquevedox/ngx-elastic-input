/**
 * @license MIT
 * @version 1.1.0
 * @author Leonardo Quevedo
 * @description Elastic input directive.
 */
import { ViewContainerRef } from '@angular/core';
import { NgModel } from '@angular/forms';
export declare class NgxElasticInputDirective {
    private _view;
    private model;
    constructor(_view: ViewContainerRef, model: NgModel);
    ngOnInit(): void;
    updateElementHeight(): void;
}
