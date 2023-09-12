import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Shared } from 'app/tutorial/shared/shared';

@Component({
  selector: 'app-check-box',
  templateUrl: './check-box.component.html',
  styleUrls: ['./check-box.component.scss']
})
export class CheckBoxComponent extends Shared implements OnInit {

  @Input('control') control = [];
  @Input('label') label ;
  @Input('form') form: FormGroup;
  @Input('value') value: boolean = false ;
  @Output() checkBoxChange = new EventEmitter<any>();
  constructor() {
    super();
   }

  ngOnInit(): void {
  }

  checkboxCheked(event,control): void
  {
    event.control=control;
    this.checkBoxChange.emit(event);
  }

}
