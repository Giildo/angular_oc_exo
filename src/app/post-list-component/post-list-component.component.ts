import {Component, Input} from '@angular/core';
import {PostModel} from '../../Model/post.model';

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.scss']
})
export class PostListComponentComponent {

  @Input() posts: PostModel[];

  constructor() {
  }
}
