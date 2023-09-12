import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatSelect } from '@angular/material/select';
import { Shared } from 'app/tutorial/shared/shared';

@Component({
  selector: 'app-dropdown-field',
  templateUrl: './dropdown-field.component.html',
  styleUrls: ['./dropdown-field.component.scss']
})

export class DropdownFieldComponent extends Shared implements OnInit {
  @Input('label') label: string;
  @Input('control') control: string;
  @Input('form') form: FormGroup;
  @Input('hasHint') hasHint: boolean = false;
  @Input('blank') blank: boolean = false;
  @Input('labelPosition') labelPosition: string = 'top';
  @Input('openDropdownList') openDropdownList: boolean = true;
  @Input('options') options = [];
  @Input('optionName') optionName: string;
  @Input('optionValue') optionValue: string;
  @Input('optionName2') optionName2: string;
  @Output() onDropdownSelection = new EventEmitter<any>();
  @Output() onHintDropDownSelection = new EventEmitter<any>();
  @ViewChild('selectBox', { static: false }) selectBox: MatSelect;

  constructor() {
    super();
   }

  ngOnInit(): void {

  }

  onSelectionChange(event)
  {
    if(this.selectBox)
    this.selectBox.close();
    this.onDropdownSelection.emit(event);
  }

  hintSelectionDropDown() {
    this.onHintDropDownSelection.emit(true);
  }

}
