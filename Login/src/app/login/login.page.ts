import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
// import { Routes, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }

  acceso(){
      this.navCtrl.navigateForward('/home');
  }
  
}
