import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';



@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  freshnessList = ["Breakfast", "Lunch", "Dinner"]
  productForm !: FormGroup;
  actionBtn: string = "Save"


  loginForm= this.formBuilder.group({
    user: ['', Validators.required],
    password: ['',Validators.required,Validators.email],
    email: ['', [Validators.required,Validators.email]],

    });
  constructor(private formBuilder: FormBuilder,
    private api: ApiService,
    @Inject(MAT_DIALOG_DATA) public editdata: any,
    private dialogRef: MatDialogRef<DialogComponent>) { }

  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      productName: ['', Validators.required],
      category: ['', Validators.required],
      date: ['', Validators.required],
      freshness: ['', Validators.required],
      price: ['', Validators.required],
      comment: ['',Validators.required],

    });

    // this.loginForm = this.formBuilder.group({
    //   user: ['', Validators.required],
    //   password: ['', Validators.required],
    //   email: ['', [Validators.required,Validators.email]],

    // });


    
    if (this.editdata) {
      this.actionBtn = "Update"
      this.productForm.controls['productName'].setValue(this.editdata.productName);
      this.productForm.controls['category'].setValue(this.editdata.category);
      this.productForm.controls['date'].setValue(this.editdata.date);
      this.productForm.controls['freshness'].setValue(this.editdata.freshness);
      this.productForm.controls['price'].setValue(this.editdata.price);
      this.productForm.controls['comment'].setValue(this.editdata.comment);

    }
  }
  // to check the value if printing the value = this.productForm.controls.productName.value

  loginUser(){
    console.warn(this.loginForm.value)
  }

  get productName (){
    return this.productForm.get('productName');
  }

  get comment (){
    return this.productForm.get('comment');
  }

  get password(){
    return this.loginForm.get('password')
  }

  get user(){
    return this.loginForm.get('user')
  }
  get email(){
    return this.loginForm.get('email')
  }

  addProduct() {
    if (!this.editdata) {
      if (this.productForm.valid) {
        this.api.postProduct(this.productForm.value)
          .subscribe({
            next: (res) => {
              alert("Successfully Added")
              this.productForm.reset();
              this.dialogRef.close("Saved");
            },
            error: () => {
              alert("Error While adding")
            }
          })
      }
    } else {
      this.updateProduct()
    }
  }
  updateProduct() {
    debugger
    this.api.putProduct(this.productForm.value, this.editdata.id)
      .subscribe({
        next: (res) => {
          alert("Product updated succesfully")
          this.productForm.reset();
          this.dialogRef.close('update');
        },
        error:()=>{
          alert("Error while updating the record!")
        }
      })
  }
}
