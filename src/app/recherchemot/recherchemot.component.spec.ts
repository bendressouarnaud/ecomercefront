import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecherchemotComponent } from './recherchemot.component';

describe('RecherchemotComponent', () => {
  let component: RecherchemotComponent;
  let fixture: ComponentFixture<RecherchemotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecherchemotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecherchemotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
