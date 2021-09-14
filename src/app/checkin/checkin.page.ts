import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../Services/database.service';
import { ToastController } from '@ionic/angular';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Device } from '@ionic-native/device/ngx';
import { CoreLogicService } from '../Services/core-logic.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-checkin',
  templateUrl: './checkin.page.html',
  styleUrls: ['./checkin.page.scss'],
})
export class CheckinPage implements OnInit {
  para: any;
  latitude: any;
  longitude: any;
  record: any;
  lat: any;
  response:any;
  long: any;
  radiusAllowed: any;
  IP: string;
  AppDetail: any;
  LoginRes: any;
  profiledata: any;
  empName: any;
  errorMessage: any;
  attendanceID: any;
  checkedinOn: any;
  checkedoutOn: any;
  degignation: any;
  department: any;
  showbutton: any;
  empCode: any;
  profilePic: any;
  attendanceListData: any = [];

  constructor(private db: DatabaseService,
    private geolocation: Geolocation,
    private CG: CoreLogicService,
    private device: Device,
    private datePipe: DatePipe,
    private toastController: ToastController) { }

  ngOnInit() {
    // localStorage.setItem('showbutton', this.showbutton)
    localStorage.setItem('errorMessage','');
    this.errorMessage=localStorage.getItem('errorMessage');
    // this.checkedoutOn = localStorage.getItem('checkedoutOn');
    this.checkedinOn = localStorage.getItem('checkedinOn');
    console.log(this.errorMessage);
    this.para = JSON.parse(localStorage.getItem('para'));
    console.log("Device IP: ",localStorage.getItem('IP'));
    this.getLocation();
    this.checkIn();
    this.getProfile();
    this.attendanceList();
  }
  ionViewWillEnter() {
    localStorage.setItem('errorMessage','');
    this.errorMessage=localStorage.getItem('errorMessage');
    setTimeout(() => {
      this.getLocation();
    },1000);
    this.para = JSON.parse(localStorage.getItem('para'));
  }
  getProfile() {
    this.db.getProfileData(this.para).subscribe(res => {
      console.log(res);
      this.profiledata = res as any;
      this.empName = this.profiledata.empName;
      this.degignation = this.profiledata.degignation;
      this.department = this.profiledata.department;
      this.empCode = this.profiledata.empCode;
      this.profilePic = this.profiledata.profilePic;
      
      // this.db.sendProfile(this.profiledata);
    });
  }
  getLocation() {
    this.geolocation.getCurrentPosition().then((resp) => {
      this.latitude = resp.coords.latitude;
      this.longitude = resp.coords.longitude;
      localStorage.setItem('Lat',this.latitude);
      localStorage.setItem('Long',this.longitude);

      console.log("lat: "+ this.latitude+ "==="+ "lang: "+this.longitude);
    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }

  checkIn() {
    this.para = JSON.parse(localStorage.getItem('para'));
    console.log("Device IP: ",localStorage.getItem('IP'));
    this.db.checkIn(this.para).subscribe(async res => {
      console.log("Check In Response: ",res);
      if(res.isSuccess == true) {
       // localStorage.setItem('errorMessage','true');
       // this.errorMessage=localStorage.getItem('errorMessage');
        //console.log('this.errorMessage');
       // console.log(this.errorMessage);
        this.makeAttendanceCheckIN();
      }
      else if(res == "You are not allowed to make attendance with mobile"){
        // this.CG.presentAlert('You are not allowed to make attendance with mobile');
        const toast = await this.toastController.create({
          message: 'You are not allowed to make attendance with mobile',
          duration: 3000
        });
        toast.present();
        //localStorage.setItem('errorMessage','You are not allowed to make attendance with mobile');
       //this.errorMessage=localStorage.getItem('errorMessage');
        //console.log('this.errorMessage');
        //console.log(this.errorMessage);
      }
    },
    async error => {
      console.log(error);
      // this.showbutton = true;
      const toast = await this.toastController.create({
        message: 'Invalid device!!',
        duration: 2000
      });
      toast.present();
    })
  }
  makeAttendanceCheckIN() {
    this.db.ValidateCheckin(this.para).subscribe(async res => {
      console.log("Check In Response: ",res);
      if(res.responseCode == 2005) {
        // this.showbutton=0;
        this.showbutton= false;
        localStorage.setItem('showbutton', this.showbutton);
        this.db.changeStatus(this.showbutton);
        localStorage.setItem('AttendanceID',res.attendanceID);
        const toast = await this.toastController.create({
          message: res.message,
          duration: 3000
        });
        toast.present();
      }
      else if(res.responseCode == 2003) {
        // this.showbutton=1;
        this.showbutton = true;
        localStorage.setItem('showbutton', this.showbutton);
        this.db.changeStatus(this.showbutton);
        const toast = await this.toastController.create({
          message: res.message,
          duration: 3000
        });
        toast.present();
      }
      
      else if(res.responseCode == 2004) {
        // this.showbutton=1;
        this.showbutton= true;
        localStorage.setItem('showbutton', this.showbutton);
        this.db.changeStatus(this.showbutton);
        const toast = await this.toastController.create({
          message: res.message,
          duration: 3000
        });
        toast.present();
      }
      else if(res == "You are not allowed to make attendance with mobile"){
        const toast = await this.toastController.create({
          message: 'You are not allowed to make attendance with mobile',
          duration: 3000
        });
        toast.present();
      }
    },
    async error => {
      console.log(error);
      // this.showbutton = true;
      const toast = await this.toastController.create({
        message: 'Invalid employee code..',
        duration: 2000
      });
      toast.present();
    })
  }

  makeAttendanceCheckOut() {
    this.para = JSON.parse(localStorage.getItem('para'));
    // this.CG.presentLoading('Please Wait...');
    this.db.CheckoutApi(this.para).subscribe(async res => {
      // this.CG.dismissLoading();
      console.log("Check In Response: ",res);
      if(res.responseCode == 2002) {
        this.checkedinOn='';
        localStorage.removeItem('checkedinOn');

        this.makeAttendanceCheckIN();
        this.attendanceList();
        const toast = await this.toastController.create({
          message: 'Checked out successfully !',
          duration: 3000
        });
        toast.present();
      
      }
      else if(res.responseCode == 2000) {
        const toast = await this.toastController.create({
          message: res.message,
          duration: 3000
        });
        toast.present();
      }
      else if(res.responseCode == 2006) {
        const toast = await this.toastController.create({
          message: res.message,
          duration: 3000
        });
        toast.present();
      }
    },
    async error => {
      console.log(error);
      const toast = await this.toastController.create({
        message: 'An error has occurred.',
        duration: 2000
      });
      toast.present();
    })
  }
  CreateAttendance(){
    console.log("lat: "+ this.latitude+ "==="+ "lang: "+this.longitude);
    this.AppDetail = {
      model: this.device.model,
      uuid: this.device.uuid
    }
    console.log(this.AppDetail);
    //alert(this.AppDetail);
   // alert(JSON.stringify(this.AppDetail));
    let para = JSON.parse(localStorage.getItem('para'));
  
    let parameter={
        "EmpCode"  : para.EmpID,
        "DomainName":this.db.PublicDomain,
        "AttenType":"P",
        "AttenValue":"1",
        // "Lat":'19.0760', 
        // "Long":'72.8777',
        "Lat": localStorage.getItem('Lat'), 
        "Long": localStorage.getItem('Long'),  
        "IP": localStorage.getItem('IP'),  
        "DeviceID": this.AppDetail.uuid+","+this.AppDetail.model,
        "Remarks":"N/A"
  };
  console.log("Create Attendance: ", parameter);
  // let temp={
  //   "EmpCode"  : para.EmpID,
  //   "DomainName":this.db.PublicDomain,
  //   "AttenType":"P",
  //   "AttenValue":"1",
  //   "Lat":localStorage.getItem('Lat'), 
  //   "Long":localStorage.getItem('Long'),  
  //   "IP":'192.168.0.128',  
  //   "DeviceID": '452760b876366fce,RMX1825',
  //   "Remarks":"N/A"
  // }
  // let temp={
  //   "EmpCode"  : para.EmpID,
  //   "DomainName":this.db.PublicDomain,
  //   "AttenType":"P",
  //   "AttenValue":"1",
  //   "Lat":'19.0760', 
  //   "Long":'72.8777',  
  //   "IP":'192.168.0.128',  
  //   "DeviceID": '452760b876366fce,RMX1825',
  //   "Remarks":"N/A"
  // }
    // console.log(temp);
    this.CG.presentLoading('Please Wait...');
    this.db.createAttendance(parameter).subscribe(async (data) => {     
      this.CG.dismissLoading();
      console.log(data); 
      this.response=data; 
      if(data.responseCode == 2001) {
        this.attendanceID=data.attendanceID;
        this.checkedinOn=data.checkedinOn;
        localStorage.setItem('checkedinOn',this.checkedinOn);
        this.checkedinOn = localStorage.getItem('checkedinOn');
        localStorage.setItem('AttendanceID',this.attendanceID);
        // this.checkIn();
        this.makeAttendanceCheckIN();
        const toast = await this.toastController.create({
          message: data.message,
          duration: 2000
        });
        toast.present();
       
      }
    },async (err)=>{
      this.CG.dismissLoading();
      console.log(err.error);
      let errordata=err.error.responseCode
      if(errordata == 2007){
        localStorage.setItem('errorMessage',err.error.message);
       this.errorMessage=localStorage.getItem('errorMessage');
        console.log('this.errorMessage');
        // this.CG.presentAlert(err.error.message);
      }
    });
  }

  attendanceList() {
    const date = new Date();
    console.log(date);
   const newDate =this.datePipe.transform(date,"yyyy-MM-dd");
    let selectPara = {
      "empcode":this.para.EmpID,
      "startdate": newDate,
      "enddate": newDate
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
}
