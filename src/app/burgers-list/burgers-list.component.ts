import { Component, OnInit } from '@angular/core';
import { Burger } from './Burger';
import { BurgerCartService } from '../servicies/burger-cart.service';
import { BurgerDataService } from '../servicies/burger-data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-burgers-list',
  standalone: false,
  templateUrl: './burgers-list.component.html',
  styleUrl: './burgers-list.component.scss'
})

export class BurgersListComponent implements OnInit {

  burgers$!: Observable<Burger[]>;

  constructor(private cart: BurgerCartService,
    private burgersDataServicie: BurgerDataService) {
  }

  ngOnInit(): void {
    this.burgers$ = this.burgersDataServicie.burgers$;
    this.burgersDataServicie.loadData();
  }

  addToCart(burger: Burger): void {
    if (burger.quantity !== 0) {
      this.cart.addToCart(burger);
      burger.quantity = 0;
    } else {
      alert("No se puede agregar un producto con cantidad 0");
    }
  }

  maxReached(m: string): void {
    alert(m);
  }
}
