import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSubMulComponent } from './add-sub-mul.component';

describe('AddSubMulComponent', () => {
  let component: AddSubMulComponent;
  let fixture: ComponentFixture<AddSubMulComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSubMulComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddSubMulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
