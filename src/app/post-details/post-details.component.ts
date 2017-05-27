import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { NativeWindow } from './../window';
import { Post } from './../post';
import { User } from './../user';
import { Category } from './../category';

@Component({
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  post: Post;

    constructor(
	private router: Router,
    private _activatedRoute: ActivatedRoute,
    @Inject(NativeWindow) private _window) { }

  ngOnInit(): void {
    this._activatedRoute.data.subscribe((data: { post: Post }) => this.post = data.post);
    this._window.scrollTo(0, 0);
  }

  plainTextToHtml(text: string): string {
    return text ? `<p>${text.replace(/\n/gi, "</p><p>")}</p>` : '';
  }

   onUserSelect(): void {
      this.router.navigate(['/posts/users', this.post.author.id]);
   }

    onCategoryClick(category: Category): void {
      this.router.navigate(['/posts/categories', category.id]);
   }

}
