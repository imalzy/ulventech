import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-counter-text',
  templateUrl: './counter-text.component.html',
  styleUrls: ['./counter-text.component.scss'],
})
export class CounterTextComponent implements OnInit {
  ngUnsubsribe = new Subject<any>();
  form!: FormGroup;
  constructor() {
    this.initForm();
  }

  ngOnInit(): void {
    this.form
      .get('address')
      ?.valueChanges.pipe(takeUntil(this.ngUnsubsribe))
      .subscribe({
        next: (data) => console.log('text', data),
        error: (err) => console.log('error', err),
        complete: () => console.log('Complete'),
      });
  }

  initForm(): void {
    this.form = new FormGroup({
      address: new FormControl('', Validators.required),
    });
  }

  get address() {
    return this.form.get('address');
  }
}
