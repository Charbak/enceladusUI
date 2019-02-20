import { Component, OnInit } from '@angular/core';
import { VesselLoadService } from './../service/vessel-load.service';
@Component({
  selector: 'app-vessel-overview',
  templateUrl: './vessel-overview.component.html',
  styleUrls: ['./vessel-overview.component.css']
})
export class VesselOverviewComponent implements OnInit {

  public vesselData;
  foo = {};
  private vo_dummyData = [10,7,5,50,30,16];
  constructor(private vesselLoadService : VesselLoadService) {}

  ngOnInit() {
    this.vesselLoadService.fetchVessels().subscribe(
      (data => console.log(this.vesselData = data))
    );
  }

  /* onChanged(value:string){
    console.log(this.vesselData);
        this.vesselLoadService.fetchVessels().subscribe(
            (data => this.vesselData = data)
          );
    
  } */
}
