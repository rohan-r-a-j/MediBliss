import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartItem } from 'src/app/common/cart-item';
import { Product } from 'src/app/common/product';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list-grid.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  isLoggedIn = false;
  products: Product[] = [];
  currentCategoryId: number =1;
  previousCategoryId:number = 1;
  //new properties for pagination
  thePageNumber: number = 1;
  thePageSize:  number = 70;
  theTotalElements: number = 0;
 
  constructor(private productService: ProductService, private route: ActivatedRoute, private cartService: CartService,private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    this.route.paramMap.subscribe(() => {
      this.listProducts();
    });
  }

  listProducts() {
 // check if "id" parameter is available
 const hasCategoryId: boolean = this.route.snapshot.paramMap.has('id');

 if (hasCategoryId) {
   // get the "id" param string. convert string to a number using the "+" symbol
    this.currentCategoryId = Number(this.route.snapshot.paramMap.get('id'));
 }
 else {
   // not category id available ... default to category id 1
   this.currentCategoryId = 1;
 }

 // now get the products for the given category id
 this.productService.getProductList(this.currentCategoryId).subscribe(
   data => {
     this.products = data;
   }
 )  
      }
      processResult(){
        return (data: any) => {
          this.products = data._embedded.products;
          this.thePageNumber = data.page.number +1;
          this.thePageSize = data.page.size;
          this.theTotalElements = data.page.totalElements;
        };
      }
    
// adding to cart

addToCart(theProduct: Product) {
    
 

  // TODO ... do the real work
  const theCartItem = new CartItem(theProduct);
if(this.isLoggedIn){
  this.cartService.addtoCart(theCartItem);
//  console.log(`Adding to cart: ${theProduct.name}, ${theProduct.unitPrice}`);
  alert(`Your Product "${theProduct.name}" Has Been Added To Cart Successfully and the total Price Is "${theProduct.unitPrice}" `)
  
}
else{
  alert("Please Login First before adding to cart")
}
}
  }


