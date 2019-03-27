import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BellevilleComponent } from './belleville.component';

describe('BellevilleComponent', () => {
  let component: BellevilleComponent;
  let fixture: ComponentFixture<BellevilleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BellevilleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BellevilleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
