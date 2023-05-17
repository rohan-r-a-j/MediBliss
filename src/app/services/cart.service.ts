/* 
Code by Team A of Java3- 
Rohan, Vidisha, Yash, Kunal, Shivam, Anmol
*/
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { CartItem } from '../common/cart-item';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public productList = new BehaviorSubject<any>([]);
  cartItems: CartItem[] = [];

  totalPrice: Subject<number> = new BehaviorSubject <number>(0);
  totalQuantity: Subject<number>= new BehaviorSubject <number>(0);
  quantity: any;
  name: string | undefined;
 /* 
Code by Team A of Java3- 
Rohan, Vidisha, Yash, Kunal, Shivam, Anmol
*/
  constructor() { }
  addtoCart(theCartItem: CartItem){
    //check if we already have the item in our cart
let alreadyExistsInCart: boolean = false;
let existingCartItem!: CartItem;

if (this.cartItems.length > 0){
   // find the item in the cart based on item id

   for (let tempCartItem of this.cartItems){
    if(tempCartItem.name === theCartItem.name){
      existingCartItem = tempCartItem;
      break;
    }
   }
       // check if we found it
       alreadyExistsInCart = (existingCartItem != undefined);

  }
/* 
Code by Team A of Java3- 
Rohan, Vidisha, Yash, Kunal, Shivam, Anmol
*/
  if(alreadyExistsInCart){
    //increment the quantity
    existingCartItem.quantity++;
  }
  else{
    //just add the item to the array
    this.cartItems.push(theCartItem);
  }
//compute cart total price and total quantity
this.computeCartTotals();
  }
  computeCartTotals() {
 
    let totalPriceValue: number = 0;
    let totalQuantityValue: number = 0;

    for(let currentCartItem of this.cartItems){
      totalPriceValue += currentCartItem.quantity * currentCartItem.unitPrice;
      totalQuantityValue += currentCartItem.quantity 
    }

    // publish the new value.... all subscribers will receive the new data
    this.totalPrice.next(totalPriceValue);
    this.totalQuantity.next(totalQuantityValue);

    // log cart data just for debugging purposes
    this.logCartData(totalPriceValue, totalQuantityValue);
  }

  logCartData(totalPriceValue: number, totalQuantityValue: number) {
console.log('Contents of the cart');

for(let tempCartItem of this.cartItems){
  const subTotalPrice = tempCartItem.quantity * tempCartItem.unitPrice;
  console.log(`name: ${tempCartItem.name}, quantity= ${tempCartItem.quantity}, unitPrice=${tempCartItem.unitPrice}, subTotalPrice=${subTotalPrice}`);
}

console.log(`totalPrice: ${totalPriceValue.toFixed(2)}, totalQuantity: ${totalQuantityValue}`);
console.log('------')
  }

  decrementQuantity(theCartItem: CartService) {
   
    theCartItem.quantity--;

    if(
      theCartItem.quantity ===0
    ){
      this.remove(theCartItem);
    }
    else{
      this.computeCartTotals();
    }
  }
  /* 
Code by Team A of Java3- 
Rohan, Vidisha, Yash, Kunal, Shivam, Anmol
*/
  remove(theCartItem: CartService) {
    
    // get index of item in the array
    
    const itemIndex = this.cartItems.findIndex(tempCartItem =>tempCartItem.name === theCartItem.name);
  
    // if found remove the item from the array at given index
    if (itemIndex > -1){
      this.cartItems.splice(itemIndex, 1);

      this.computeCartTotals()
    }
  }
  removeCartItem(product: any){
    this.cartItems.map((a:any, index:any)=>{
      if(product.name=== a.name){
        this.cartItems.splice(index,1);
      }
    })
    this.productList.next(this.cartItems);
  }
  removeAllCart(){
    this.cartItems = []
    this.productList.next(this.cartItems);
  }

}
/* 
Code by Team A of Java3- 
Rohan, Vidisha, Yash, Kunal, Shivam, Anmol
*/