import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrielComponent } from './criel.component';

describe('CrielComponent', () => {
  let component: CrielComponent;
  let fixture: ComponentFixture<CrielComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrielComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrielComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
