import { Component } from '@angular/core';
import { ModalController, AlertController, Platform, ToastController } from '@ionic/angular';
import { ModelComponent } from './component/model/model.component';
import { Router } from '@angular/router';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { DatabaseService } from './Services/database.service';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NetworkInterface } from '@ionic-native/network-interface/ngx';
import { CoreLogicService } from './Services/core-logic.service';
import { Device } from '@ionic-native/device/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  profiledata: any = [];
  menuList: any = [];
  devideToken: any;
  empName: any;
  latitude: any;
  longitude: any;
  para: any;
  AppDetail: any;
  response: any;
  constructor(private router: Router,
    private alertController: AlertController,
    private platform: Platform,
    private CG: CoreLogicService,
    private device: Device,
    private toastController: ToastController,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private networkInterface: NetworkInterface,
    private geolocation: Geolocation,
    private db: DatabaseService,
    private modalcontroller: ModalController) {
      this.initializeApp();
      setInterval(() => {
        this.getLocation();
      },1000);
    this.menuList = [{ 'icons': 'assets/image/home.png', 'menuName': 'Home', 'pageRoute': '/tabs/tab1' },{ 'icons': 'assets/image/profile.png', 'menuName': 'Profile', 'pageRoute': '/profile' }, { 'icons': 'assets/image/attendance.png', 'menuName': 'My Attendance','pageRoute': '/tabs/tab3' },{ 'icons': 'assets/image/checkin.png', 'menuName': 'Check In', 'pageRoute': '/checkin'},{ 'icons': 'assets/image/sal.png', 'menuName': 'Salary','pageRoute': '/tabs/tab1' }, { 'icons': 'assets/image/helpdesk.png', 'menuName': 'Helpdesk','pageRoute': '/tabs/tab1' }];
    this.devideToken = localStorage.getItem('AppTokenKey');
     this.db.getProfile().subscribe(res => {
       this.profiledata = [];
      this.profiledata.push(res);
      console.log(this.profiledata);
    })
  }

  async presentAlertConfirm() {
    this.alertController.dismiss();
    const alert = await this.alertController.create({
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

            navigator['app'].exitApp();
          },
        },
      ],
    });
    await alert.present();
  }

  async  LogoutConfirm() {
    this.ModelComponentmodal();
}

getLocation() {
  this.geolocation.getCurrentPosition().then((resp) => {
    console.log("geolocation: ",resp);
    this.latitude = resp.coords.latitude;
    this.longitude = resp.coords.longitude;
    localStorage.setItem('Lat',this.latitude);
    localStorage.setItem('Long',this.longitude);
  }).catch((error) => {
    console.log('Error getting location', error);
  });
}
getPortNumber() {
  this.networkInterface.getWiFiIPAddress()
  .then(address => {
    // alert(`IP: ${address.ip}, Subnet: ${address.subnet}`)
    localStorage.setItem('IP', address.ip);
  })
  .catch(error => console.log(`Unable to get IP: ${error}`));

  this.networkInterface.getCarrierIPAddress()
  .then(address => {
    // localStorage.setItem('IP', address.ip);
    // alert(localStorage.getItem('IP'));
    localStorage.setItem('IP', address.ip);
    // alert("getCarrierIPAddress"+address.ip);

  })
  .catch(error => console.log(`Unable to get IP: ${error}`));
}

loginCheck() {
  if(localStorage.getItem('AppTokenKey') != null || localStorage.getItem('AppTokenKey') != undefined ) {
    this.router.navigateByUrl('/tabs/tab1');
  }
  else {
    this.router.navigateByUrl('/login');
  }
}

initializeApp() {
  this.platform.ready().then(() => {
    // this.statusBar.styleDefault();
    setTimeout(() => {
      this.splashScreen.hide();
    }, 2000);
    console.log("Platform ready");
   
    this.getPortNumber();
    this.loginCheck();
    let whiteList = ['com.bigapollospectra.hrms'];
    (<any>window).gpsmockchecker.check(whiteList, (result) => {
        
      console.log("IsMock: ",result);

      if(result.isMock){
          console.log("DANGER!! Mock is in use");
          console.log("Apps that use gps mock: ");
          console.log(result.mocks);
      }
      else {
        console.log("All its ok");
      }
    }, (error) => console.log("Error in IsMock: ",error));
  
  // });
    this.platform.backButton.subscribeWithPriority(10, () => {
      if (this.router.url === '/tabs/tab1' || this.router.url === '/login') {
        this.presentAlertConfirm();
      }
      else if (this.router.url === '/profile') {
       this.router.navigateByUrl('/tabs/tab1');
      }
      else {
        history.back();
      }
    });
    this.platform.backButton.subscribeWithPriority(5, () => {
      if (this.router.url === '/tabs/tab1' || this.router.url === '/login') {
        this.presentAlertConfirm();
      }
      else {
        history.back();
      }
    });
  });
}
successCallback(result) {
  console.log(result); // true - enabled, false - disabled
}

errorCallback(error) {
  console.log(error);
}

async ModelComponentmodal(){
  {
    const modal = await this.modalcontroller.create({
      component: ModelComponent,
      cssClass: 'model',
      animated:true,
      showBackdrop:true,
      swipeToClose:true,
      backdropDismiss:true,
      
    });
    return await modal.present();
  }
}


}
