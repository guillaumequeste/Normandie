import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VeulettesComponent } from './veulettes.component';

describe('VeulettesComponent', () => {
  let component: VeulettesComponent;
  let fixture: ComponentFixture<VeulettesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VeulettesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VeulettesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
