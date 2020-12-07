import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../../services.service';

@Component({
  selector: 'app-createnotice',
  templateUrl: './createnotice.component.html',
  styleUrls: ['./createnotice.component.css']
})
export class CreatenoticeComponent implements OnInit {

  title:string;
  description: string;
  item_date:Date;
  notObject:any;
  nameofs:string;
  dept:string;

  constructor(private serv:ServicesService) {
    this.title='';
    this.description='';
    this.dept = '';
    this.nameofs = '';
    this.item_date=new Date();
  }

  addItem(event){
    this.notObject={
      id:this.serv.idfunc(),
      title:this.title,
      description:this.description,
      item_date:this.item_date,
      nameofs:this.nameofs,
      dept:this.dept,
    }
    this.serv.createNotice(this.notObject)
    this.title='';
    this.description='';
    this.dept = '';
    this.nameofs = '';
    event.preventDefault();
  }

  ngOnInit(): void {
  }

}
