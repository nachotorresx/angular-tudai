import { Component } from '@angular/core';

@Component({
  selector: 'app-burgers-list',
  standalone: false,
  templateUrl: './burgers-list.component.html',
  styleUrl: './burgers-list.component.scss'
})
export class BurgersListComponent {
  burger = {
    "name": "Rhos",
    "description": "Hamburguesa con cheddar",
    "price": 6500,
    "stock": 3,
    "image": "assets/img/logo.jpeg"
  }
}
