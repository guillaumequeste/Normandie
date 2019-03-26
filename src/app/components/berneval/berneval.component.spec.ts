import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BernevalComponent } from './berneval.component';

describe('BernevalComponent', () => {
  let component: BernevalComponent;
  let fixture: ComponentFixture<BernevalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BernevalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BernevalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
