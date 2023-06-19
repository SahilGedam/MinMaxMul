import { Component } from '@angular/core';

@Component({
  selector: 'app-add-sub-mul',
  templateUrl: './add-sub-mul.component.html',
  styleUrls: ['./add-sub-mul.component.css'],
})
export class AddSubMulComponent {
  result = 0;
  valid = true;
  integreRegex = /^\d+\.\d{0,2}$/;
  add(num1: number, num2: number) {


    console.log(num1 + num2);
    if(num1 <0 ){
     this.valid=false;
    }
    this.result = num1 + num2;
  }
  sub(num1: number, num2: number) {
    console.log(num1 - num2);
    this.result = num1 - num2;
  }
  mul(num1: number, num2: number) {
    console.log(num1 * num2);
    this.result = num1 * num2;
  }
  div(num1: number, num2: number) {
    console.log(num1 / num2);
    this.result = num1 / num2;
  }
}
