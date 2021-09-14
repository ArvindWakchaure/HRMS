import { Component, OnInit,Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CoreLogicService } from '../../Services/core-logic.service';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.scss'],
})
export class ModelComponent implements OnInit {

 

  constructor(private modalcontroller: ModalController,public CG:CoreLogicService) { }
  Logout(){
    this.CG.Logout();
    this.dismiss();
  }

  dismissmodel(){
    this.dismiss();
  }
  ngOnInit() {}
  dismiss(){
    this.modalcontroller.dismiss();
}
}
