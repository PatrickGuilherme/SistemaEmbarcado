import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './Components/main-page/main-page.component';
import { BannerTitleComponent } from './Components/banner-title/banner-title.component';
import { BannerIntroComponent } from './Components/banner-intro/banner-intro.component';
import { ArchitectureComponent } from './Components/architecture/architecture.component';
import { TimeLineComponent } from './Components/time-line/time-line.component';
import { FeaturesComponent } from './Components/features/features.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ModalInfoComponent } from './Components/modal-info/modal-info.component';
import { MicrocontrollerComponent } from './Components/microcontroller/microcontroller.component';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ApplicationsComponent } from './Components/applications/applications.component';
import { BannerMercadoComponent } from './Components/banner-mercado/banner-mercado.component';
import { FooterComponent } from './Components/footer/footer.component';
import { RepeatDirective } from './Directive/For';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    BannerTitleComponent,
    BannerIntroComponent,
    ArchitectureComponent,
    TimeLineComponent,
    FeaturesComponent,
    ModalInfoComponent,
    MicrocontrollerComponent,
    ApplicationsComponent,
    BannerMercadoComponent,
    FooterComponent,
    RepeatDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModalModule.forRoot(),
    CarouselModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
