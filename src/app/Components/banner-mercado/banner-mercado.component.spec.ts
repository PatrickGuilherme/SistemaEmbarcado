import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerMercadoComponent } from './banner-mercado.component';

describe('BannerMercadoComponent', () => {
  let component: BannerMercadoComponent;
  let fixture: ComponentFixture<BannerMercadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerMercadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerMercadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
