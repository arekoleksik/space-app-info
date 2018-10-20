import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LauchesComponent } from './lauches.component';

describe('LauchesComponent', () => {
  let component: LauchesComponent;
  let fixture: ComponentFixture<LauchesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LauchesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LauchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
