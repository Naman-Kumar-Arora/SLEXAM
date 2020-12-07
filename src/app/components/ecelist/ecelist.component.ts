import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../../services.service';

@Component({
  selector: 'app-ecelist',
  templateUrl: './ecelist.component.html',
  styleUrls: ['./ecelist.component.css']
})
export class EcelistComponent implements OnInit {
  noticeDetails:any;
  constructor(private serv:ServicesService) { }

  ngOnInit(): void {
    this.noticeDetails = this.serv.noticeList.filter((obj) => {return obj.dept === 'ECE'})
  }

}
