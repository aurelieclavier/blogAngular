import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Post } from '../_models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  posts: Post[] = [];
  booksSubject = new Subject<Post[]>();

  constructor() {
    this.getPosts();
  }

  getPosts() {
    this.posts = [
      {
        id: 1,
        title: 'Article 1',
        content: 'Culpa obsecrans graviter ut inpetraret se ab innocentium graviter gemens innocentium ut ut gemens omni illas omni omni non quieti provincias coalitos proiectare homines pro se perquisitor pro gemens homines.',
        loveIts: 0,
        created_at: new Date()
      },
      {
        id: 2,
        title: 'Article 2',
        content: 'Culpa obsecrans graviter ut inpetraret se ab innocentium graviter gemens innocentium ut ut gemens omni illas omni omni non quieti provincias coalitos proiectare homines pro se perquisitor pro gemens homines.',
        loveIts: 0,
        created_at: new Date()
      },
      {
        id: 3,
        title: 'Article 3',
        content: 'Culpa obsecrans graviter ut inpetraret se ab innocentium graviter gemens innocentium ut ut gemens omni illas omni omni non quieti provincias coalitos proiectare homines pro se perquisitor pro gemens homines.',
        loveIts: 0,
        created_at: new Date()
      },
      {
        id: 4,
        title: 'Article 4',
        content: 'Culpa obsecrans graviter ut inpetraret se ab innocentium graviter gemens innocentium ut ut gemens omni illas omni omni non quieti provincias coalitos proiectare homines pro se perquisitor pro gemens homines.',
        loveIts: 0,
        created_at: new Date()
      }
    ]
    return this.posts;
  }

  addPost(newPost: Post) {
    this.posts.push(newPost);
  }

  deletePost(id) {
    let index = id;
    console.log(index);
    console.log(this.posts[index]);
    this.posts.splice(index, 1);
  }
}
