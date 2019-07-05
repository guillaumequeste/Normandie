import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaintPierreEnPortComponent } from './saint-pierre-en-port.component';

describe('SaintPierreEnPortComponent', () => {
  let component: SaintPierreEnPortComponent;
  let fixture: ComponentFixture<SaintPierreEnPortComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaintPierreEnPortComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaintPierreEnPortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
