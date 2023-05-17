import { CartItem } from "./cart-item";
/* 
Code by Team A of Java3- 
Rohan, Vidisha, Yash, Kunal, Shivam, Anmol
*/
export class OrderItem {
    imageUrl!: string;
    unitPrice!: number;
    quantity!: number;
    productId!: string;

    constructor(cartItem: CartItem){
        this.imageUrl = cartItem.imageUrl;
        this.quantity = cartItem.quantity;
        this.unitPrice = cartItem.unitPrice;
        
    }
}
