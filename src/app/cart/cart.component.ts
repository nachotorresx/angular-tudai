import { Component, OnInit } from '@angular/core';
import { BurgerCartService } from '../servicies/burger-cart.service';
import { BurgerDataService } from '../servicies/burger-data.service';
import { Burger } from '../burgers-list/Burger';
import { forkJoin, Observable } from 'rxjs';

@Component({
  selector: 'app-cart',
  standalone: false,
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})

export class CartComponent implements OnInit {

  cartList$: Observable<Burger[]>;

  constructor(
    private cart: BurgerCartService,
    private burgerDataService: BurgerDataService) {
    this.cartList$ = cart.cartList.asObservable();
  }

  isVisible = false;

  toggleCart(): void {
    this.isVisible = !this.isVisible;
  }

  removeItem(burger: Burger): void {
    this.cart.removeFromCart(burger);
  }

  getTotal(cartList: Burger[]): number {
    return cartList.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }

  confirmPurchase(): void {
      const cartItems = this.cart.cartList.value;

      const updateRequests = cartItems.map(burger => {
      const newStock = burger.stock - burger.quantity;
      const updatedBurger = { ...burger, stock: newStock };
      const { quantity, ...burgerToSend } = updatedBurger;

      return this.burgerDataService.updateBurger(burgerToSend);
    });

    forkJoin(updateRequests).subscribe({
      next: () => {
        console.log('Todos los stocks actualizados');
        this.cart.loadCart();
        this.burgerDataService.loadData();
        this.cart.clearCart();             
        alert("¡Compra realizada con éxito!"); 
      },
      error: (err) => {
        console.error('Error actualizando algunos productos', err);
      }
    });
  }

  ngOnInit(): void { }

}