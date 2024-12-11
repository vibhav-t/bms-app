import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { IBlog } from "../_models/blog-data.model";
import { Subject } from "rxjs";

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
    sendData(data: IBlog) { 
        this.blogData.next(data);
    }
}