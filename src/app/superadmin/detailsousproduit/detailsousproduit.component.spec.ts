import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsousproduitComponent } from './detailsousproduit.component';

describe('DetailsousproduitComponent', () => {
  let component: DetailsousproduitComponent;
  let fixture: ComponentFixture<DetailsousproduitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsousproduitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsousproduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
