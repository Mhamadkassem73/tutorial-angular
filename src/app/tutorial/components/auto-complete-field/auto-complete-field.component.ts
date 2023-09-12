import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { LoggerService } from 'app/tutorial/services/logger.service';
import { Shared } from 'app/tutorial/shared/shared';
import { map, Observable, startWith } from 'rxjs';

@Component({
  selector: 'app-auto-complete-field',
  templateUrl: './auto-complete-field.component.html',
  styleUrls: ['./auto-complete-field.component.scss']
})
export class AutoCompleteFieldComponent extends Shared implements OnInit {
  @Input('options') options = [];
  filteredOptions: Observable<string[]>;
  @Input('control') control: string;
  @Input('label') label: string;
  @Input('form') form: FormGroup;
  @Input('hasHint') hasHint: boolean = false;
  @Output() onOptionSelection = new EventEmitter<any>();
  @Output() onHintSelection = new EventEmitter<any>();
  @ViewChild('publicSearchBox') searchBoxField: ElementRef;
  constructor(private _loggerService: LoggerService) {
    super();
   }

  ngOnInit(): void {
    this._loggerService.logger(this.options);
    this.filteredOptions = this.form.get(this.control).valueChanges
    .pipe(
      startWith(''),
      map(value => typeof value === 'string' ? value : value.name),
      map(name => name ? this._filterOptions(name,this.options) : this.options.slice())
    );
    
  }

  private _filterOptions(name: string,options): [] {
    const filterValue = name.toLowerCase();
    return options.filter(option => option.value.toLowerCase().indexOf(filterValue) === 0);
  }

  focusOnMatAutoComplete(): void {
    this.searchBoxField.nativeElement.focus();
  }

  autoCompleteSelection(option): void
  {
    this.onOptionSelection.emit(option);
  }

  hintSelection()
  {
    this.onHintSelection.next(this.options);
  }

}
