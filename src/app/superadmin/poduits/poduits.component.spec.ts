import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoduitsComponent } from './poduits.component';

describe('PoduitsComponent', () => {
  let component: PoduitsComponent;
  let fixture: ComponentFixture<PoduitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoduitsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PoduitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
