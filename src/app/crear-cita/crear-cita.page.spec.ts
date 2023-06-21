import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CrearCitaPage } from './crear-cita.page';

describe('CrearCitaPage', () => {
  let component: CrearCitaPage;
  let fixture: ComponentFixture<CrearCitaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CrearCitaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
