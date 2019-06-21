import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextShellComponent } from './text-shell.component';

describe('TextShellComponent', () => {
  let component: TextShellComponent;
  let fixture: ComponentFixture<TextShellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextShellComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
