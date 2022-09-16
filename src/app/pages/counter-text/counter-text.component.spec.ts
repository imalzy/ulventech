import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterTextComponent } from './counter-text.component';

describe('CounterTextComponent', () => {
  let component: CounterTextComponent;
  let fixture: ComponentFixture<CounterTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CounterTextComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be valid if form value is valid', () => {
    component.form.setValue({
      address: 'South Jakarta',
    });
    expect(component.form.valid).toEqual(true);
  });

  it('should be invalid if form value is invalid', () => {
    component.form.setValue({
      address: '',
    });
    expect(component.form.valid).toEqual(false);
  });
});
