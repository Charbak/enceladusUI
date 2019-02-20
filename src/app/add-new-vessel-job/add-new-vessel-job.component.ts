import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-new-vessel-job',
  templateUrl: './add-new-vessel-job.component.html',
  styleUrls: ['./add-new-vessel-job.component.css']
})
export class AddNewVesselJobComponent implements OnInit {

  public addNewVesselJobModel:any = {};

  constructor() { }

  ngOnInit() {
  }

  submitNewVesselJob(){
    alert("foo");
    console.log(JSON.stringify(this.addNewVesselJobModel));
  }

}
