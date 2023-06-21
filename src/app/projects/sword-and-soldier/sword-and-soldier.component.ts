import { Component } from '@angular/core';

@Component({
  selector: 'app-sword-and-soldier',
  templateUrl: './sword-and-soldier.component.html',
  styleUrls: ['./sword-and-soldier.component.css'],
})
export class SwordAndSoldierComponent  {
  // simplify logic
  // add valid 

  soldiers = 0;

  
  isOdd = true;
  soldierArray: any;
  copyArray: any;
  functionClick() {
    // fill array
    this.soldierArray = Array(this.soldiers)
      .fill(0)
      .map((x, i) => i);
    this.soldierArray.push(this.soldiers);
    this.soldierArray.shift();
    this.copyArray = this.soldierArray;
    console.log(this.copyArray);

    //  first check if odd

    if (this.soldierArray.length % 2 != 0) {
      this.isOdd = true;
    } else {
      this.isOdd = false;
    }
    console.log(this.isOdd);

    //first iteration

    this.soldierArray = this.soldierArray.filter(
      (value: any, index: number) => {
        return index % 2 == 0;
      }
    );

    console.log(this.soldierArray);

    while (this.soldierArray.length > 1) {
      if (this.isOdd) {
        this.soldierArray.shift();
        this.soldierArray = this.soldierArray.filter(
          (value: any, index: number) => {
            return index % 2 == 0;
          }
        );
      } else {
        console.log('entetrd else statement');

        this.soldierArray = this.soldierArray.filter(
          (value: any, index: number) => {
            return index % 2 == 0;
          }
        );
        this.isOdd = true;
      }
      console.log(this.soldierArray);
    }
  }
}
