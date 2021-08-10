import { SourceCategory } from './../../models/sourceCategory.model';
import { SourceCategoryService } from './../../services/source-category.service';
import { LikedNewsService } from './../../services/liked-news.service';
import { NewsService } from './../../services/news.service';
import { Article } from '../../models/article.model';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit {
  news$: Observable<Article[]>
  sourceCategories$: Observable<SourceCategory[]>
  items: MenuItem[];
  socialItems: MenuItem[];
  likedNews = []
  shareSocial: number;

  constructor(private NewsService: NewsService, private LikedNewsService: LikedNewsService, private SourceCategoryService: SourceCategoryService) { }

  ngOnInit(): void {
    this.news$ = this.NewsService.getAllNews()
    this.sourceCategories$ = this.SourceCategoryService.getSourceCategories()
    this.items = [
      { label: 'Home', routerLink: '/' },
      { label: 'News' },

    ];
    this.socialItems = [
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
    console.log(this.shareSocial)
  }
  resetShareSocialIcon() {
    this.shareSocial = 0
  }

}
