import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout-components/header/header.component';
import { FooterComponent } from './layout-components/footer/footer.component';
import { LayoutContainerComponent } from './layout-components/layout-container/layout-container.component';
import { HighlightsBannerComponent } from './home/highlights-banner/highlights-banner.component';
import { LatestNewsComponent } from './home/latest-news/latest-news.component';
import { HowWeHaveHelpedComponent } from './home/how-we-have-helped/how-we-have-helped.component';
import { HomeContainerComponent } from './home/home-container/home-container.component';

import { IvyCarouselModule } from 'angular-responsive-carousel';
import { MenuModule } from 'primeng/menu'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LayoutContainerComponent,
    HighlightsBannerComponent,
    LatestNewsComponent,
    HowWeHaveHelpedComponent,
    HomeContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IvyCarouselModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MenuModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
