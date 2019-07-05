import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtretatComponent } from './etretat.component';

describe('EtretatComponent', () => {
  let component: EtretatComponent;
  let fixture: ComponentFixture<EtretatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtretatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtretatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
