import { Injectable } from '@angular/core';
import { Burger } from '../burgers-list/Burger';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class BurgerCartService {

  private _cartList: Burger[] = [];

  cartList: BehaviorSubject<Burger[]> = new BehaviorSubject(this._cartList);

  constructor() { }

  loadCart() {
    this.cartList.next([]);
  }

  removeFromCart(burger: Burger): void {
    this._cartList = this._cartList.filter(item => item.name !== burger.name);
    this.cartList.next([...this._cartList]);
  }

  clearCart(): void {
    this.cartList.next([]);
  }

  addToCart(burger: Burger) {
    const item = this._cartList.find(v => v.name === burger.name);

    if (!item) {
      if (burger.quantity <= burger.stock) {
        this._cartList.push({ ...burger });
      } else {
        alert("No hay suficiente stock para agregar esa cantidad.");
        return;
      }
    } else {
      const nuevaCantidad = item.quantity + burger.quantity;

      if (nuevaCantidad <= burger.stock) {
        item.quantity = nuevaCantidad;
      } else {
        alert("Cantidad excede el stock disponible.");
        return;
      }
    }

    this.cartList.next([...this._cartList]);
  }

}
