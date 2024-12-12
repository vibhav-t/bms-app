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
    this.bindBlogList();
  }
  updateBlog(data: any) {
    console.log(data);
    this.blogService.sendData(data);
    this.router.navigate([`/add-update/${data.id}`]);
  }
  //This method is used to delete selected blog item
  deleteBlog(data:any){
    this.blogService.deleteBlog(data.id).subscribe((resp)=>{
      if(resp){
        this.bindBlogList();
        alert("Blog has been deleted!!")
      }else{
        alert("Oops!! error occured")
      }
    });
  }
  //Bind the blog list item
  bindBlogList(){
    this.blogService.getBlogDataList().subscribe((resp)=>{
      this.blogData$=of(resp);
    });
  }
}
