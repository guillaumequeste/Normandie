import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AultComponent } from './ault.component';

describe('AultComponent', () => {
  let component: AultComponent;
  let fixture: ComponentFixture<AultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
