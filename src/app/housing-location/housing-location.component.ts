import { Component, Input } from '@angular/core';
import { Housinglocation } from '../housinglocation';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterOutlet],
  template: `
  <section class="listing">
    <img class="listing-photo" [src]="housingLocation.photo" alt="Exterior photo of {{housingLocation.name}}">
    <h2 class="listing-heading">{{ housingLocation.name }}</h2>
    <p class="listing-location">{{ housingLocation.city}}, {{housingLocation.state }}</p>
    <a [routerLink]="['/details', housingLocation.id]">Learn More</a>
  </section>
  `,
  styleUrl: './housing-location.component.css'
})
export class HousingLocationComponent {
  @Input() housingLocation!: Housinglocation  
  // You have to add the ! because the input is expecting the
  // value to be passed. In this case, there is no default value.
  // The exclamation point is called the non-null assertion
  // operator and it tells the TypeScript compiler that the value
  // of this property won't be null or undefined.
}
