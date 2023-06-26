import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SouspoduitsComponent } from './souspoduits.component';

describe('SouspoduitsComponent', () => {
  let component: SouspoduitsComponent;
  let fixture: ComponentFixture<SouspoduitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SouspoduitsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SouspoduitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
