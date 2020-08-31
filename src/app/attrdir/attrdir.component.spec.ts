import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttrdirComponent } from './attrdir.component';

describe('AttrdirComponent', () => {
  let component: AttrdirComponent;
  let fixture: ComponentFixture<AttrdirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttrdirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttrdirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
