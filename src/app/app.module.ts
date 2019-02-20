import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';

import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { CreateTariffComponent } from './create-tariff/create-tariff.component';
import { MenutabComponent } from './menutab/menutab.component';
import { HeaderComponent } from './header/header.component';

import { CountryLoadService } from './service/country-load.service';
import { VesselLoadService } from './service/vessel-load.service';
import { AddNewVesselJobComponent } from './add-new-vessel-job/add-new-vessel-job.component';
import { VesselOverviewComponent } from './vessel-overview/vessel-overview.component';
import { VesselDetailsComponent } from './vessel-details/vessel-details.component';
import { BillDetailsComponent } from './bill-details/bill-details.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    CreateTariffComponent,
    MenutabComponent,
    HeaderComponent,
    AddNewVesselJobComponent,
    VesselOverviewComponent,
    VesselDetailsComponent,
    BillDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {
         path: 'home',
         component: IndexComponent
      },
      {
        path: 'create-tariff',
        component: CreateTariffComponent
     },
     {
      path: 'add-new-vessel-job',
      component: AddNewVesselJobComponent
     },
     {
      path: 'vessel-overview',
      component: VesselOverviewComponent
     },
     {
      path: 'vessel-details',
      component: VesselDetailsComponent
     },
     {
      path: 'bill-details',
      component: BillDetailsComponent
     },
     {
      path: '',
      redirectTo: '/home',
      pathMatch: 'full'
   }
   ])
  ],
  providers: [CountryLoadService,VesselLoadService],  
  bootstrap: [AppComponent]
})
export class AppModule { }
