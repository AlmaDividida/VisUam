import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TecnologiasSectionComponent } from './tecnologias-section.component';

describe('TecnologiasSectionComponent', () => {
  let component: TecnologiasSectionComponent;
  let fixture: ComponentFixture<TecnologiasSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TecnologiasSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TecnologiasSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
