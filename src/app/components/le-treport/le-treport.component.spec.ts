import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeTreportComponent } from './le-treport.component';

describe('LeTreportComponent', () => {
  let component: LeTreportComponent;
  let fixture: ComponentFixture<LeTreportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeTreportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeTreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
