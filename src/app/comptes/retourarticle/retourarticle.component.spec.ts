import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetourarticleComponent } from './retourarticle.component';

describe('RetourarticleComponent', () => {
  let component: RetourarticleComponent;
  let fixture: ComponentFixture<RetourarticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetourarticleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RetourarticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
