import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}
  getData() {
    let url =
      'https://www.swiggy.com/dapi/restaurants/list/v5?lat=20.7131695&lng=76.5650829&page_type=DESKTOP_WEB_LISTING';
    return this.http.get(url);
  }
}
