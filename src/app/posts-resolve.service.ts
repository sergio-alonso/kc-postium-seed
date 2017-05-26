import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from "@angular/router";
import { Observable } from 'rxjs/Observable';

import { Post } from './post';
import { PostService } from './post.service';

@Injectable()
export class PostsResolveService implements Resolve<Post[]> {

  constructor(private _postService: PostService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<Post[]> {

      if(route.url[1] !== undefined && route.url[1].path === 'users') {
	  return this._postService.getUserPosts(route.params["userId"]);
      }

    /*-----------------------------------------------------------------------------------------|
     | ~~~ Yellow Path ~~~                                                                     |
     |-----------------------------------------------------------------------------------------|
     | Modifica este Resolve para que, en caso de tener que obtener los posts correspondientes |
     | a una categoría, llame a la función 'getCategoryPosts()' del servicio PostService.      |
     | Recuerda mirar en los parámetros de la ruta, a ver qué encuentras.                      |
     |-----------------------------------------------------------------------------------------*/

    return this._postService.getPosts();
  }

}
