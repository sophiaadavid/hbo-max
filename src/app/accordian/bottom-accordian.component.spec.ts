import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomAccordianComponent } from './bottom-accordian.component';

describe('BottomAccordianComponent', () => {
  let component: BottomAccordianComponent;
  let fixture: ComponentFixture<BottomAccordianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BottomAccordianComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BottomAccordianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
