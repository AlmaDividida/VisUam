import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizadorPageComponent } from './visualizador-page.component';

describe('VisualizadorPageComponent', () => {
  let component: VisualizadorPageComponent;
  let fixture: ComponentFixture<VisualizadorPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisualizadorPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualizadorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
