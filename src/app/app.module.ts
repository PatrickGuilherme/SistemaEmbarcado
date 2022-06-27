import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
    MicrocontrollerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModalModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
