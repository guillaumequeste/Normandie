import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VeulesComponent } from './veules.component';

describe('VeulesComponent', () => {
  let component: VeulesComponent;
  let fixture: ComponentFixture<VeulesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VeulesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VeulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
