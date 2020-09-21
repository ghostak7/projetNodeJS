import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMatchsComponent } from './list-matchs.component';

describe('ListMatchsComponent', () => {
  let component: ListMatchsComponent;
  let fixture: ComponentFixture<ListMatchsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListMatchsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMatchsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
