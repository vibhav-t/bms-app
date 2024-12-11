import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { IBlog } from "../_models/blog-data.model";

@Injectable({
    providedIn:"root"
})
export class BlogService{
    baseAPIUrl:string=environment.baseAPIUrl;
    constructor(private httpClient:HttpClient){}
    getBlogDataList(){
        return this.httpClient.get<IBlog[]>(`${this.baseAPIUrl}/api/Blog`,{
            withCredentials:true
        });
    }
}