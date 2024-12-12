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
    getBlogDataList(){
        return this.httpClient.get<IBlog[]>(`${this.baseAPIUrl}/api/Blog`,{
            withCredentials:true
        });
    }
    getBlogDataByID(id:number){
        return this.httpClient.get<IBlog>(`${this.baseAPIUrl}/api/Blog/${id}`,{
            withCredentials:true
        });
    }
    sendData(data: IBlog) { 
        this.blogData.next(data);
    }
    deleteBlog(id: number): Observable<any> {
         return this.httpClient.delete(`${this.baseAPIUrl}/api/Blog/${id}`);
    }
    addBlog(blog: IBlog): Observable<any> { 
        return this.httpClient.post(`${this.baseAPIUrl}/api/Blog`, blog); 
    }     
    updateBlog(id: number, blog: IBlog): Observable<any> {
         return this.httpClient.put(`${this.baseAPIUrl}/api/Blog/${id}`, blog);
    }
}