import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaintAubinComponent } from './saint-aubin.component';

describe('SaintAubinComponent', () => {
  let component: SaintAubinComponent;
  let fixture: ComponentFixture<SaintAubinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaintAubinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaintAubinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
