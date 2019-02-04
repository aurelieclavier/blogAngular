import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//Routing
import { AppRoutingModule } from './app-routing.module';
import { Routes, RouterModule } from '@angular/router';
//Modules
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//Services
import { PostService } from './_services/post.service';
//Components
import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostListItemComponent } from './post-list-item/post-list-item.component';
import { HeaderComponent } from './header/header.component';

const appRoutes: Routes = [
  { path: 'posts', component: PostComponent },
  { path: '', redirectTo: 'posts', pathMatch: 'full' },
  { path: '**', redirectTo: 'posts' }
];

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    PostListComponent,
    PostListItemComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
