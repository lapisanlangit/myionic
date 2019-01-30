import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { KppnService } from './kppn.service';
import { DetailsPage } from '../details/details';
import { DetailkppnPage } from '../detailkppn/detailkppn';



@Component({
  selector: 'page-kppn',
  templateUrl: 'kppn.html'
})
export class KppnPage implements OnInit {

  listKPPN: any[];

  constructor(public navCtrl: NavController, private kppnservice: KppnService) {

  }

  ngOnInit() {
    // alert(111)
    this.kppnservice.getKPPN()
      .subscribe(
        data => {
          this.listKPPN = data;
          // console.log(this.listKPPN)
        },
        error => {
          alert("error get data KPPN");
          return;
        }
      );
  }
  viewKPPN(data){
    // console.log(data)
    this.navCtrl.push(DetailkppnPage,{item:data})
  }
}

