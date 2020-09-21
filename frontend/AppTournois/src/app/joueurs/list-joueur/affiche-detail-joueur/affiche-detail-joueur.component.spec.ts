import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficheDetailJoueurComponent } from './affiche-detail-joueur.component';

describe('AfficheDetailJoueurComponent', () => {
  let component: AfficheDetailJoueurComponent;
  let fixture: ComponentFixture<AfficheDetailJoueurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfficheDetailJoueurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AfficheDetailJoueurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
