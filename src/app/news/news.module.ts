import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsRoutingModule } from './news-routing.module';
import { NewsDetailsComponent } from './news-details/news-details.component';
import { NewsListComponent } from './news-list/news-list.component';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { MenuModule } from 'primeng/menu';


@NgModule({
  declarations: [NewsDetailsComponent, NewsListComponent],
  imports: [
    CommonModule,
    NewsRoutingModule,
    BreadcrumbModule,
    MenuModule,
  ]
})
export class NewsModule { }
