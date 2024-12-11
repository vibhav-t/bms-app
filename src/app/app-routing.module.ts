import { Component, NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MainComponent } from "./_layout/main/main.component";
import { BlogComponent } from "./_modules/blog/blog.component";
export const routes: Routes = [{
    path:'',
    component:MainComponent,
    children:[
        {
        path:'dashboard',
        component:BlogComponent
        },
        {
            path:'',
            redirectTo:'dashboard',
            pathMatch:'full'
        }
    ]
}];
@NgModule({
    imports:[RouterModule.forRoot(routes,{useHash:true})],
    exports:[RouterModule]
})
export class AppRoutingModule{}