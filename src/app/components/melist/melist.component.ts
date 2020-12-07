import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../../services.service';

@Component({
  selector: 'app-melist',
  templateUrl: './melist.component.html',
  styleUrls: ['./melist.component.css']
})
export class MelistComponent implements OnInit {
  noticeDetails:any;
  constructor(private serv:ServicesService) { }

  ngOnInit(): void {
    this.noticeDetails = this.serv.noticeList.filter((obj) => {return obj.dept === 'ME'})
  }

}
