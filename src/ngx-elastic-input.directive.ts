/**
 * @license MIT
 * @version 1.1.0
 * @author Leonardo Quevedo
 * @description Elastic input directive.
 */

import { Directive, ViewContainerRef } from '@angular/core'
import { NgModel } from '@angular/forms'

@Directive({
    selector: '[ngx-elastic-input]'
})

export class NgxElasticInputDirective {
    constructor(private _view: ViewContainerRef, private model: NgModel) { }

    ngOnInit() {
        this.model.valueChanges.subscribe(() => { this.updateElementHeight() })
        window.addEventListener('resize', () => { setTimeout(() => { this.updateElementHeight() }, 250) })
    }

    updateElementHeight() {
        let nativeElement = this._view.element.nativeElement.firstElementChild
        nativeElement.style.overflow = 'hidden'
        nativeElement.style.height = 'auto'
        nativeElement.style.height = (nativeElement.scrollHeight) + 'px'
    }

}
