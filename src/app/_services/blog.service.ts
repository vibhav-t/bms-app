import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn:"root"
})
export class BlogService{
    constructor(private httpClient:HttpClient){}
}