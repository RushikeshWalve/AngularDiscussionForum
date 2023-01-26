import { Component, VERSION } from '@angular/core';
import { Observable } from "rxjs";
import { CommentsService } from './comments.service';
import { data } from './test-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'angular-discussion';
  name = "Angular " + VERSION.major;
  src: Observable<any>;
  comment: any;

  constructor(public commentService: CommentsService) {
    this.src = commentService.getComments();
    console.log('RW.this.src', this.src)
  }

  onSubmit($event: any) {
    const comment = {
      text: $event,
      username:  'Rushikesh',
      date: new Date().toISOString(),
      votes: 0
    }
    console.log('RW.this.comment', comment)
    this.commentService.addComment(comment);
  }
}





