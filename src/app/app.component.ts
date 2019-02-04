import { Component, OnInit } from '@angular/core';
import { Post } from './_models/post.model';
import { PostService } from './_services/post.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  posts: Post[];
  postSubscription: Subscription;

  constructor(private postService: PostService) {}

  ngOnInit() {
    this.postSubscription = this.postService.postsSubject.subscribe(
      (posts: Post[]) => {
        this.posts = posts;
      }
    );
    this.postService.emitPosts();
  }
}
