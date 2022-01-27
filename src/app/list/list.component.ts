import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() income: boolean = false; 
  @Input() items:any;
  item : {title:string, number:any} = {title:'' , number:null};
  budget:any;
  index:any;

  constructor(public dataService : DataService) { }

  ngOnInit(): void {
     this.items = this.dataService.getItems();

    }
      

    deleteItem(i:number) {
      this.item = this.items[i];
      this.dataService.deleteItem(this.item);
    }

}
