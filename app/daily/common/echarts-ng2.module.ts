import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EchartsNg2Component} from "./ng2-echart";

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    EchartsNg2Component
  ],
  declarations: [
    EchartsNg2Component
  ]
})
export class EchartsNg2Module { }
