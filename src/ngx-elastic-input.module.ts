/**
 * @license MIT
 * @author Leonardo Quevedo
 * @description Directive module.
 */

import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { NgxElasticInputDirective } from './ngx-elastic-input.directive'

@NgModule({
    imports: [CommonModule],
    declarations: [NgxElasticInputDirective],
    exports: [NgxElasticInputDirective]
})
export class NgxElasticInputDirectiveModule { }