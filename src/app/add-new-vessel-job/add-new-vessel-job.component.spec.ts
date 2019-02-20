import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewVesselJobComponent } from './add-new-vessel-job.component';

describe('AddNewVesselJobComponent', () => {
  let component: AddNewVesselJobComponent;
  let fixture: ComponentFixture<AddNewVesselJobComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewVesselJobComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewVesselJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
