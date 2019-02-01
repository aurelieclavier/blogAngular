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
import { PostListComponent } from './post-list/post-list.component';
import { PostListItemComponent } from './post-list-item/post-list-item.component';
import { HeaderComponent } from './header/header.component';

const appRoutes: Routes = [
  { path: 'posts', component: PostListComponent },
  //{ path: 'books/new', canActivate: [AuthGuardService], component: PostFormComponent },
  { path: '', redirectTo: 'posts', pathMatch: 'full' },
  { path: '**', redirectTo: 'posts' }
];

@NgModule({
  declarations: [
    AppComponent,
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
