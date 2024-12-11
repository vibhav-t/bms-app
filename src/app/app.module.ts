import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./_layout/header/header.component";
import { FooterComponent } from "./_layout/footer/footer.component";
import { MainComponent } from "./_layout/main/main.component";
import { AppRoutingModule } from "./app-routing.module";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { BlogComponent } from "./_modules/blog/blog.component";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddupdateblogComponent } from "./_modules/addupdateblog/addupdateblog.component";
import { ReactiveFormsModule } from "@angular/forms";
@NgModule({
    declarations:[
        AppComponent,
        HeaderComponent,
        FooterComponent,
        MainComponent,
        BlogComponent,
        AddupdateblogComponent
    ],
    imports:[
        AppRoutingModule,
        BrowserModule,
        HttpClientModule,
        NgbModule,
        ReactiveFormsModule,
        
    ],
    providers:[],
    schemas:[CUSTOM_ELEMENTS_SCHEMA],
    bootstrap:[AppComponent]
})
export class AppModule{

}