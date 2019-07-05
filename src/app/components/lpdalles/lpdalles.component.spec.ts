import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LpdallesComponent } from './lpdalles.component';

describe('LpdallesComponent', () => {
  let component: LpdallesComponent;
  let fixture: ComponentFixture<LpdallesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LpdallesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LpdallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
