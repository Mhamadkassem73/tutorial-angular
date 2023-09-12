import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Shared } from 'app/tutorial/shared/shared';

@Component({
  selector: 'app-radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.scss']
})
export class RadioButtonComponent extends Shared implements OnInit {
  @Input('radiosButtons') radiosButtons = [];
  @Input('control') control = [];
  @Input('form') form: FormGroup;
  @Input('direction') direction: string="row";
  
  @Output() radioButtonChange = new EventEmitter<any>();
  constructor() {
    super();
   }

  ngOnInit(): void {
  }

  onChangeRadioButton(event): void
  {
    this.radioButtonChange.emit(event);
  }

}
