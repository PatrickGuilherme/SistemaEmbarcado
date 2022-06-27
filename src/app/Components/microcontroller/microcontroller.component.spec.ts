import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MicrocontrollerComponent } from './microcontroller.component';

describe('MicrocontrollerComponent', () => {
  let component: MicrocontrollerComponent;
  let fixture: ComponentFixture<MicrocontrollerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MicrocontrollerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MicrocontrollerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
