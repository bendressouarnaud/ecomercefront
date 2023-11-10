import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiengrossisteComponent } from './liengrossiste.component';

describe('LiengrossisteComponent', () => {
  let component: LiengrossisteComponent;
  let fixture: ComponentFixture<LiengrossisteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiengrossisteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LiengrossisteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
