import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionmairieComponent } from './gestionmairie.component';

describe('GestionmairieComponent', () => {
  let component: GestionmairieComponent;
  let fixture: ComponentFixture<GestionmairieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionmairieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionmairieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
