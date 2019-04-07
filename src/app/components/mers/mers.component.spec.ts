import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MersComponent } from './mers.component';

describe('MersComponent', () => {
  let component: MersComponent;
  let fixture: ComponentFixture<MersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
