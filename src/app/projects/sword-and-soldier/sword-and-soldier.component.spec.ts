import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwordAndSoldierComponent } from './sword-and-soldier.component';

describe('SwordAndSoldierComponent', () => {
  let component: SwordAndSoldierComponent;
  let fixture: ComponentFixture<SwordAndSoldierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwordAndSoldierComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwordAndSoldierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
