import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-news-item',
  standalone: true,
  imports: [],
  templateUrl: './news-item.component.html',
  styleUrl: './news-item.component.css'
})
export class NewsItemComponent {
  @Input() title: string = "";
  @Input() description: string = "";
  @Input() author: string = "";
  @Input() image: string = "";
  @Input() date: Date = new Date();
}
