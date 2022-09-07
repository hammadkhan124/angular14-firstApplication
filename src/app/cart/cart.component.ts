import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private cartServeice:CartService) { }

  ngOnInit(): void {
  }

  getCart(){
    return this.cartServeice.get();
  }

}
