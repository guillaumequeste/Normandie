import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PourvilleComponent } from './pourville.component';

describe('PourvilleComponent', () => {
  let component: PourvilleComponent;
  let fixture: ComponentFixture<PourvilleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PourvilleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PourvilleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
