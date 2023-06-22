import { Component } from '@angular/core';

@Component({
  selector: 'app-min-max',
  templateUrl: './min-max.component.html',
  styleUrls: ['./min-max.component.css'],
})
export class MinMaxComponent {
  // validate without refreshing // done
  // border green // done
  //variable delacration
  title = 'MinMaxMul';
  validForm = false;
  validMinMax = false;

  validMax = false;
  validMin = false;
  valid3 = false;
  valid4 = false;
  valid5 = false;
  validZeroMul = false;
  clicked = false;
  styleMin = '';
  styleMax = '';
  styleMul = '';
  regex = /^-?[0-9]\d*(\.\d+)?$/;
  // to clear on value change
  clear() {
    this.validForm = false;
    this.validMinMax = false;
    this.validMax = false;
    this.validMin = false;
    this.valid3 = false;
    this.valid4 = false;
    this.valid5 = false;
    this.validZeroMul = false;
    this.clicked = false;
    this.styleMin = '';
    this.styleMax = '';
    this.styleMul = '';
  }
  registerFn(data: any) {
    this.clicked = true;
    // check  5 conditions
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
    if (data.mul != 0) {
      this.validZeroMul = true;
    }

    // check if both min and max values are factor mul
    if (this.validMin && this.validMax && this.validZeroMul) {
      this.validMinMax = true;
      // }
      // if (this.validMinMax) {
      // checck all other conditions
      if (this.valid3 && this.valid4 && this.valid5) {
        this.validForm = true;
      }
    }

    // set style classes
    // for min box
    if (
      (!this.validMin && this.validMax && this.clicked) ||
      (!this.valid3 && this.clicked && this.validMinMax)
    ) {
      console.log('invalid min');

      this.styleMin = 'error';
    }
    // for max box
    if (!this.validMax && this.validMin && this.clicked) {
      console.log('invalid max');
      this.styleMax = 'error';
    }
    // for mul box
    if (
      (!this.validMin && !this.validMax && this.clicked) ||
      (this.validMinMax && !this.valid5 && this.clicked) ||
      (this.validMinMax && !this.valid4 && this.clicked)
    ) {
      this.styleMul = 'error';
    }
    // if all success
    if (this.validForm) {
      console.log(this.validForm);

      this.styleMin = 'non-error';
      this.styleMax = 'non-error';
      this.styleMul = 'non-error';
    }
    console.log(this.styleMax, this.styleMin, this.styleMul);
  }
}
