import { Component } from '@angular/core';
import { BlogService } from '../../_services/blog.service';
import { IBlog } from '../../_models/blog-data.model';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss'
})
export class BlogComponent {
  blogData$=new Observable<IBlog[]>();
  constructor(private blogService:BlogService){}
  ngOnInit(){
    this.blogService.getBlogDataList().subscribe((resp)=>{
      this.blogData$=of(resp);
      //console.log(of(resp));
    });
  }
}
