import { Component, OnInit, Input } from '@angular/core';
import { PostService } from '../_services/post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() postId: number;
  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postDate: Date;
  @Input() loveIts: number;

  constructor(private postService: PostService, private router: Router) { }

  likeIt() {
    this.loveIts++;
  }

  dislikeIt() {
    this.loveIts--;
  }

  onDeletePost() {
    console.log(this.postId);
    this.postService.deletePost(this.postId);
  }

  ngOnInit() {
  }

}
