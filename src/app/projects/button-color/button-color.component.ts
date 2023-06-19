import { Component } from '@angular/core';

@Component({
  selector: 'app-button-color',
  templateUrl: './button-color.component.html',
  styleUrls: ['./button-color.component.css'],
})
export class ButtonColorComponent {
  buttonColor: string = '';
  changeColor(data: string) {
    console.log(data);
  this.buttonColor=data;
  }
}
