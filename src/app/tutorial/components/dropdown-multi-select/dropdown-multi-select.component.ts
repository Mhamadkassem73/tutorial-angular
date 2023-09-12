import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatOption } from '@angular/material/core';
import { MatSelect } from '@angular/material/select';
import { Shared } from 'app/tutorial/shared/shared';

@Component({
  selector: 'app-dropdown-multi-select',
  templateUrl: './dropdown-multi-select.component.html',
  styleUrls: ['./dropdown-multi-select.component.scss']
})

export class DropdownMultiSelectComponent  extends Shared implements OnInit {
  @Input('label') label: string;
  @Input('control') control: string;
  @Input('form') form: FormGroup;
  @Input('labelPosition') labelPosition: string = 'top';
  @Input('options') options = [];
  @Input('optionName') optionName: string;
  @Input('optionValue') optionValue: string;
  @Output() onDropdownSelection = new EventEmitter<any>();
  @Output() onHintDropDownSelection = new EventEmitter<any>();
  @ViewChild('selectBox', { static: false }) selectBox: MatSelect;
  
  @ViewChild('allSelected') private allSelected: MatOption;
  constructor() {
    super();
   }

  ngOnInit(): void {
  }


  tosslePerOne(all){ 
    if (this.allSelected.selected) 
    {  
      this.allSelected.deselect();
      return false;
    }
    if(this.form.controls[this.control].value.length == this.options.length)
    {
      this.allSelected.select();
    }
  }

  toggleAllSelection() {
    if (this.allSelected.selected) 
    {
      this.form.get(this.control)
        .patchValue([...this.options.map(item => item[this.optionValue]),0]);
    } 
    else 
    {
      this.form.get(this.control).patchValue([]);
    }
  }





}
