import { Component } from '@angular/core';

@Component({
  selector: 'app-sync-add',
  templateUrl: './sync-add.component.html',
  styleUrls: ['./sync-add.component.css'],
})
export class SyncAddComponent {
  value1 = 0;
  value2 = 0;
  value3 = 0;
  clicked1 = false;
  clicked2 = false;
  clicked3 = false;
  firstButton: number[] = [];
  btn1() {
    this.value1 += 1;
    this.clicked1 = true;
    this.firstButton.push(1);
  }
  btn2() {
    this.value2 += 1;
    this.clicked2 = true;
    this.firstButton.push(2);
  }
  btn3() {
    this.value3 += 1;
    this.clicked3 = true;
    this.firstButton.push(3);
  }
  syncAdd() {
    // no buttons clicked
    if (!this.clicked1 && !this.clicked2 && !this.clicked3) {
      this.value1 += 1;
      this.value2 += 1;
      this.value3 += 1;
    } else if (this.firstButton.length > 0 && this.firstButton.length < 3) {
      // some buttons  clicked
      console.log(this.firstButton);
      if (this.firstButton.length == 1) {
        if (this.firstButton.includes(1)) {
          this.value2 += 1;
          this.value3 += 1;
        }
        if (this.firstButton.includes(2)) {
          this.value1 += 1;

          this.value3 += 1;
        }
        if (this.firstButton.includes(3)) {
          this.value1 += 1;
          this.value2 += 1;
        }
      } else if (this.firstButton.length == 2) {
        if (this.firstButton.includes(1) && this.firstButton.includes(2)) {
          this.value3 += 1;
        }
        if (this.firstButton.includes(2) && this.firstButton.includes(3)) {
          this.value1 += 1;
        }
        if (this.firstButton.includes(3) && this.firstButton.includes(1)) {
          this.value2 += 1;
        }
      }
    } else if (this.clicked1 && this.clicked2 && this.clicked3) {
      // all buttons are clicked
      if (this.firstButton[0] == 1) {
        this.value1 += 1;
      } else if (this.firstButton[0] == 2) {
        this.value2 += 1;
      } else if (this.firstButton[0] == 3) {
        this.value3 += 1;
      }
    }
    this.clicked1 = false;
    this.clicked2 = false;
    this.clicked3 = false;
    this.firstButton = [];
  }
}
