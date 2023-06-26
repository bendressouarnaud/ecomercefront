import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MairieComponent } from './mairie.component';

describe('MairieComponent', () => {
  let component: MairieComponent;
  let fixture: ComponentFixture<MairieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MairieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MairieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
