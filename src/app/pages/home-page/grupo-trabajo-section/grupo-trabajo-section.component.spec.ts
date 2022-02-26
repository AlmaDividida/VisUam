import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrupoTrabajoSectionComponent } from './grupo-trabajo-section.component';

describe('GrupoTrabajoSectionComponent', () => {
  let component: GrupoTrabajoSectionComponent;
  let fixture: ComponentFixture<GrupoTrabajoSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrupoTrabajoSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrupoTrabajoSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
