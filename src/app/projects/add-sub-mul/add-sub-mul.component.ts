import { Component } from '@angular/core';

@Component({
  selector: 'app-add-sub-mul',
  templateUrl: './add-sub-mul.component.html',
  styleUrls: ['./add-sub-mul.component.css'],
})
export class AddSubMulComponent {
  result = 0;
  valid = false;
  valid1 = true;
  valid2 = true;
  integreRegex = /^-?[0-9]\d*(\.\d+)?$/;
  // integreRegex = /^\d*\.?\d*$/;

  validateState(num: number) {
    if (isNaN(num)) {
      return false;
    } else {
      return true;
    }
  }
  add(num12: number, num22: number) {
    // ValidityState()
    let num1 = +num12;
    let num2 = +num22;
    this.valid1 = this.validateState(num1);
    this.valid2 = this.validateState(num2);

    console.log(num1 + num2);
    if (this.valid1 && this.valid2) {
      this.result = num1 + num2;
      this.valid = this.validateState(this.result);
    }
  }
  sub(num1: number, num2: number) {
    this.valid1 = this.validateState(num1);
    this.valid2 = this.validateState(num2);
    if (this.valid1 && this.valid2) {
      console.log(num1 - num2);
      this.result = num1 - num2;
      this.valid = this.validateState(this.result);
    }
  }
  mul(num1: number, num2: number) {
    this.valid1 = this.validateState(num1);
    this.valid2 = this.validateState(num2);
    if (this.valid1 && this.valid2) {
      console.log(num1 * num2);
      this.result = num1 * num2;
      // this.validateState(this.result);
      this.valid = this.validateState(this.result);
    }
  }
  div(num1: number, num2: number) {
    this.valid1 = this.validateState(num1);
    this.valid2 = this.validateState(num2);
    if (this.valid1 && this.valid2) {
      console.log(num1 / num2);
      this.result = num1 / num2;
      // this.validateState(this.result);
      this.valid = this.validateState(this.result);
    }
  }
}
