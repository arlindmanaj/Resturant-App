import { Injectable } from '@angular/core';
import { OrderModel } from './order-model.model';
@Injectable({
  providedIn: 'root'
})
export class OrderService {
    formData?: OrderModel;
  constructor() { }
}
