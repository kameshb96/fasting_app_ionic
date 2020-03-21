import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { NavController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  private loginUsername: string
  private loginPassword: string
  constructor(private rest: RestService,
              private navController: NavController,
              private router: Router,
              private toastController:  ToastController) {
    this.loginUsername = "asd@aol.com"
    this.loginPassword = "test1235"
   }

  ngOnInit() {
  }

  login() {
    this.rest.login(this.loginUsername,  this.loginPassword).then((response) => {
      response.json().then((r) => {
        console.log(r)
        if(r && r.meta && r.meta.status) {
          this.navController.navigateRoot('app/tabs/fast');
        }
        else {
          this.presentToast("Invalid Login Credentials")
        }
      }, (e) => {
        console.log(e)
      })
    }).catch((err) => {
      console.log(err)
    })
  }

  async presentToast(toastMessage) {
    const toast = await this.toastController.create({
      color: 'dark',
      duration: 2000,
      message: toastMessage,
      showCloseButton: true
    });

    await toast.present();
  }

}
