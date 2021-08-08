import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout-components/header/header.component';
import { FooterComponent } from './layout-components/footer/footer.component';
import { LayoutContainerComponent } from './layout-components/layout-container/layout-container.component';

import { CarouselModule } from 'primeng/carousel';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LayoutContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
