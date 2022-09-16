import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { of, Observable } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  formGroup!: FormGroup;
  duplicateWord!: Observable<any>;

  constructor(public api: ApiService, private fb: FormBuilder) {
    this.init();
  }

  ngOnInit(): void {
    console.log('Dashboard');
    this.api.get().subscribe((resp) => {
      console.log(resp);
      this.formGroup
        .get('name')
        ?.patchValue(resp?.description.split(' ').length);
      this.formGroup.get('textare')?.patchValue(resp?.description);
      this.duplicateWord = this.countWord(resp?.description);
    });
  }

  init() {
    this.formGroup = this.fb.group({
      name: new FormControl(''),
      textare: new FormControl(''),
    });
  }

  onSubmit(): void {
    console.log(this.formGroup);
  }

  countWord(description: string): Observable<any> {
    let temp = description.replace(/[,.!]/g, '');
    let words = temp.toLowerCase().split(' ');

    let wordCounts: any = {};
    words.forEach((word) => {
      wordCounts[word] = (wordCounts[word] || 0) + 1;
    });
    var size = Object.keys(wordCounts).length;
    console.log(size);
    console.log(wordCounts);

    let result: any = [];
    if (wordCounts) {
      Object.keys(wordCounts).map((a, idx) => {
        result.push({
          key: a,
          value: wordCounts[a],
        });
      });
    }
    result.sort((a:any, b:any) => {
      if (a.value > b.value) return -1
      return a.value < b.value ? 1 : 0
    })
    console.log(result.slice(0, 10))
    return of(result.slice(0, 10));
  }
}
