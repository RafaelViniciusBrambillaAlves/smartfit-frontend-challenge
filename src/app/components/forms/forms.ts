import { Component, EventEmitter, OnInit, Output, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule  } from '@angular/forms';
import { GetUnits } from '../../services/get-units';
import { FilterUnits } from '../../services/filter-units';
import { Location } from '../../types/locations.interface';

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './forms.html',
  styleUrl: './forms.scss',
})
export class Forms implements OnInit {
  @Output() submitEvent = new EventEmitter;
  results: Location[] = [];
  filteredResults: Location[] = [];
  formGroup!: FormGroup;

  private formBuilder = inject(FormBuilder); 
  private unitService = inject(GetUnits);
  private filterUnitService = inject(FilterUnits);

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      hour: '',
      showClosed: true
    })
    this.unitService.getAllUnits().subscribe(data => {
      this.results = data;
      this.filteredResults = data;
    });
  }

  onSubmit(): void {
    let {showClosed, hour} = this.formGroup.value;
    this.filteredResults = this.filterUnitService.filter(this.results, showClosed, hour)
    this.unitService.setFilteredUnits(this.filteredResults);

    this.submitEvent.emit();
  }

  onClean(): void {
  }


}
