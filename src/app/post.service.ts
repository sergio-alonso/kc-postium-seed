import { Injectable, Inject } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import "rxjs/add/operator/map";

import { BackendUri } from './settings';
import { Post } from './post';

@Injectable()
export class PostService {

  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(
    private _http: Http,
    @Inject(BackendUri) private _backendUri) { }

  getPosts(): Observable<Post[]> {
    return this._http
      .get(`${this._backendUri}/posts?publicationDate_lte=${+ new Date()}&_sort=publicationDate&_order=DESC`)
      .map((response: Response): Post[] => Post.fromJsonToList(response.json()));
  }

  getUserPosts(id: number): Observable<Post[]> {
    return this._http
      .get(`${this._backendUri}/posts?author.id=${id}&publicationDate_lte=${+ new Date()}&_sort=publicationDate&_order=DESC`)
      .map((response: Response): Post[] => Post.fromJsonToList(response.json()));
  }

  getCategoryPosts(id: number): Observable<Post[]> {
    return this._http
	  .get(`${this._backendUri}/posts`)
	  .map((response: Response): Post[] => Post.fromJsonToList(response.json()))
	  .map((posts: Post[]): Post[] => {
	      let result:Array<Post> = [];
	      for (let post of posts)
	      {
		  for (let category of post.categories)
		  {
		      if(category.id == id) {
			  result.push(post)
		      }
		  }
	      }
	      return result;
	  });
  }

  getPostDetails(id: number): Observable<Post> {
    return this._http
      .get(`${this._backendUri}/posts/${id}`)
      .map((response: Response): Post => Post.fromJson(response.json()));
  }

  createPost(post: Post): Observable<Post> {
      return this._http
	  .post(`${this._backendUri}/posts`, JSON.stringify(post), {headers: this.headers})
	  .map((response: Response): Post => Post.fromJson(response.json()));
  }

}
