import { SourceCategoryService } from './../../services/source-category.service';
import { SourceCategory } from './../../models/sourceCategory.model';
import { LikedNewsService } from './../../services/liked-news.service';
import { Article } from './../../models/article.model';
import { NewsService } from './../../services/news.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-latest-news',
  templateUrl: './latest-news.component.html',
  styleUrls: ['./latest-news.component.scss']
})
export class LatestNewsComponent implements OnInit {
  news$: Observable<Article[]>
  sourceCategories$: Observable<SourceCategory[]>
  likedNews = []
  items: MenuItem[];
  shareSocial: number;
  constructor(private NewsService: NewsService, private LikedNewsService: LikedNewsService, private SourceCategoryService: SourceCategoryService) { }

  ngOnInit(): void {
    this.news$ = this.NewsService.getAllNews()
    this.sourceCategories$ = this.SourceCategoryService.getSourceCategories()
    this.likedNews = this.LikedNewsService.likedNews
    this.items = [
      { label: '', icon: 'pi pi-fw pi-facebook' },
      { label: '', icon: 'pi pi-fw pi-twitter' },
      { label: '', icon: 'pi pi-fw pi-envelope' }
    ];
  }

  addTolikes(id: number) {
    this.LikedNewsService.addToLikes(id)
    this.likedNews = this.LikedNewsService.likedNews
  }

  shareSocialIcon(id) {
    this.shareSocial = id
  }
  resetShareSocialIcon() {
    this.shareSocial = 0
  }

}
