import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsRoutingModule } from './news-routing.module';
import { NewsDetailsComponent } from './news-details/news-details.component';
import { NewsListComponent } from './news-list/news-list.component';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { MenuModule } from 'primeng/menu';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [NewsDetailsComponent, NewsListComponent],
  imports: [
    CommonModule,
    NewsRoutingModule,
    BreadcrumbModule,
    MenuModule,
    DropdownModule,
    CalendarModule,
    FormsModule,
  ]
})
export class NewsModule { }
