import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { CountryLoadService } from './../service/country-load.service';
import { HttpClient } from '@angular/common/http';
import { ArrayType } from '@angular/compiler/src/output/output_ast';
import { Observable } from 'rxjs/internal/Observable';
import { toArray } from 'rxjs/internal/operators/toArray';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public countryData;

  //@Input() result:string="";
  @Output() changed = new EventEmitter();

  constructor(private countryLoadService : CountryLoadService) {}

  ngOnInit() {
    // using Observable
    this.countryLoadService.fetchCountry()
        .subscribe(data => this.countryData = data);
        console.log(this.countryData);
        console.log(typeof(this.countryData));

  }

  onChange(countryName:string){
    //alert(countryName);
    this.changed.emit(countryName);
  }
}
