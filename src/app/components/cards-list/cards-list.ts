import { Component, inject, Input } from '@angular/core';
import { GetUnits } from '../../services/get-units';
import { Location } from '../../types/locations.interface';
import { Card } from "../card/card";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cards-list',
  imports: [Card, CommonModule],
  templateUrl: './cards-list.html',
  styleUrl: './cards-list.scss',
})
export class CardsList {
  @Input() unitsList: Location[] = [];
  
  ngOnInit(): void {
  }

}
