import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  noticeList = [];
  createNotice(notObject){
      this.noticeList.push(notObject);   
    }
  idfunc(){
      return this.noticeList.length+1;
    }
  deleteTodo(index){
      this.noticeList.splice(index,1);
    }
  constructor() { }
}
