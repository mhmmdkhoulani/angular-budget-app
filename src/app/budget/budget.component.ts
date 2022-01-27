import { AfterViewInit, Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';


@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.css']
})
export class BudgetComponent implements OnInit, AfterViewInit {
  budget: any;


  constructor(public dataService: DataService) {

  }

  ngOnInit(): void {

  }

  ngAfterViewInit() {
    this.budget = this.dataService.budgetObservable();
  }

}
