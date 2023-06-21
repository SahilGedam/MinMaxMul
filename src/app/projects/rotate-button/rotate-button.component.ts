import { Component, OnInit } from '@angular/core';
import { arrayMoveImmutable } from 'array-move';

@Component({
  selector: 'app-rotate-button',
  templateUrl: './rotate-button.component.html',
  styleUrls: ['./rotate-button.component.css'],
})
export class RotateButtonComponent implements OnInit {
  ngOnInit(): void {
    this.redButton();
    this.greenButton();
    this.yellowButton();
   
  }
  // simplify logic
  color = ['red', 'green', 'yellow'];

  btnColor1: string = '';
  btnColor2: string = '';
  btnColor3: string = '';
  rotateColor() {
    // let tempColor = this.color[2];
    // this.color[2] = this.color[1];
    // this.color[1] = this.color[0];
    // this.color[0] = tempColor;
    this.color=arrayMoveImmutable(this.color, -1, 0);

    this.btnColor1 = this.color[0];
    this.btnColor2 = this.color[1];
    this.btnColor3 = this.color[2];
  }
  redButton() {
    this.btnColor1 = 'red';
    console.log(this.btnColor1);
    this.color[0] = 'red';
  }
  greenButton() {
    this.btnColor2 = 'green';
    console.log(this.btnColor2);
    this.color[1] = 'green';
  }
  yellowButton() {
    this.btnColor3 = 'yellow';
    console.log(this.btnColor3);
    this.color[2] = 'yellow';
  }
}
