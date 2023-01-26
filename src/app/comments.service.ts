import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, Subject, from, merge } from "rxjs";
import { scan } from "rxjs/operators";
import { data } from "./test-data";
import { Comment } from "./comment.model";

@Injectable({
  providedIn: "root"
})
export class CommentsService {
  src: any = data;
  commentAction$ = new Subject<Comment>();
  commentSubject$ = this.commentAction$.asObservable();
  commentStream$ = merge(this.commentSubject$, from([data])).pipe(
    scan((acc: Comment[], value: Comment) => [value, ...acc])
  );
  constructor(private http: HttpClient) {}

  getComments() {
    return this.commentStream$;
  }

  addComment(comment: Comment) {
    this.commentAction$.next(comment);
  }
}