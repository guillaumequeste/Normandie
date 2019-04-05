import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaintValeryComponent } from './saint-valery.component';

describe('SaintValeryComponent', () => {
  let component: SaintValeryComponent;
  let fixture: ComponentFixture<SaintValeryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaintValeryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaintValeryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
