import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SainteMargueriteComponent } from './sainte-marguerite.component';

describe('SainteMargueriteComponent', () => {
  let component: SainteMargueriteComponent;
  let fixture: ComponentFixture<SainteMargueriteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SainteMargueriteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SainteMargueriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
