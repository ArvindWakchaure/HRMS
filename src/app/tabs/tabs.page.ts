import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { DatabaseService } from '../Services/database.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  showbutton: any;

  constructor(private router:Router,private alertCtrl:AlertController,
    private db: DatabaseService) {
    this.showbutton = localStorage.getItem('showbutton');
    // this.db.getChangeStatus().subscribe(res => {
    //   console.log("STATUS: ",res);
    //   this.showbutton = res
    // })
  }
  checkIn(){
    this.router.navigate(["/tabs/tab2"]);
  }
  ionViewWillEnter() {
    setInterval(() => {
      this.showbutton = localStorage.getItem('showbutton');
      console.log(this.showbutton);
    }, 2000);
    // this.db.getChangeStatus().subscribe(res => {
    //   console.log("STATUS: ",res);
    //   this.showbutton = res
    // })
    
  }
//   async Attendance(){
//  const alert = await this.alertCtrl.create({
//       header: 'Confirm!',
//       message: 'Do you want to Check In?',
//       buttons: [
//         {
//           text: 'Cancel',
//           handler: () => {
//             console.log('Confirm Cancel');
//           },
//         },
//         {
//           text: 'Okay',
//           handler: () => {
//             // this.router.navigate(['/login'])
//           },
//         },
//       ],
//     });
//     await alert.present();
//   }
}
