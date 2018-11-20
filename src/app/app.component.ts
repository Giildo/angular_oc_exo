import {Component} from '@angular/core';
import {PostModel} from '../Model/post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts: PostModel[] = [];

  constructor() {
    this.posts.push(new PostModel('Premier post',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' +
      'Nullam a erat et mi tempus vulputate imperdiet sed quam.' +
      'Nulla consectetur imperdiet quam nec gravida.' +
      'Quisque interdum ultricies mi, non viverra eros.' +
      'Vivamus luctus porttitor est, quis sagittis est fermentum sed.' +
      'Vestibulum fermentum elementum suscipit.' +
      'Sed velit elit, fermentum tincidunt nunc eget, volutpat vestibulum mauris.' +
      'Aliquam erat volutpat.' +
      'Pellentesque odio lacus, lacinia eu porta non, scelerisque id tortor.' +
      'Vestibulum quis ultricies erat. Duis nec tincidunt orci, vel consectetur ipsum.',
      0));
    this.posts.push(new PostModel('Deuxième post',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' +
      'Nullam a erat et mi tempus vulputate imperdiet sed quam.' +
      'Nulla consectetur imperdiet quam nec gravida.' +
      'Quisque interdum ultricies mi, non viverra eros.' +
      'Vivamus luctus porttitor est, quis sagittis est fermentum sed.' +
      'Vestibulum fermentum elementum suscipit.' +
      'Sed velit elit, fermentum tincidunt nunc eget, volutpat vestibulum mauris.' +
      'Aliquam erat volutpat.' +
      'Pellentesque odio lacus, lacinia eu porta non, scelerisque id tortor.' +
      'Vestibulum quis ultricies erat. Duis nec tincidunt orci, vel consectetur ipsum.',
      4));
    this.posts.push(new PostModel('Troisième post',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' +
      'Nullam a erat et mi tempus vulputate imperdiet sed quam.' +
      'Nulla consectetur imperdiet quam nec gravida.' +
      'Quisque interdum ultricies mi, non viverra eros.' +
      'Vivamus luctus porttitor est, quis sagittis est fermentum sed.' +
      'Vestibulum fermentum elementum suscipit.' +
      'Sed velit elit, fermentum tincidunt nunc eget, volutpat vestibulum mauris.' +
      'Aliquam erat volutpat.' +
      'Pellentesque odio lacus, lacinia eu porta non, scelerisque id tortor.' +
      'Vestibulum quis ultricies erat. Duis nec tincidunt orci, vel consectetur ipsum.',
      -3));
  }
}
