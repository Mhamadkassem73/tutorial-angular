import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Shared } from 'app/tutorial/shared/shared';

@Component({
  selector: 'app-text-area',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.scss']
})
export class TextAreaComponent extends Shared implements OnInit,AfterViewInit {
  @Input('label') label: string;
  @Input('control') control: string;
  @Input('form') form: FormGroup;
  @Input('hint') hint: string;
  @Input('focusOn') focusOn: boolean = false;
  @Input('maxlength') maxlength: number = 100;
  

  @Input('labelPosition') labelPosition: string = 'top';
  constructor() { 
    super();
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    
  }

}
