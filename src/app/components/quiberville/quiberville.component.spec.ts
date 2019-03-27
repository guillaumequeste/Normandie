import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuibervilleComponent } from './quiberville.component';

describe('QuibervilleComponent', () => {
  let component: QuibervilleComponent;
  let fixture: ComponentFixture<QuibervilleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuibervilleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuibervilleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
