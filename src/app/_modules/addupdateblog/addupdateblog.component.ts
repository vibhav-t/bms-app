import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { BlogService } from '../../_services/blog.service';
import { IBlog } from '../../_models/blog-data.model';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-addupdateblog',
  templateUrl: './addupdateblog.component.html',
  styleUrl: './addupdateblog.component.scss'
})
export class AddupdateblogComponent {

  id:any=0;
  blogForm!: FormGroup;
  isEditMode: boolean = false;
  constructor(
    private blogservice:BlogService,
    private fb:FormBuilder,
    private route:ActivatedRoute,
    private router:Router
    ){
      this.blogForm = this.fb.group(
        { id: [0],
          username: ['', Validators.required],
          dateCreated: ['', Validators.required], 
          text: ['', Validators.required]
        }); 
    }

     ngOnInit(){ 
      const hasIdPresent=this.route.snapshot.paramMap.get('id');
      this.id=hasIdPresent==null?0:hasIdPresent;
      this.isEditMode=hasIdPresent==null?false:true;

      
        if(this.id){
          this.blogservice.data$.subscribe((res)=>{
            if(res){
              this.blogForm.patchValue(res);
              console.log(this.blogForm.value);
            }
          })          
        }
      }
      submitForm(){
          if (this.blogForm.invalid) {
            return; 
          }
      }
      resetForm(){
      }
}
