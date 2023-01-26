import { Component, OnInit, Input } from '@angular/core';
import { timestamp } from 'rxjs';
import { Comment } from "../comment.model";

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  discussion: any;
  item: any;
  ngOnInit() {
  }

  @Input() comment: Comment;
  isEditing = false;

  constructor() { }

  replyClick() {
    this.isEditing = !this.isEditing;
  }

  onAdd($event) {
    const comment: Comment = {
      text: $event,
      username: 'Rushikesh',
      votes: this.comment.votes + 1,
      date: new Date().toISOString(),
    }
    if (!this.comment.comments) {
      this.comment.comments = [];
    }
    this.comment.comments.unshift(comment);
    this.isEditing = false;
    console.log('RW.comment.comment', this.comment, comment);
    console.log('RW.comment.comment2', comment);
  }


  likeClick() {
    this.comment.votes++
  }

  dislikeClick() {
    this.comment.votes--
  }
}







