import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-number',
  standalone: false,
  templateUrl: './input-number.component.html',
  styleUrls: ['./input-number.component.scss']
})

export class InputNumberComponent implements OnInit {

  @Input() quantity!: number;
  @Input() max!: number;

  @Output() quantityChange = new EventEmitter<number>();
  @Output() maxReached = new EventEmitter<string>();

  constructor() { }

  downQuantity(): void {
    if (this.quantity > 0) {
      this.quantity--;
      this.quantityChange.emit(this.quantity);
    }
  }

  upQuantity(): void {
    if (this.quantity < this.max) {
      this.quantity++;
      this.quantityChange.emit(this.quantity);
    } else {
      this.maxReached.emit('Se alcanzó el máximo');
    }
  }

  verifyProductoQuantity(): void {
    if (this.max < this.quantity) {
      alert("No quedan más en stock");
      this.quantity = this.max;
    }

    if (this.quantity < 0) {
      alert("No se pueden pedir menos que 0 productos");
      this.quantity = 0;
    }
  }

  onInputChange(event: Event): void {
    const inputValue = +(event.target as HTMLInputElement).value;
    this.quantity = inputValue;
    this.quantityChange.emit(this.quantity);
  }

  ngOnInit(): void { }
}
