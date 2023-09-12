import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Shared } from 'app/tutorial/shared/shared';

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.scss']
})
export class InputFieldComponent extends Shared implements OnInit,AfterViewInit {
  @Input('label') label: string;
  @Input('control') control: string;
  @Input('type') type: string;
  @Input('form') form: FormGroup;
  @Input('hint') hint: string;
  @Input('prefix') prefix: string=null;
  @Input('focusOn') focusOn: boolean = false;
  @Input('labelPosition') labelPosition: string = 'top';
  @Input('view') view: boolean = false;
  @Input('hasHint') hasHint:  boolean = false;
  @Input('hasRemove') hasRemove:  boolean = false;
  @Input('numberOnly') numberOnly:  boolean = false;
  @Input('generate') generate:  boolean = false;

  @Output() onHintFieldSelection = new EventEmitter<any>();
  @Output() onRemoveFieldSelection = new EventEmitter<any>();
  @Output() onGenerateSelection = new EventEmitter<any>();
  @Output() onChangeField = new EventEmitter<any>();
  @Input('hintIcon') hintIcon = 'heroicons_outline:search';
  @Input('eyePass') eyePass: boolean = false;
  @Input('class') class: string;
  constructor() {
    super();
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
  }

  onChangeValue(value)
  {
    
    this.onChangeField.emit(value);
  }

  hintSelectionField() {
    this.onHintFieldSelection.emit(true);
  }


  removeSelectionField() {
    this.onRemoveFieldSelection.emit(true);
  }
  generateSelection()
  {
    this.onGenerateSelection.emit(true);
  }

}
