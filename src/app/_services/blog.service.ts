import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { IBlog } from "../_models/blog-data.model";
import { Observable, Subject } from "rxjs";

@Injectable({
    providedIn:"root"
})
export class BlogService{
    baseAPIUrl:string=environment.baseAPIUrl;
    private blogData = new Subject<IBlog>();
    data$ = this.blogData.asObservable();
    constructor
    (
        private httpClient:HttpClient
    ){}
    //Used to get blog list of data from api endpoint
    getBlogDataList(){
        return this.httpClient.get<IBlog[]>(`${this.baseAPIUrl}/api/Blog`,{
            withCredentials:true
        });
    }
    //Used to get blog item by id from api endpoint
    getBlogDataByID(id:number){
        return this.httpClient.get<IBlog>(`${this.baseAPIUrl}/api/Blog/${id}`,{
            withCredentials:true
        });
    }
    //Used to set blog data item to use for further processing
    sendData(data: IBlog) { 
        this.blogData.next(data);
    }
    //Used to delete the blog item by passing id
    deleteBlog(id: number): Observable<any> {
         return this.httpClient.delete(`${this.baseAPIUrl}/api/Blog/${id}`);
    }
    //Used to create new blog item
    addBlog(blog: IBlog): Observable<any> { 
        return this.httpClient.post(`${this.baseAPIUrl}/api/Blog`, blog); 
    }   
    //Used to update existing blog item by passing the blog details  
    updateBlog(id: number, blog: IBlog): Observable<any> {
         return this.httpClient.put(`${this.baseAPIUrl}/api/Blog/${id}`, blog);
    }
}