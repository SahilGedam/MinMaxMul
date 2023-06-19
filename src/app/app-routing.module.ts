import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MinMaxComponent } from './projects/min-max/min-max.component';
import { ButtonColorComponent } from './projects/button-color/button-color.component';
import { RouterComponent } from './projects/router/router.component';
import { RotateButtonComponent } from './projects/rotate-button/rotate-button.component';
import { AddSubMulComponent } from './projects/add-sub-mul/add-sub-mul.component';
import { SyncAddComponent } from './projects/sync-add/sync-add.component';
import { SwordAndSoldierComponent } from './projects/sword-and-soldier/sword-and-soldier.component';

const routes: Routes = [
  {
    path: '',
    component: RouterComponent,
  },
  {
    path: 'min-max-mul',
    component: MinMaxComponent,
  },
  {
    path: 'btn-color',
    component: ButtonColorComponent,
  },
  {
    path: 'rotate-btn',
    component: RotateButtonComponent,
  },
  {
    path: 'add-sub-mul',
    component: AddSubMulComponent,
  },
  {
    path: 'sync-add',
    component: SyncAddComponent,
  },
  {
    path: 'sword-and-soldier',
    component: SwordAndSoldierComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
