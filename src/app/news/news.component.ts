import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { News } from '../news';
import { NewsService } from '../news.service';
import { NgFor } from '@angular/common';
import { NewsItemComponent } from '../news-item/news-item.component';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [NgFor, NewsItemComponent],
  templateUrl: './news.component.html',
  styleUrl: './news.component.css'
})
export class NewsComponent {
  news: News = {
    status: "",
    totalResults: 0,
    articles: [
      {
        source: {
          id: "",
          name: ""
        },
        author: "",
        title: "",
        description: "",
        url: "",
        urlToImage: "",
        publishedAt: new Date(),
        content: ""
      }
    ]
  };
  constructor(private http: HttpClient, private newsService: NewsService) {
    this.getNews();
  }
  getNews(): void {
    this.newsService.getNews().subscribe(news => this.news = news);
  }
}
