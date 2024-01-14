import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { News } from './news';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class NewsService {

  constructor(private http: HttpClient) { }
  getNews(): Observable<News> {
    return this.http.get<News>('https://newsapi.org/v2/everything?q=tesla&from=2023-12-14&sortBy=publishedAt&apiKey=fdb8ae8ffef8496fb2c268558b7af68c');
  }
}
