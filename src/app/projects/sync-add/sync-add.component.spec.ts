import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SyncAddComponent } from './sync-add.component';

describe('SyncAddComponent', () => {
  let component: SyncAddComponent;
  let fixture: ComponentFixture<SyncAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SyncAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SyncAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
