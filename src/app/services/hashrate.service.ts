import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class HashrateService {

  constructor(private http: HttpClient) { }

  private hashrateURL = 'https://api.blockchain.info/charts/hash-rate?cors=true&format=json&lang=en';

  getHashrate(): Observable<any> {
    return this.http.get(this.hashrateURL);
  }
}
