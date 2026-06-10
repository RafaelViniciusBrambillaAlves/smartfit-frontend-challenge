import { Component, inject, Inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./components/header/header";
import { Forms } from "./components/forms/forms";
import { BehaviorSubject } from 'rxjs';
import { CardsList } from "./components/cards-list/cards-list";
import { GetUnits } from './services/get-units';
import { Location } from './types/locations.interface';
import { CommonModule  } from '@angular/common';
import { Legend } from "./components/legend/legend";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    Header,
    Forms,
    CardsList,
    CommonModule,
    Legend
],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('desafio-smartfit');

  showList = new BehaviorSubject(false);
  unitsList: Location[] = [];

  private unitService = inject(GetUnits);

  onSubmit(){
    this.showList.next(true);
    this.unitsList = this.unitService.getFilteredUnits();
  }
}
