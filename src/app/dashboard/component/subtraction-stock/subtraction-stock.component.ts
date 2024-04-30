import { Component ,Inject} from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms'; // Importa FormsModule
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import {MatFormFieldModule} from '@angular/material/form-field';
import {ProductService} from '../../services/product.service'
import {ProductUpdate} from '../../interfaces/product.interface'

@Component({
  selector: 'app-subtraction-stock',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    MatIconModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatCardModule
  ],
  providers:[ProductService],
  templateUrl: './subtraction-stock.component.html',
  styleUrl: './subtraction-stock.component.css'
})
export class SubtractionStockComponent {
constructor(
    private fb: FormBuilder,
    private router: Router,
    public dialogRef: MatDialogRef<SubtractionStockComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public productService:ProductService,
  ) {}
  submitted = false;

  public myForm: FormGroup = this.fb.group({
    cantidad: ['', Validators.required],
  });

  onSubmit(){
       this.submitted = true;
       if(!this.myForm.valid) return;
       const {cantidad}=this.myForm.value;

       if(Math.sign(cantidad)<0){
          this.dialogRef.close({
            error:true,
            status:"la cantidad es negativa"
          });
       }else{
           this.productService.updateStockSub(this.data.id,cantidad).subscribe(response => {
              console.log("producto actualizado ",response)
              this.dialogRef.close({
                  error:false,
                  status:"producto actualizado"
              });
           }, error => {
              console.error('Error en la solicitud :', error);
              this.dialogRef.close({
                error:true,
                status:error
              });
           });
           return;
       }


       /**/
       /*this.productService.update(data.id,{}).subscribe(response => {
              console.log("producto eliminado ")
               
           }, error => {
              console.error('Error en la solicitud :', error);
           });*/

  }
}