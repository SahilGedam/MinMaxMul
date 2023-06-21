import { Component } from '@angular/core';

@Component({
  selector: 'app-min-max',
  templateUrl: './min-max.component.html',
  styleUrls: ['./min-max.component.css'],
})
export class MinMaxComponent {
  // validate without refreshing
  // border green
  title = 'MinMaxMul';
  validForm = false;
  validMinMax = false;

  validMax = false;
  validMin = false;
  valid3 = false;
  valid4 = false;
  valid5 = false;
  clicked = false;
  clear() {
    this.validForm = false;
    this.validMinMax = false;
    this.validMax = false;
    this.validMin = false;
    this.valid3 = false;
    this.valid4 = false;
    this.valid5 = false;
    this.clicked = false;
  }
  registerFn(data: any) {
    this.clicked = true;
    if (data.max % data.mul == 0) {
      this.validMax = true;
    }
    if (data.min % data.mul == 0) {
      this.validMin = true;
    }
    if (data.max > data.min) {
      this.valid3 = true;
    }
    if (data.max > data.mul) {
      this.valid4 = true;
    }
    if (data.mul <= data.min) {
      this.valid5 = true;
    }
    if (this.validMin && this.validMax) {
      this.validMinMax = true;
    }
    if (this.validMinMax) {
      if (this.valid3 && this.valid4 && this.valid5) {
        this.validForm = true;
      }
    }
    // if (
    //   // data.max % data.mul == 0 &&
    //   // data.min % data.mul == 0 &&
    //   // data.max > data.min &&
    //   // data.max > data.mul &&
    //   // data.mul <= data.min
    //   this.validMax &&
    //   this.validMin &&
    //   this.valid3 &&
    //   this.valid4 &&
    //   this.valid5
    // ) {
    //   this.validForm = true;
    // }
  }
}
