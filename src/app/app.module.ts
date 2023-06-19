import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { MinMaxComponent } from './projects/min-max/min-max.component';
import { ButtonColorComponent } from './projects/button-color/button-color.component';
import { RouterComponent } from './projects/router/router.component';
import { RotateButtonComponent } from './projects/rotate-button/rotate-button.component';
import { AddSubMulComponent } from './projects/add-sub-mul/add-sub-mul.component';
import { SyncAddComponent } from './projects/sync-add/sync-add.component';
import { SwordAndSoldierComponent } from './projects/sword-and-soldier/sword-and-soldier.component';

@NgModule({
  declarations: [
    AppComponent,
    MinMaxComponent,
    ButtonColorComponent,
    RouterComponent,
    RotateButtonComponent,
    AddSubMulComponent,
    SyncAddComponent,
    SwordAndSoldierComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
