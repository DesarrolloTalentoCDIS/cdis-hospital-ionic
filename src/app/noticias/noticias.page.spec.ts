import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { NoticiasPage } from './noticias.page';

describe('NoticiasPage', () => {
  let component: NoticiasPage;
  let fixture: ComponentFixture<NoticiasPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NoticiasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
