import { SourceCategoryService } from './../../services/source-category.service';
import { LikedNewsService } from './../../services/liked-news.service';
import { NewsService } from './../../services/news.service';
import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { SourceCategory } from 'src/app/models/sourceCategory.model';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.scss']
})
export class NewsDetailsComponent implements OnInit {
  id: number;
  newss;
  newsSub$: Subscription;
  sourceCategories$: Observable<SourceCategory[]>
  items: MenuItem[];
  socialItems: MenuItem[];
  likedNews = []
  shareSocial: number;

  constructor(private NewsService: NewsService, private active: ActivatedRoute, private LikedNewsService: LikedNewsService, private SourceCategoryService: SourceCategoryService) { }

  ngOnInit(): void {
    this.id = +this.active.snapshot.paramMap.get('id');
    this.newsSub$ = this.NewsService.getAllNews().subscribe(
      res => {
        this.newss = JSON.parse(JSON.stringify(res)).articles
      }
    );
    this.sourceCategories$ = this.SourceCategoryService.getSourceCategories()
    this.items = [
      { label: 'Home', routerLink: '/' },
      { label: 'News', routerLink: '/news/news-list' },
      { label: 'News Details' },
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
  ngOnDestroy() {
    this.newsSub$.unsubscribe()
  }

}
