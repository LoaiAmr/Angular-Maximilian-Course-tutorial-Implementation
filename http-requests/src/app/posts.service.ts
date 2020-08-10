import { Injectable } from '@angular/core';
import { Post } from './post.model';
import { HttpClient, HttpHeaders, HttpParams, HttpEventType } from '@angular/common/http';
import { map, catchError, tap } from 'rxjs/operators';
import { Subject, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  error = new Subject<string>();

  constructor(private http: HttpClient) { }

  createPost(postData: Post) {
    this.http.post<{ name: string }>('https://angular-project-tutorial-278b8.firebaseio.com/posts.json', postData,
    {
      observe: 'response'
    })
      .subscribe(responseData => {
        console.log(responseData);
      }, error => { this.error.next(error.message) });
  }


  fetchPosts() {
    let searchParams = new HttpParams();
    searchParams = searchParams.append('print', 'pretty');
    searchParams = searchParams.append('custom', 'key');

    return this.http.get<{ [key: string]: Post }>('https://angular-project-tutorial-278b8.firebaseio.com/posts.json',
                                                  {headers: new HttpHeaders({'customeHeader': 'Hello'}),
                                                   params: searchParams,
                                                   responseType: 'json'
                                                  })
      .pipe(map(responseData => {
        const postArray: Post[] = [];
        for (const key in responseData) {
          postArray.push({ ...responseData[key], id: key })
        }
        return postArray;
      }), catchError(errorResponse => {
        return throwError(errorResponse);
      })
      );
  }

  deletePosts() {
    return this.http.delete('https://angular-project-tutorial-278b8.firebaseio.com/posts.json',
    {
      observe: 'events'
    }).pipe(tap( event => {
                  console.log(event)
                  if(event.type === HttpEventType.Response){
                    console.log(event.body)
                  }}))
  }


}