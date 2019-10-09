import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
   // we declare that this service should be created
  // by the root application injector.
  providedIn: 'root'
})
export class HashrateService {

  public value: number;
  private hashrateURL = 'https://api.blockchain.info/charts/hash-rate?cors=true&format=json&lang=en';

  constructor(private http: HttpClient) { }

  getHashrate(): Observable<any> {
    return this.http.get(this.hashrateURL);
  }

}
