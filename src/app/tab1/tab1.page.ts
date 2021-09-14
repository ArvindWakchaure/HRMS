import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, MenuController, ModalController, Platform, ToastController } from '@ionic/angular';
import { CoreLogicService } from '../Services/core-logic.service';
import { DatabaseService } from '../Services/database.service';
import { ModelComponent } from '../component/model/model.component';
import { Subject } from 'rxjs';
import { Device } from '@ionic-native/device/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  AppUploadAvilable: boolean;
  menuList: any;
  menuEnabled: boolean;
  ProfileEvnt: string;
  profiledata: any = [];
  AppSetting: any;

  sidemenuDemo: any;
  colorList: string[];
  para: any;
  token: string;
  empName: any;
  response: any;
  AppDetail:any;
  longitude: any;
  latitude: any;
  attendanceID: any;
  checkedinOn: any;
  profilePic: any;
  empCode: any;
  degignation: any;

  constructor(private geolocation:Geolocation,private device:Device,private toastController:ToastController,private db: DatabaseService, private modalcontroller: ModalController, public alertCtrl: AlertController, public platform: Platform, public menuCtrl: MenuController, private router: Router, private CG: CoreLogicService) {
    this.AppUploadAvilable = false;
    this.para = JSON.parse(localStorage.getItem('para'));
    this.token = localStorage.getItem('AppTokenKey');
    console.log(this.para,"&&&", this.token);
    this.platform.ready().then((source) => {
    });
  }



  modallll() {

    this.UserdetailComponentmodal();

  }
  async UserdetailComponentmodal() {
    {
    }
  }

  ProfileEvenet() {
    if (this.ProfileEvnt == 'Logout') {

      this.Logout()
    }
    else if (this.ProfileEvnt == 'Profile') {
      this.router.navigate(['/profile'])
    }
    else {

      alert(this.ProfileEvnt)
    }
  }


  async confirm() {
    this.alertCtrl.dismiss();
    const alert = await this.alertCtrl.create({
      header: 'Confirm!',
      message: 'Do you want to exit the app?',
      buttons: [
        {
          text: 'Cancel',
          handler: () => {
            console.log('Confirm Cancel');
          },
        },
        {
          text: 'Okay',
          handler: () => {

            this.router.navigate(['/login'])
          },
        },
      ],
    });
    await alert.present();
  }

  openNotifications() {
    this.router.navigateByUrl('/notifications');
  }


  ionViewWillEnter() {
    this.menuCtrl.enable(true);
    this.menuList = [{ 'icons': 'assets/image/profile.png', 'menuName': 'Profile', 'pageRoute': '/profile' }, { 'icons': 'assets/image/attendance.png', 'menuName': 'My Attendance','pageRoute': '/tabs/tab3' }, { 'icons': 'assets/image/checkin2.png', 'menuName': 'Check In', 'pageRoute': '/checkin'}, { 'icons': 'assets/image/sal.png', 'menuName': 'Salary','pageRoute': '/tabs/tab1' }, { 'icons': 'assets/image/helpdesk.png', 'menuName': 'Helpdesk','pageRoute': '/tabs/tab1' }];

    //this.menuList = [{ 'icons': 'assets/image/profile.png', 'menuName': 'Profile' ,'pageRoute': '/tabs/tab1'}, { 'icons': 'assets/image/attendance.png', 'menuName': 'My Attendance','pageRoute': '/tabs/tab1' }, { 'icons': 'assets/image/checkin.png', 'menuName': 'Check In','pageRoute': '/tabs/tab1'}, { 'icons': 'assets/image/sal.png', 'menuName': 'Salary','pageRoute': '/tabs/tab1' }, { 'icons': 'assets/image/helpdesk.png', 'menuName': 'Helpdesk','pageRoute': '/tabs/tab1'}];
    // this.GetDashboardMenu();
    // this.CG.presentLoading('Please Wait...');
    // this.db.profile().subscribe((data) => {
    //   console.log("Profile Data: ",data);
    //   this.profiledata = data as any;
    //   this.CG.dismissLoading();
    //   this.db.sendProfile(this.profiledata);
    //   this.db.getProfile().subscribe(data => {
    //     console.log("Profile::", data);
    //   })
    // },(err)=>{
    //   console.log("Weservice error: ",JSON.stringify(err));
    //   this.CG.Error(err);
    // })
  }
  ionViewDidEnter() {
    // this.profiledatass();
  }
  Logout() {
    localStorage.removeItem('AppTokenKey');
    localStorage.removeItem('enroll_id');
    localStorage.removeItem('examduration');

    this.router.navigate(['/login']);
  }

  ngOnInit() {
    console.log("NgOnInit Call");
    this.para = JSON.parse(localStorage.getItem('para'));
    this.token = localStorage.getItem('AppTokenKey');
    this.getProfile();
  }
getProfile() {
  this.db.getProfileData(this.para).subscribe(res => {
    console.log(res);
    this.profiledata = res as any;
    this.empName = this.profiledata.empName;
    this.empCode = this.profiledata.empCode;
    this.degignation = this.profiledata.degignation;
    this.empName = this.profiledata.empName;
    this.profilePic = this.profiledata.profilePic;
    this.db.sendProfile(this.profiledata);
  });
}
}
