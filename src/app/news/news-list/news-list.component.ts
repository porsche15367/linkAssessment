import { NewsService } from './../../services/news.service';
import { Article } from '../../models/article.model';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit {
  news$: Observable<Article[]>
  constructor(private NewsService: NewsService) { }

  ngOnInit(): void {
    this.news$ = this.NewsService.getAllNews()
  }

}
