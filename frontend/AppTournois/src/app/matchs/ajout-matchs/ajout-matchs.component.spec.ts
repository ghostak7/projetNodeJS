import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutMatchsComponent } from './ajout-matchs.component';

describe('AjoutMatchsComponent', () => {
  let component: AjoutMatchsComponent;
  let fixture: ComponentFixture<AjoutMatchsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutMatchsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutMatchsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
