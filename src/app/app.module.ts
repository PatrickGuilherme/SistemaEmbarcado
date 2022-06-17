import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './Components/main-page/main-page.component';
import { BannerTitleComponent } from './Components/banner-title/banner-title.component';
import { BannerIntroComponent } from './Components/banner-intro/banner-intro.component';
import { ArchitectureComponent } from './Components/architecture/architecture.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    BannerTitleComponent,
    BannerIntroComponent,
    ArchitectureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
