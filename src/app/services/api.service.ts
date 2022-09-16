import { IRestaurant } from './../model/restaurant.interface';
import { environment } from './../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

const api = environment?.endpoint?.api;
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  // private _restaurant = new BehaviorSubject<IRestaurant | null>(null);
  // private restaurant$ = this._restaurant.asObservable();

  constructor(private http: HttpClient) {}

  get(): Observable<IRestaurant> {
    return this.http
      .get<IRestaurant>(`${api}/restaurant/random_restaurant`)
      .pipe(
        map((response) => {
          // this.setRestaurant(response);
          return response;
        })
      );
  }

  // getRestaurant(): Observable<IRestaurant | null> {
  //   return this.restaurant$;
  // }

  // setRestaurant(val: IRestaurant): void {
  //   this._restaurant.next(val);
  // }

  // countDescriptionWord(): Observable<any> {
  //   let result = [];
  //   this.restaurant$.pipe(
  //     map((resp) => {
  //       const desc = resp?.description.toString();
  //       result = this.countWord(desc);
  //     })
  //   );
  //   return of(10);
  // }

  // countWord(description: any) {
  //   let temp = description.replace(/[,.!]/g, '');
  //   let words = temp.toLowerCase().split(' ');

  //   let wordCounts: any = {};
  //   words.forEach((word: any) => {
  //     wordCounts[word] = (wordCounts[word] || 0) + 1;
  //   });
  //   var size = Object.keys(wordCounts).length;
  //   console.log(size);
  //   console.log(wordCounts);

  //   let result: any = [];
  //   if (wordCounts) {
  //     Object.keys(wordCounts).map((a, idx) => {
  //       result.push({
  //         key: a,
  //         value: wordCounts[a],
  //       });
  //     });
  //   }

  //   result.sort((a:any, b:any) => {
  //     if (a.value < b.value) return -1
  //     return a.value > b.value ? 1 : 0
  //   })
  //   return result.slice(0, 10);
  // }
}
