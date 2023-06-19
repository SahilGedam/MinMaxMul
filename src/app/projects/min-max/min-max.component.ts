import { Component } from '@angular/core';

@Component({
  selector: 'app-min-max',
  templateUrl: './min-max.component.html',
  styleUrls: ['./min-max.component.css']
})
export class MinMaxComponent {
  title = 'MinMaxMul';
  validForm = false;

  validMax = false;
  validMin = false;
  valid3 = false;
  valid4 = false;
  valid5 = false;
  clicked = false;

  registerFn(data: any) {
    this.clicked=true;
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
    if (
      data.max % data.mul == 0 &&
      data.min % data.mul == 0 &&
      data.max > data.min &&
      data.max > data.mul &&
      data.mul <= data.min
    ) {
      this.validForm = true;
    }
  }
}
