import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DieppeComponent } from './dieppe.component';

describe('DieppeComponent', () => {
  let component: DieppeComponent;
  let fixture: ComponentFixture<DieppeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DieppeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DieppeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
