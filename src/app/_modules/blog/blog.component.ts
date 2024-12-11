import { Component } from '@angular/core';
import { BlogService } from '../../_services/blog.service';
import { IBlog } from '../../_models/blog-data.model';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss'
})
export class BlogComponent {
  blogData$=new Observable<IBlog[]>();
  constructor(
    private blogService:BlogService,
    private router:Router
  ){}
  ngOnInit(){
    this.blogService.getBlogDataList().subscribe((resp)=>{
      this.blogData$=of(resp);
    });
  }
  updateBlog(data: any) {
    console.log(data);
    this.blogService.sendData(data);
    this.router.navigate([`/add-update/${data.id}`]);
  }
  deleteBlog(data:any){

  }
}
