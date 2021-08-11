import { Article } from './../../models/article.model';
import { SourceCategory } from './../../models/sourceCategory.model';
import { SourceCategoryService } from './../../services/source-category.service';
import { LikedNewsService } from './../../services/liked-news.service';
import { NewsService } from './../../services/news.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';


@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit {
  newss: Article[]
  categories: SourceCategory[]
  items: MenuItem[];
  socialItems: MenuItem[];
  likedNews = []
  shareSocial: number;
  from: Date;
  to: Date;
  selectedSourceCategory;
  searchText;

  constructor(private NewsService: NewsService, private LikedNewsService: LikedNewsService, private SourceCategoryService: SourceCategoryService) { }

  ngOnInit(): void {
    this.NewsService.getAllNews().subscribe(
      res => {
        this.newss = JSON.parse(JSON.stringify(res)).articles
      }
    )
    this.SourceCategoryService.getSourceCategories().subscribe(
      res => {
        this.categories = JSON.parse(JSON.stringify(res)).sourceCategory
      }
    )

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

  initializeNewsService() {
    this.NewsService.getAllNews().subscribe(
      res => {
        this.newss = JSON.parse(JSON.stringify(res)).articles
      }
    )
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

  onSearchText() {
    this.newss = this.newss.filter(news => {
      return news.title.toLowerCase().match(this.searchText)
    }
    )
  }
  onFilterByCategory() {
    this.newss = this.newss.filter(news => news.sourceID == this.selectedSourceCategory)
  }

  onDateFilter() {

    this.newss = this.newss.filter((news) =>
      news.publishedAt >= this.from && news.publishedAt <= this.to
    );
  }
}