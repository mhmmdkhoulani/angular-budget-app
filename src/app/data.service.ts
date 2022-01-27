import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public budget = new BehaviorSubject<number>(0);
  items = [
    { title: "salary", number: 1000 },
    { title: "Rent", number: -500 },
    { title: "Project", number: 900 },
  ];


  total: any;
  index: any;

  constructor() {
    this.total = this.items.reduce((a: any, c: any) => a + c.number, 0);
    this.setBudget(this.total);
  }



  public getItems(): Array<{ title: string, number: any }> {
    return this.items;
  }

  public createItme(item: { title: string, number: any }) {
    this.items.push(item);
    this.total = this.items.reduce((a: any, c: any) => a + c.number, 0);
    this.setBudget(this.total);

  }
  public deleteItem(item: { title: string, number: any }) {
    this.index = this.items.indexOf(item);
    this.items.splice(this.index, 1);
    this.total = this.items.reduce((a: any, c: any) => a + c.number, 0);
    this.setBudget(this.total);
  }

  budgetObservable(): Observable<number> {
    return this.budget.asObservable();
  }

  setBudget(total: number) {
    this.budget.next(total);
  }


}
