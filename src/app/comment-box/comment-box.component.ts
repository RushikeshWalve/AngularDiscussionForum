import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-comment-box',
  templateUrl: './comment-box.component.html',
  styleUrls: ['./comment-box.component.css']
})
export class CommentBoxComponent implements OnInit {
@Output() add  = new EventEmitter<string>();
value: string;

constructor(){

}

ngOnInit() {
  
}

post() {
  if (this.value.trim()) {
    console.log('RW.this.add', this.value);
    this.add.emit(this.value);
    this.value = '';
  }
 
}
}



