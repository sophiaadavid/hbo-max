import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OscarBandComponent } from './oscar-band.component';

describe('OscarBandComponent', () => {
  let component: OscarBandComponent;
  let fixture: ComponentFixture<OscarBandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OscarBandComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OscarBandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});