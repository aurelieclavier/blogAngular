import { Component, OnInit } from '@angular/core';
//Services
import { PostService } from './_services/post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  posts: Array<Object>;

  constructor(private postService: PostService) {}

  getPosts(): void {
    this.posts = this.postService.getPosts();
  }

  ngOnInit() {
    this.getPosts();
  }
}
