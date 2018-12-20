import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postDate: Date;
  @Input() loveIts: number;

  constructor() { }

  likeIt() {
    this.loveIts++;
  }

  dislikeIt() {
    this.loveIts--;
  }

  ngOnInit() {
  }

}
