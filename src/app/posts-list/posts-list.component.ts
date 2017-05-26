import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from './../post';
import { User } from './../user';

@Component({
  selector: 'posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostsListComponent {

  @Input() posts: Post[];

   onUserClick(user: User): void {
      this.router.navigate(['/posts/users', user.id]);
   }

   constructor(private router: Router,){}

   onPostClick(post: Post): void {
      this.router.navigate(['/posts', post.id]);
   }
}
