import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { NavController, ToastController } from '@ionic/angular';
import { Router, Route, ActivatedRoute } from '@angular/router';
import { ResourcesService } from '../shared/resources.service';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  private loginUsername: string
  private loginPassword: string
  constructor(
    private rest: RestService,
    private navController: NavController,
    private router: Router,
    private toastController:  ToastController,
    private resources: ResourcesService,
    private storage: StorageService,
    private route: ActivatedRoute,
  ) {
    this.loginUsername = "asd@aol.com"
    this.loginPassword = "test1235"
    // route.params.subscribe(val => {
    //   console.log(val, "txextxc")
    // });
   }

  ngOnInit() {
  }

  printpath(parent: String, config: Route[]) {
    for (let i = 0; i < config.length; i++) {
      const route = config[i];
      if (this.resources.IS_DEBUG_MODE) console.log(parent + '/' + route.path);
      if (route.children) {
        const currentPath = route.path ? parent + '/' + route.path : parent;
        this.printpath(currentPath, route.children);
      }
    }
  }

  register() {
    this.router.navigate(['/register'])
  }

  login() {
    if(!this.loginUsername) {
      this.presentToast("Please provide a valid username")
      return
    }
    if(!this.loginPassword) { 
      this.presentToast("Please provide a password")
      return
    }
    if(!this.validateEmail(this.loginUsername)) {
      this.presentToast("Please provide a valid email id as a username")
      return
    }
    // this.printpath('', this.router.config);
    this.rest.login(this.loginUsername,  this.loginPassword).then((response) => {
      response.json().then((r) => {
        if (this.resources.IS_DEBUG_MODE) console.log(r)
        console.log(r)
        if(r && r.meta && r.meta.status) {
          this.storage.setToken(r.data.sessionToken).then(o => {
            console.log(o);
            this.resources.getSettings(true)
            this.navController.navigateForward('/tabs/fast'); // navigates without slide animation
            // this.router.navigate(['/tabs'], { skipLocationChange: false });
          });
          // this.storage.asyncLocalStorage.setItem('sessionToken', r.data.sessionToken).then((out)=> {
          //   console.log(out);
          //   setTimeout(() => {
          //     this.router.navigate(['/tabs/fast'])
          //   }, 300);
          // })
          // this.navController.navigateRoot('tabs/fast'); // navigates without slide animation
         // this.router.navigate(['/tabs/fast']); // navigates with slide animation, by default
        }
        else {
          this.presentToast("Invalid Login Credentials")
        }
      }, (e) => {
        if (this.resources.IS_DEBUG_MODE) console.log(e)
        console.log(e)
      })
    }).catch((err) => {
      if (this.resources.IS_DEBUG_MODE) console.log(err)
      console.log(err)
    })
    // this.router.navigate(['tabs/fast'])
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

  validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

}
