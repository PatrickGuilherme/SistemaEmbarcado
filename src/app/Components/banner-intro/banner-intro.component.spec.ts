import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerIntroComponent } from './banner-intro.component';

describe('BannerIntroComponent', () => {
  let component: BannerIntroComponent;
  let fixture: ComponentFixture<BannerIntroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerIntroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
