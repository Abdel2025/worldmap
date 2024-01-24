import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  
  
  constructor(private http: HttpClient) { }

  fetchCountryData(country: string) {
    let apiurl = 'https://api.worldbank.org/v2/country/'+country+'?format=json';

    return this.http.get(apiurl);
  }

  setCountryData(country: string) {
    let subject = new Subject();
    
    this.fetchCountryData(country).subscribe((data: any) => {
      let dataPath: any = data[1];
      
      subject.next({
        name: dataPath[0].name,
        capital: dataPath[0].capitalCity,
        region: dataPath[0].region.value,
        income: dataPath[0].incomeLevel.value,
        longitude: dataPath[0].longitude,
        latitude: dataPath[0].latitude
      })
    })

    return subject.asObservable();
  }


}
