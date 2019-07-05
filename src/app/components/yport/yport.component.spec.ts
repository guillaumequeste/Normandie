import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YportComponent } from './yport.component';

describe('YportComponent', () => {
  let component: YportComponent;
  let fixture: ComponentFixture<YportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
