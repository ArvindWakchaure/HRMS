import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../../Services/database.service';
import { CoreLogicService } from '../../Services/core-logic.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-assignmentdetail',
  templateUrl: './assignmentdetail.component.html',
  styleUrls: ['./assignmentdetail.component.scss'],
})
export class AssignmentdetailComponent implements OnInit {
  assignment: any;
  assid:any;
  constructor(private db: DatabaseService,private env: CoreLogicService,private activaroute:ActivatedRoute) {
    // this.assid = this.activaroute.snapshot.paramMap.get('id');
    console.log(this.activaroute.snapshot.params);
   }

  ngOnInit() {this.db.assignment().subscribe(data => {
    this.assignment = data as any;
  },
    (err) => this.env.Error(err));
}}


