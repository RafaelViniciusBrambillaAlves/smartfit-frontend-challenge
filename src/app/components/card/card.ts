import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Location } from '../../types/locations.interface';

@Component({
  selector: 'app-card',
  imports: [CommonModule],
  templateUrl: './card.html',
  styleUrl: './card.scss',
})
export class Card {
  @Input() card!: Location;

}
