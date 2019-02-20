import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VesselOverviewComponent } from './vessel-overview.component';

describe('VesselOverviewComponent', () => {
  let component: VesselOverviewComponent;
  let fixture: ComponentFixture<VesselOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VesselOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VesselOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
