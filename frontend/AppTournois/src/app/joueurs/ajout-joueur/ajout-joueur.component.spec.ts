import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutJoueurComponent } from './ajout-joueur.component';

describe('AjoutJoueurComponent', () => {
  let component: AjoutJoueurComponent;
  let fixture: ComponentFixture<AjoutJoueurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutJoueurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutJoueurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
