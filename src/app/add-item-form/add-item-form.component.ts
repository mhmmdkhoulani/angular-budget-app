import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';


@Component({
  selector: 'app-add-item-form',
  templateUrl: './add-item-form.component.html',
  styleUrls: ['./add-item-form.component.css']
})
export class AddItemFormComponent implements OnInit {
  item : {title:string, number:any} = {title:'' , number:null};
 

  constructor(public dataService: DataService) { }
  
  items = this.dataService.getItems();


  ngOnInit(): void {
  }
  
  createItem(){
    this.dataService.createItme(this.item);
    this.item = {title:'' , number: null};
  }

}
