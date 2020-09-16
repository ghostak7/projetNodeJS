import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTournoisComponent } from './list-tournois.component';

describe('ListTournoisComponent', () => {
  let component: ListTournoisComponent;
  let fixture: ComponentFixture<ListTournoisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListTournoisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTournoisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
