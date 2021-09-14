import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../Services/database.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  profiledata: any = [];
  para: any;

  constructor(private db: DatabaseService) { 
    console.log("Profile constructor");
  }

  ngOnInit() {
    console.log("Profile ngOnInit");
    this.para = JSON.parse(localStorage.getItem('para'));
   this. getProfile();
  }

  getProfile() {
  this.db.getProfileData(this.para).subscribe(res => {
    console.log(res);
    this.profiledata = [];
    this.profiledata = res;
  });
}

}
