import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CoreLogicService } from '../Services/core-logic.service';
import { DatabaseService } from '../Services/database.service';
import { ToastController, AlertController } from '@ionic/angular';
import { Device } from '@ionic-native/device/ngx';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  EmpID: any;
  Password: any;
  AppDetail:any;
  // AppDetail = {
  //   model: '',
  //   uuid: ''
  // }
  DeviceDetail: any;
  LoginRes: any;
  showbutton: any;
  para: any;
  constructor(private db: DatabaseService,
    private device: Device,
    private alertController: AlertController,
    private toastController: ToastController, private router:Router,private CG: CoreLogicService) { }

  ngOnInit() {
  }
  GetDevice() {
    this.AppDetail = {
      model: this.device.model,
      uuid: this.device.uuid
    }
    console.log(this.AppDetail);
    // alert(this.AppDetail);
    // alert(JSON.stringify(this.AppDetail));


    localStorage.setItem('AppDetail',this.AppDetail);
  //api/Authentication/Login
  // alert(JSON.stringify(localStorage.getItem('AppDetail')));


  // checkLogin() {

    if (this.EmpID === '' || this.EmpID == undefined) {
      this.CG.presentAlert('Please Enter Employee ID');
      return false;
    }
    if (this.Password === '' || this.Password == undefined) {
      this.CG.presentAlert('Please Enter Password');
      return false;
    }
    let parameter={
      "EmpID": this.EmpID,
      "Password": this.Password,
      "DomainName":this.db.PublicDomain,
      // "DeviceID": this.AppDetail.uuid+","+this.AppDetail.model
      "DeviceID": "7b0c60b664653b38,CPH2015"
  }
  console.log(parameter);
  // alert(JSON.stringify(parameter));
  localStorage.setItem('para', JSON.stringify(parameter));
    this.CG.presentLoading('Please Wait...');
    this.db.login(parameter).subscribe(async (data) => {
      this.CG.dismissLoading();
     
      this.LoginRes = data as any;
      console.log(this.LoginRes);
     localStorage.setItem('AppTokenKey', data[0].token);
    //  localStorage.setItem('AppTokenKey', '5899541F117F44FDAE0B9D6CF2D154EE-1002');
     
      console.log(localStorage.getItem('AppTokenKey'));
      if( this.LoginRes[0].status == "Approved") {
        const toast = await this.toastController.create({
          message: 'Login Successfully',
          duration: 2000
        });
        toast.present();
        // this.checkIn();
        this.makeAttendanceCheckIN();
        this.router.navigate(["/tabs/tab1"]);
      }
      else if( this.LoginRes[0].status == "Pending") {
        const toast = await this.toastController.create({
          message: `${this.LoginRes[0].message}`,
          duration: 3000
        });
        toast.present();
        // this.checkIn();
        this.router.navigate(["/tabs/tab1"]);
      }
      else {
        const toast = await this.toastController.create({
          message: 'Your settings have been saved.',
          duration: 2000
        });
        toast.present();
      }

    },async (err)=>{
      this.CG.Error(err);
      const toast = await this.toastController.create({
        message: 'Invalid employee code or password.',
        duration: 2000
      });
      toast.present();
    });
  }
  
  async resetPassword() {
    const alert = await this.alertController.create({
      header: 'Reset Password',
      backdropDismiss: false,
      inputs: [
        {
          name: 'EmpID',
          type: 'text',
          placeholder: 'Enter Employee ID'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');

          }
        }, {
          text: 'Ok',
          handler: (name) => {
            console.log('Confirm Ok', name);
            
            this.resetPass(name);

          }
        }
      ]
    });
    await alert.present();
  }

  resetPass(name) {
    console.log(name.EmpID);
    if(!name.EmpID) {
      this.CG.presentAlert('Please enter employee Id');
      return false;
    }
    else {
      let para = {
        "empcode": name.EmpID
      }
      this.db.resetPassword(para).subscribe(async res => {
        console.log(res);
        if(res.code == 200) {
          const toast = await this.toastController.create({
            message: res.message,
            duration: 2000
          });
          toast.present();
        }
        else {
          const toast = await this.toastController.create({
            message: 'Invalid employee ID',
            duration: 2000
          });
          toast.present();
        }
      }, 
      async error => {
        const toast = await this.toastController.create({
          message: 'Invalid employee ID',
          duration: 2000
        });
        toast.present();
      })
    }
    
  }

  makeAttendanceCheckIN() {
    this.para = JSON.parse(localStorage.getItem('para'));
   this.db.ValidateCheckin(this.para).subscribe(async res => {
     console.log("Check In Response: ",res);
     if(res.responseCode == 2005) {
       this.showbutton= false;
       localStorage.setItem('showbutton', this.showbutton)
       this.db.changeStatus(this.showbutton);
     }
     else if(res.responseCode == 2003) {
       this.showbutton=true;
       localStorage.setItem('showbutton', this.showbutton)
       this.db.changeStatus(this.showbutton);
     }
     
     else if(res.responseCode == 2004) {
       this.showbutton= true;
       localStorage.setItem('showbutton', this.showbutton)
       this.db.changeStatus(this.showbutton);
     }
     else if(res == "You are not allowed to make attendance with mobile"){
     
     }
   },
   async error => {
     console.log(error);
     
   })
 }
}