import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { CountryLoadService } from './../service/country-load.service';
import 'rxjs';

@Component({
  selector: 'app-create-tariff',
  templateUrl: './create-tariff.component.html',
  styleUrls: ['./create-tariff.component.css']
})


export class CreateTariffComponent implements OnInit, AfterViewChecked {

  public currencyPortLoadData;

  public currencyPortDataDetails;

  public ctFormModel:any = {};

  public isReadOnly:boolean = true;
  
  constructor(private currencyLoadService : CountryLoadService) {}

  ngOnInit() {
    // using Observable
    this.currencyLoadService.fetchCountry()
        .subscribe(data => this.currencyPortLoadData = data);
        console.log(this.currencyPortLoadData);
    }

    

    onChanged(value:string){
      console.log(typeof(this.currencyPortLoadData));
      console.log(value);
      if(value!='')
      {
        let obj = this.currencyPortLoadData.filter(res => res.country_name == value);
        this.currencyPortDataDetails = obj;
        console.log(this.currencyPortDataDetails);
        return this.currencyPortDataDetails;
      }
        else{
          this.currencyLoadService.fetchCountry().subscribe(
              (data => this.currencyPortLoadData = data)
            );
        }
    }

    onSubmit() {
      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.ctFormModel));
    }

    ngAfterViewChecked(): void {
      //setYears(2000, 2100);
      //showCalender(this, 'validFrom');
      
    }
  
}
  
