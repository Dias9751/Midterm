import { Component, OnInit } from '@angular/core';
import  Post from '../model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  posts: Post[] = [];
  
    name: string= '';
    description: string = '';
    comments: string = '';
    img1: string = '';
    likes: string = '';

    deletePost = (name: string) => { // declarative -> this = context of call
      this.posts = this.posts.filter( // TodoList -> filter -> element without condition triggering
        (element: Post) => element.name !== name
      );
    }


  addnewPost() {
    const res: Post = {
      name: this.name,
      description: this.description,
      comments: this.comments,
      img1:this.img1,
      likes: this.likes
    }
    this.posts.push(res);
    this.name = '';
    this.description = '';
    this.comments = '';
    this.img1 = '';
    this.likes = '';
  }

}


