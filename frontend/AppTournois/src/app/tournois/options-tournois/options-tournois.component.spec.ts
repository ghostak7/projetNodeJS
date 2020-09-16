import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionsTournoisComponent } from './options-tournois.component';

describe('OptionsTournoisComponent', () => {
  let component: OptionsTournoisComponent;
  let fixture: ComponentFixture<OptionsTournoisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OptionsTournoisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OptionsTournoisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
