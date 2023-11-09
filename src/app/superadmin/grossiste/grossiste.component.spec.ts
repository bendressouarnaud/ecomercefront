import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrossisteComponent } from './grossiste.component';

describe('GrossisteComponent', () => {
  let component: GrossisteComponent;
  let fixture: ComponentFixture<GrossisteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrossisteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrossisteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
