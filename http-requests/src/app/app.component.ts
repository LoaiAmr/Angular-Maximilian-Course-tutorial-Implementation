import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Post } from './post.model';
import { PostService } from './posts.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  loadedPosts = [];
  isFetching = false;
  error = null;

  constructor(private http: HttpClient, private postsService: PostService) { }

  ngOnInit() {

    this.subscription = this.postsService.error.subscribe(errorMessage => {
      this.error = errorMessage;
    });



    this.isFetching = true;
    this.postsService.fetchPosts().subscribe(posts => {
      this.isFetching = false;
      this.loadedPosts = posts;
    });

  }



  onHandleError() {
    this.error = null;
  }

  onCreatePost(postData: Post) {
    this.postsService.createPost(postData);
  }

  onFetchPosts() {
    this.isFetching = true;
    this.postsService.fetchPosts().subscribe(posts => {
      this.isFetching = false;
      this.loadedPosts = posts;
    }, error => {
      this.isFetching = false;
      this.error = error.message;
      console.log(error);
    });
  }

  onClearPosts() {
    this.postsService.deletePosts().subscribe(() => {
      this.loadedPosts = [];
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}