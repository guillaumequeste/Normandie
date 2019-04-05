import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PuysComponent } from './puys.component';

describe('PuysComponent', () => {
  let component: PuysComponent;
  let fixture: ComponentFixture<PuysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PuysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PuysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
