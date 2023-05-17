import { Address } from "./address";
import { Customer } from "./customer";
import { Order } from "./order";
import { OrderItem } from "./order-item";
/* 
Code by Team A of Java3- 
Rohan, Vidisha, Yash, Kunal, Shivam, Anmol
*/
export class Purchase {
    customer!: Customer;
    shippingAddress!: Address;
    billingAddress!: Address;
    order!: Order;
    orderItems!: OrderItem[];
}
