import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Reg4Component } from './reg4.component';

describe('Reg4Component', () => {
  let component: Reg4Component;
  let fixture: ComponentFixture<Reg4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Reg4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Reg4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
