import { Component } from '@angular/core';

@Component({
  selector: 'app-add-sub-mul',
  templateUrl: './add-sub-mul.component.html',
  styleUrls: ['./add-sub-mul.component.css'],
})
export class AddSubMulComponent {
  result = 0;
  valid = true;
  integreRegex = /^-?[0-9]\d*(\.\d+)?$/;
  // integreRegex = /^\d*\.?\d*$/;
  clicked = false;
  add(num12: number, num22: number) {
    this.clicked = true;
    let num1 = +num12;
    let num2 = +num22;

    console.log(num1 + num2);
    // if (num1 < 0 || num2 < 0) {
    //   this.valid = false;
    // }
    this.result = num1 + num2;
  }
  sub(num1: number, num2: number) {
 
    this.clicked = true;
    console.log(num1 - num2);
    this.result = num1 - num2;
  }
  mul(num1: number, num2: number) {
    this.clicked = true;
    console.log(num1 * num2);
    this.result = num1 * num2;
  }
  div(num1: number, num2: number) {
    this.clicked = true;
    console.log(num1 / num2);
    this.result = num1 / num2;
  }
}
