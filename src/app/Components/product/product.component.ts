import { Component, OnInit } from '@angular/core';
import data from 'src/app/data.json';
import { CommonModule } from '@angular/common';

import { FormGroup, FormControl, Validators} from '@angular/forms';  

interface data {
  p_name:String;
  p_id:Number;
  p_cost:Number;
  p_qnt:Number;
  p_image:String;
  p_availability:Number;
  p_details:String;
  p_category:String;

}
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }
  productlist=data;
  daata: data[]=data;
  submitdata:any;
  form = new FormGroup({  
    website: new FormControl('', Validators.required)  
  });  
    
  
  ngOnInit(): void {
  }

  modo(value:string){
    switch(value){
      case "Tamilnadu":
        this.daata=this.productlist.filter(item =>item.p_category=="Tamilnadu");
        console.log(this.daata);
break;
case "Premium":
  this.daata=this.productlist.filter(item =>item.p_category=="Premium");
break;
    }

  }

  submit(value:Number){

    this.submitdata=this.daata.filter(item =>item.p_id==value);

    console.log(this.submitdata);

  }

  addToCart(prod) {
    if(prod.p_qnt!=5){

prod.p_qnt+=1;
  }
}

  removeFromCart(prod) {
    if(prod.p_qnt!=1){
    prod.p_qnt-=1;
    }
  }

}
