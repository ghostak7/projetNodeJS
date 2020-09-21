import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutTournoisComponent } from './ajout-tournois.component';

describe('AjoutTournoisComponent', () => {
  let component: AjoutTournoisComponent;
  let fixture: ComponentFixture<AjoutTournoisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutTournoisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutTournoisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
