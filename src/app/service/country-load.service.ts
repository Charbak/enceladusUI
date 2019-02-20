import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { map, filter, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs'
import 'rxjs';
import { ArrayType } from '@angular/compiler/src/output/output_ast';
import { of } from 'rxjs/internal/observable/of';
import { ICountry } from './country'


@Injectable({
  providedIn: 'root'
})
export class CountryLoadService {

  private _url = "assets/data/port_data.json";

  constructor(private http : HttpClient ) {}


  // HTTP get operation to fetch the port data from static JSON
  // generate Observable
/* fetchCountry() : Observable<ICountry[]>{  
  //return this.http.get(this._url).pipe(map((res) => of(res)));
  return this.http.get<ICountry[]>(this._url); */

  fetchCountry(){  
    return this.http.get(this._url);
    //return this.http.get(this._url).pipe(map((res) => of(res)));
    //return this.http.get<ICountry[]>(this._url);

  // stack  - using doPromise()
  //return this.http.get("assets/data/port_data.json").toPromise().then(d=>d);
}
}
