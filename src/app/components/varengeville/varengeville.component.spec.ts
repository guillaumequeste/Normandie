import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VarengevilleComponent } from './varengeville.component';

describe('VarengevilleComponent', () => {
  let component: VarengevilleComponent;
  let fixture: ComponentFixture<VarengevilleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VarengevilleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VarengevilleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
