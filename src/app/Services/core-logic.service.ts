import { AlertController, LoadingController } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class CoreLogicService {
  isLoading = false;
  public CurrentVestion : number;
  constructor(private alertController: AlertController, private loadingController: LoadingController, private router:Router) { 
    this.CurrentVestion = 6;
  }

  async presentAlert(msg_Message) {
    
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: '',
      subHeader: '',
      message: msg_Message,
      buttons: ['OK']
    });

    await alert.present();
  }

  Logout() {
    /*   ALL Existing Session / Cookies Name
      1. login_mobile --- (Login Page)
      2. login_studcode -- (Login Page)
      3. AppTokenKey,
      4. enroll_id,
      5. examduration
    */

    // localStorage.clear(); // Clear All Exitsting Session
    localStorage.removeItem('AppTokenKey');
    localStorage.removeItem('enroll_id');
    localStorage.removeItem('examduration');
    localStorage.removeItem('errorMessage');

    // localStorage.removeItem('checkedoutOn');

    // localStorage.removeItem('checkedinOn');

    this.router.navigate(['/login']);
  }
  
  async presentAlertConfirm(Message : string) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirm!',
      message: Message,
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Yes', blah)
            
          }
        }, {
          text: 'Yes',
          handler: (res) => {
            console.log('Yes', res)  
          }
        }
      ]
    });

    await alert.present();
  }

  async presentLoading(msg_Message) {
    // const loading = await this.loadingController.create({
    //   cssClass: 'my-custom-class',
    //   message: msg_Message,
    //   duration: 10000
    // });
    // await loading.present();

    this.isLoading = true;
    return await this.loadingController.create({
      duration: 10000,
        message: msg_Message,
    }).then(a => {
      a.present().then(() => {
        console.log('presented');
        if (!this.isLoading) {
          a.dismiss().then(() => console.log('abort presenting'));
        }
      });
    });
    
  }
  async dismissLoading() {
    this.isLoading = false;
    const loading = await this.loadingController.dismiss().then(() => console.log('dismissed'));
    // await this.loadingController.dismiss();
  }
   Error(err){
    this.dismissLoading();
    if (err.status === 401) {
      localStorage.removeItem('AppTokenKey');
      localStorage.removeItem('enroll_id');
      localStorage.removeItem('examduration');
  
      this.router.navigate(['/login']);

    }
    // else{
    //   this.presentAlert('Please retry');
    //   console.log(JSON.stringify(err));
    // }
  }

  
}
