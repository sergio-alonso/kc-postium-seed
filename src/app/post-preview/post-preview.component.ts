import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Post } from './../post';
import { User } from './../user';

@Component({
  selector: 'post-preview',
  templateUrl: './post-preview.component.html',
  styleUrls: ['./post-preview.component.css']
})
export class PostPreviewComponent {

  @Input() post: Post;

    @Output('userClick') selectUserRequest = new EventEmitter<User>();

    selectUser() : void {
	this.selectUserRequest.emit(this.post.author);
    }

    @Output('postClick') selectPostRequest = new EventEmitter<Post>();

    selectPost() : void {
	this.selectPostRequest.emit(this.post);
    }

  plainTextToHtml(text: string): string {
    return text ? `<p>${text.replace(/\n/gi, "</p><p>")}</p>` : '';
  }

}
