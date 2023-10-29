import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { OrderService } from 'src/app/shared/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent  {
  constructor(public service:OrderService) {}

  ngOnInit(){
      this.resetForm();
  }
    resetForm(form?: NgForm){
      if(form)
        form.resetForm();
      
      this.service.formData = {
        OrderID: 0,
        OrderNo: Math.floor(100000+Math.random()*900000).toString(),
        CustomerID:0,
        PMethod:"",
        GTotal:0
      }
    }
}
