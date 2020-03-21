import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { NavController, ToastController } from '@ionic/angular';
import { Router, Route } from '@angular/router';

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

  printpath(parent: String, config: Route[]) {
    for (let i = 0; i < config.length; i++) {
      const route = config[i];
      console.log(parent + '/' + route.path);
      if (route.children) {
        const currentPath = route.path ? parent + '/' + route.path : parent;
        this.printpath(currentPath, route.children);
      }
    }
  }

  login() {
    // this.printpath('', this.router.config);
    this.rest.login(this.loginUsername,  this.loginPassword).then((response) => {
      response.json().then((r) => {
        console.log(r)
        if(r && r.meta && r.meta.status) {
          // this.navController.navigateRoot('tabs/fast'); // navigates without slide animation
          this.router.navigate(['/tabs/fast']) // navigates with slide animation, by default
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
