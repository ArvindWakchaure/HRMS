import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { from } from 'rxjs';
import { ModelComponent } from '../model/model.component';

@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html',
  styleUrls: ['./userdetail.component.scss'],
})
export class UserdetailComponent implements OnInit {

  constructor(public router:Router,private modalcontroller: ModalController,) { }

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
 
  logout(){
    // this.router.navigate(['/userdetail'])
    // this.ionModalDidDismiss();
    this.dismiss();
   this.ModelComponentmodal();
 
  }
  profile(){
    this.router.navigate(['/profile']);
    this.dismiss();
  }

  // ionModalDidDismiss(){
  //   this.dismiss();
  // }

  // ionModalWillDismiss(){
  //   this.dismiss();
  // }
  // ionModalWillPresent(){
  //   this.dismiss();
  // }
  // ionModalDidPresent(){
  //   this.dismiss();
  // }

  dismiss(){
    this.modalcontroller.dismiss();
}
  ngOnInit() {}

}
