import { Component, OnInit } from '@angular/core';
import { ConectionDataService } from '../../../services/conection-data.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
  items: any;
  itemEdit: any = {}

  constructor(private connection: ConectionDataService) { 
    this.connection.listItem().subscribe(item => {
      this.items = item;
      console.log(this.items)
    })
  } 

  ngOnInit() {
  }

  delete(item){
    this.connection.deleteItem(item);
  }

  edit(item){
    this.itemEdit = item;
  }

  saveEdit(){
    this.connection.editItem(this.itemEdit)
  }

}
