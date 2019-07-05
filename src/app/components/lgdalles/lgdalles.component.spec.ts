import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LgdallesComponent } from './lgdalles.component';

describe('LgdallesComponent', () => {
  let component: LgdallesComponent;
  let fixture: ComponentFixture<LgdallesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LgdallesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LgdallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
