import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { BlogService } from '../../_services/blog.service';
import { IBlog } from '../../_models/blog-data.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-addupdateblog',
  templateUrl: './addupdateblog.component.html',
  styleUrl: './addupdateblog.component.scss',
})
export class AddupdateblogComponent {
  itemId: any = 0;
  blogForm!: FormGroup;
  isEditMode: boolean = false;
  constructor(
    private blogservice: BlogService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location
  ) {}
  //angular hook runs when component is initialized
  ngOnInit() {
    const hasIdPresent = this.route.snapshot.paramMap.get('id');
    this.itemId = hasIdPresent == null ? 0 : hasIdPresent;
    this.isEditMode = hasIdPresent == null ? false : true;
    //initializing our form controls
    this.blogForm = new FormGroup({
      id: new FormControl(0),
      username: new FormControl('', Validators.required),
      dateCreated: new FormControl(
        new Date().toISOString().substring(0, 10),
        Validators.required
      ),
      text: new FormControl('', Validators.required),
    });
    //If id is present bind the form values
    if (this.itemId) {
      this.blogservice.getBlogDataByID(this.itemId).subscribe((res) => {
        this.blogForm.setValue({
          id: res.id,
          username: res.username,
          dateCreated: new Date(res.dateCreated),
          text: res.text,
        });
        this.blogForm.get('dateCreated')?.patchValue(this.formatDate(new Date(res.dateCreated)));
      });
    }
  }
  //This method is used to handle the form submit basis the id it creates and update the blog item
  submitForm() {
    if (this.blogForm.invalid) {
      return alert('All fields are required!!');
    }
    if (this.itemId) {
      this.blogservice
        .updateBlog(this.itemId, this.blogForm.value)
        .subscribe((res) => {
          res.statusCode == 200 ? alert(res.message) : alert(res.message);
        });
    } else {
      this.blogservice.addBlog(this.blogForm.value).subscribe((res) => {
        res.statusCode == 200 ? alert(res.message) : alert(res.message);
      });
    }
  }
  //This method used to go back to previous ui page
  backToHome() {
    this.location.back();
  }
  //This method is used to format the date value dd-MM-yyyy
  private formatDate(date:any) {
    const d = new Date(date);
    let month = '' + (d.getMonth() + 1);
    let day = '' + d.getDate();
    const year = d.getFullYear();
    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;
    return [year, month, day].join('-');
  }
}
