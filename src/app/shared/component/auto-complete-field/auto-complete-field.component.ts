import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';

@Component({
  selector: 'auto-complete-field',
  templateUrl: './auto-complete-field.component.html',
  styleUrls: ['./auto-complete-field.component.scss']
})

export class AutoCompleteFieldComponent implements OnInit {
  @Input('formControl') formControl: FormControl<any> = new FormControl()
  @Input('optionsList') options: string[] = []
  @Input('label') label: string = ''
  @Input('placeholder') placeholder: string = ''
  filteredOptions?: Observable<string[]>;

  ngOnInit() {
    this.filteredOptions = this.formControl?.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
}
