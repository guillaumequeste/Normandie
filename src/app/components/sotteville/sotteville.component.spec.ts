import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SottevilleComponent } from './sotteville.component';

describe('SottevilleComponent', () => {
  let component: SottevilleComponent;
  let fixture: ComponentFixture<SottevilleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SottevilleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SottevilleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
