import { Component } from '@angular/core';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { CommonModule } from '@angular/common';
import { Housinglocation } from '../housinglocation';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by city" />
        <button class="primary" type="button">Search</button>
      </form>
    </section>
    <section class="results">
      <app-housing-location *ngFor="let housingLocation of housingLocationList"
      [housingLocation]="housingLocation">
      </app-housing-location>
    </section>
  `,
  styleUrl: './home.component.css',
})
export class HomeComponent {
  housingLocationList: Housinglocation[] = [
    {
      id: 1,
      name: 'Blue Home 1',
      city: 'California',
      state: 'USA',
      photo:
        'https://tse2.mm.bing.net/th?id=OIP.YDtqpulDOIYuk6kI4LJKZgHaFx&pid=Api&P=0&h=180',
      availableUnits: 10,
      wifi: true,
      laundry: false,
    },
    {
      id: 2,
      name: 'Blue Home 2',
      city: 'Arkansas',
      state: 'USA',
      photo:
        'https://tse3.mm.bing.net/th?id=OIP.eJGBu6oz6Qo8LG5IbTma6gHaHa&pid=Api&P=0&h=180',
      availableUnits: 2,
      wifi: true,
      laundry: true,
    },
    {
      id: 3,
      name: 'Blue Home 3',
      city: 'Arizona',
      state: 'USA',
      photo: 'https://tse2.mm.bing.net/th?id=OIP.qkPMvVwnnkrLA1OOUtu6YgHaE8&pid=Api&P=0&h=180',
      availableUnits: 0,
      wifi: true,
      laundry: false,
    },
    {
      id: 4,
      name: 'Blue Home 4',
      city: 'California',
      state: 'USA',
      photo:
        'https://tse3.mm.bing.net/th?id=OIP.YaJY82UO0qIOyuFRhNu82QHaFK&pid=Api&P=0&h=180',
      availableUnits: 10,
      wifi: true,
      laundry: false,
    },
    {
      id: 5,
      name: 'Blue Home 5',
      city: 'Arkansas',
      state: 'USA',
      photo:
        'https://tse4.mm.bing.net/th?id=OIP.lywP-ddX9W1VfuMh1HFh8QHaEK&pid=Api&P=0&h=180',
      availableUnits: 2,
      wifi: true,
      laundry: true,
    },
    {
      id: 6,
      name: 'Blue Home 6',
      city: 'Arizona',
      state: 'USA',
      photo: 'https://tse2.mm.bing.net/th?id=OIP.eoY7JSF4OnqNU997HmFQvgHaE7&pid=Api&P=0&h=180',
      availableUnits: 0,
      wifi: true,
      laundry: false,
    },
    {
      id: 7,
      name: 'Blue Home 7',
      city: 'Arkansas',
      state: 'USA',
      photo:
        'https://tse4.mm.bing.net/th?id=OIP.rZHhaVtWqmdMO_H1Kv5gjwHaD4&pid=Api&P=0&h=180',
      availableUnits: 2,
      wifi: true,
      laundry: true,
    },
    {
      id: 8,
      name: 'Blue Home 8',
      city: 'Arizona',
      state: 'USA',
      photo: 'https://tse3.mm.bing.net/th?id=OIP.a2ipVCfV7wgNmHFib9WvtwHaEa&pid=Api&P=0&h=180',
      availableUnits: 0,
      wifi: true,
      laundry: false,
    },
  ];
}
