import { Injectable } from '@angular/core';
import { Housinglocation } from './housinglocation';

@Injectable({
  providedIn: 'root',
})
export class HousingService {
  constructor() {}

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
      photo:
        'https://tse2.mm.bing.net/th?id=OIP.qkPMvVwnnkrLA1OOUtu6YgHaE8&pid=Api&P=0&h=180',
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
      photo:
        'https://tse2.mm.bing.net/th?id=OIP.eoY7JSF4OnqNU997HmFQvgHaE7&pid=Api&P=0&h=180',
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
      photo:
        'https://tse3.mm.bing.net/th?id=OIP.a2ipVCfV7wgNmHFib9WvtwHaEa&pid=Api&P=0&h=180',
      availableUnits: 0,
      wifi: true,
      laundry: false,
    },
  ];

  getAllHousingLocations(): Housinglocation[] {
    return this.housingLocationList;
  }

  getHousingLocationById(id: number): Housinglocation | undefined {
    return this.housingLocationList.find((housingLOcation) => {
      housingLOcation.id === id;
    });
  }
}
