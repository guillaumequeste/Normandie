import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MesnilValComponent } from './mesnil-val.component';

describe('MesnilValComponent', () => {
  let component: MesnilValComponent;
  let fixture: ComponentFixture<MesnilValComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MesnilValComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MesnilValComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
