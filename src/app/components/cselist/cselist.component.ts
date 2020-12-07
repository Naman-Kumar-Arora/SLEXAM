import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../../services.service';

@Component({
  selector: 'app-cselist',
  templateUrl: './cselist.component.html',
  styleUrls: ['./cselist.component.css']
})
export class CselistComponent implements OnInit {
  noticeDetails:any;
  constructor(private serv:ServicesService) { }

  ngOnInit(): void {
    this.noticeDetails = this.serv.noticeList.filter((obj) => {return obj.dept === 'CSE'})
  }

}
