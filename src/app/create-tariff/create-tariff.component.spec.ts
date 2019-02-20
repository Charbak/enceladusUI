import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTariffComponent } from './create-tariff.component';

describe('CreateTariffComponent', () => {
  let component: CreateTariffComponent;
  let fixture: ComponentFixture<CreateTariffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateTariffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTariffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
