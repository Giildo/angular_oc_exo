import {Component, Input, OnInit} from '@angular/core';
import {PostModel} from '../../Model/post.model';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.scss']
})
export class PostListItemComponentComponent implements OnInit {

  @Input() post: PostModel;

  constructor() { }

  ngOnInit() {
  }

  loveIt() {
    this.post.onLoveIt();
  }

  doNotLoveIt() {
    this.post.onDoNotLoveIt();
  }

}
