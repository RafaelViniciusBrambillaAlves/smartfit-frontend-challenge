import { Injectable } from '@angular/core';
import { UnitsResponse } from '../types/units-response.interface';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Location } from '../types/locations.interface';

@Injectable({
  providedIn: 'root',
})
export class GetUnits {
  readonly apiUrl = "https://test-frontend-developer.s3.amazonaws.com/data/locations.json";

  private allUnitsSubeject: BehaviorSubject<Location[]> = new BehaviorSubject<Location[]>([]); 
  private allUnits$: Observable<Location[]> = this.allUnitsSubeject.asObservable();
  private filteredUnits: Location[] = []

  constructor(private httpClient: HttpClient) {
    this.httpClient.get<UnitsResponse>(this.apiUrl).subscribe(data => {
      this.allUnitsSubeject.next(data.locations);
      this.filteredUnits = data.locations;
    })
  }

  getAllUnits(): Observable<Location[]> {
    return this.allUnits$;
  }

  getFilteredUnits() {
    return this.filteredUnits;
  }

  setFilteredUnits(value: Location[]){
    this.filteredUnits = value;
  }

}
