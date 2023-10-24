import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent{
   // deletion-function -> child
   @Input() name: string = '';
   @Input() description: string = '';
   @Input() comments: string = '';
   @Input() img1: string = '';
   @Input() likes: string = '';
 

}
