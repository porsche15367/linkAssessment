import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LikedNewsService {
  likedNews = []
  constructor() { }
  addToLikes(id) {
    if (!this.likedNews.includes(id)) {
      this.likedNews.push(id)
    } else {
      this.likedNews.splice(this.likedNews.indexOf(id), 1);
    }
    return this.likedNews
  }
}
