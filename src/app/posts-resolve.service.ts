import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from "@angular/router";
import { Observable } from 'rxjs/Observable';

import { Post } from './post';
import { PostService } from './post.service';

@Injectable()
export class PostsResolveService implements Resolve<Post[]> {

  constructor(private _postService: PostService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<Post[]> {

      if(route.params["userId"]) {
	  return this._postService.getUserPosts(route.params["userId"]);
      }

      if(route.params["categoryId"])
	  return this._postService.getCategoryPosts(route.params["categoryId"]);
      }

    return this._postService.getPosts();
  }

}
