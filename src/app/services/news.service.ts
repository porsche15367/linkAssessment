import { Article } from '../models/article.model';

import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment.prod';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  baseUrl = environment.baseUrl
  constructor(private http: HttpClient) { }
  getAllNews() {
    return this.http.get<Article[]>(`${this.baseUrl}e2534d5412765bf36702`)
  }
}
