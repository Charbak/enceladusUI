import { Component, OnInit } from '@angular/core';
import { VesselLoadService } from './../service/vessel-load.service';

@Component({
  selector: 'app-vessel-details',
  templateUrl: './vessel-details.component.html',
  styleUrls: ['./vessel-details.component.css']
})
export class VesselDetailsComponent implements OnInit {

  public vesselDetailsData;

  constructor(private vesselDetailsLoadService: VesselLoadService ) { }

  ngOnInit() {
    this.vesselDetailsLoadService.fetchVesselDeails().subscribe(
      (data => console.log(this.vesselDetailsData = data))
    );

  }

}
