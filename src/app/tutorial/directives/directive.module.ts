import { NgModule } from '@angular/core';
import { FocusOnShowDirective } from './focus.directive';
import { NumberDirective } from './number-only.directive';

@NgModule({
  imports: [],
  declarations: [FocusOnShowDirective,NumberDirective],
  exports: [FocusOnShowDirective,NumberDirective]
})
export class DirectivesModule { }