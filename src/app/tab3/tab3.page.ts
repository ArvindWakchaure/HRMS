import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { DatabaseService } from '../Services/database.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  para: any;
  startDate: Date;
  endDate: Date;
  attendanceListData: any = [];
  constructor(private router: Router, private datePipe: DatePipe,
    private db: DatabaseService) {
    this.para = JSON.parse(localStorage.getItem('para'));
  }

  getReport() {
    console.log(this.startDate,"===", this.endDate);
    let startDate = this.datePipe.transform(this.startDate,"yyyy-MM-dd");
    let endDate = this.datePipe.transform(this.endDate,"yyyy-MM-dd");
    let selectPara = {
      "empcode":this.para.EmpID,
      "startdate": startDate,
      "enddate": endDate
    };
    console.log(selectPara);
    this.db.attendanceList(selectPara).subscribe(res => {
      console.log(res);
      if(res.code == 200) {
        this.attendanceListData = res.data;
        console.log("attendance list: ", this.attendanceListData);
      }
    }, error => {
      console.log(error);
    })
  }
  openNotifications() {
    this.router.navigateByUrl('/notifications');
  }
}
