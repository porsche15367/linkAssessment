import { SourceCategory } from './../models/sourceCategory.model';
import { environment } from './../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SourceCategoryService {
  baseUrl = environment.baseUrl
  constructor(private http: HttpClient) { }
  getSourceCategories() {
    return this.http.get<SourceCategory[]>(`${this.baseUrl}c138bb84dc0b94ec5a18`)
  }
}
