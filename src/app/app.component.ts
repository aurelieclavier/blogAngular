import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  posts: Array<Object>;

  constructor() {
    this.posts = [
      {
        title: 'Article 1',
        content: 'Culpa obsecrans graviter ut inpetraret se ab innocentium graviter gemens innocentium ut ut gemens omni illas omni omni non quieti provincias coalitos proiectare homines pro se perquisitor pro gemens homines.',
        loveIts: 0,
        created_at: new Date()
      },
      {
        title: 'Article 2',
        content: 'Culpa obsecrans graviter ut inpetraret se ab innocentium graviter gemens innocentium ut ut gemens omni illas omni omni non quieti provincias coalitos proiectare homines pro se perquisitor pro gemens homines.',
        loveIts: 0,
        created_at: new Date()
      },
      {
        title: 'Article 3',
        content: 'Culpa obsecrans graviter ut inpetraret se ab innocentium graviter gemens innocentium ut ut gemens omni illas omni omni non quieti provincias coalitos proiectare homines pro se perquisitor pro gemens homines.',
        loveIts: 0,
        created_at: new Date()
      },
      {
        title: 'Article 4',
        content: 'Culpa obsecrans graviter ut inpetraret se ab innocentium graviter gemens innocentium ut ut gemens omni illas omni omni non quieti provincias coalitos proiectare homines pro se perquisitor pro gemens homines.',
        loveIts: 0,
        created_at: new Date()
      }
    ]
  }

  ngOnInit() {
  }
}
