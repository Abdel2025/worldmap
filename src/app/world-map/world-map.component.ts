import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-world-map',
  standalone: true,
  imports: [],
  templateUrl: './world-map.component.html',
  styleUrl: './world-map.component.css'
})
export class WorldMapComponent {
  
  countrydata: any = {};

  constructor (private apiService: ApiService) {}
  
  setCountryData(event: any) {
    console.log('event', event.target.id);
    this.apiService.setCountryData(event.target.id).subscribe((data: any) => {
      console.log(data)
      this.countrydata = {
        name: data.name,
        capital: data.capital,
        region: data.region,
        income: data.income,
        longitude: data.longitude,
        latitude: data.latitude
      }
    })
  }
}
