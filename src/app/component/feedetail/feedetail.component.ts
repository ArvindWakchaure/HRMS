import { stringify } from '@angular/compiler/src/util';
import { Component, Input, NgModule, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController, NavParams } from '@ionic/angular';
import { CoreLogicService } from '../../Services/core-logic.service';
import { DatabaseService } from '../../Services/database.service';
import { Demaindetail } from '../../demaindetail';
import { CommonModule} from '@angular/common';
import { BrowserModule, } from '@angular/platform-browser';
import { FeedetailmoduleModule} from '../feedetail/feedetailmodule/feedetailmodule.module';

@NgModule({
  imports: [
    FeedetailmoduleModule
  ]
})

@Component({
  selector: 'app-feedetail',
  templateUrl: './feedetail.component.html',
  styleUrls: ['./feedetail.component.scss'],
})
export class FeedetailComponent implements OnInit {
  demandId: any;
  Demanddetail: any =[];
  @Input() demandetail;
  demandetailsss:any;
  
  TotalPayble:number=0;
  demandlistArray:any=[];

  isChecked: boolean = false;

  constructor(
    private modalcontroller: ModalController,
    private route: ActivatedRoute,
    private navParams: NavParams,
    private router: Router,
    private db: DatabaseService,
    private CG: CoreLogicService,)
     {
      //  this.GetDemandDetail();
    // this.route.queryParams.subscribe(param => {
    //   if (this.router.getCurrentNavigation().extras.state) {

    //     this.demandId = this.router.getCurrentNavigation().extras.state.demandId;      

    //   }
    //   else {
    //     this.router.navigate(['/']);
    //   }
    // })


  }
 
  dismiss() {
    this.modalcontroller.dismiss();
  }

  // GetDemandDetail(demandetail) {
   
  // }

  ngOnInit() {   
    var param = {
      DemandID: this.demandetail
    };
    // alert(JSON.stringify(param));
    this.db.GetDemandDetail(param).subscribe((data:any) => {
      this.Demanddetail = data;
    
      console.log('demantdetails',this.Demanddetail);
     
      // this.demandetailsss=JSON.stringify(this.Demanddetail)
      // console.log('DemandDetails', this.Demanddetail);
      // console.log('DemandDetaillll', this.demandetailsss);
      
      for(let i = 0; i< this.Demanddetail.length; i++){
         
        const dueAmount = (Number(this.Demanddetail[i].fee)-(Number(this.Demanddetail[i].discountAmt)+Number(this.Demanddetail[i].paidAmt)) );
        // console.log(data.fee);
        if( dueAmount > 0){
          this.demandlistArray.push(this.Demanddetail[i]);
          this.TotalPayble=this.TotalPayble+ dueAmount;
          // console.log(dueAmount);
          // console.log(this.TotalPayble);
         }
      }
    }, (err) => {
      this.CG.Error(err);
    });
   
  }

}
