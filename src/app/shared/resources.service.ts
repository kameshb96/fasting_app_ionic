import { Injectable } from '@angular/core';
import { StorageService } from '../storage.service';
import { RestService } from '../rest.service';
import { Router, Route } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { BackgroundMode } from '@ionic-native/background-mode/ngx';

@Injectable({
  providedIn: 'root'
})
export class ResourcesService {
  private fasts: Array<Fast> = [];
  private completedFasts: Array<CompletedFast> = [];
  private chosenFast: Fast;
  private foodLogs: Array<any>;
  private foodResult: Array<Object>;
  public IS_DEBUG_MODE: boolean = false;
  public currentNutritionPageDate: Date = new Date();
  public isFastInitialized: boolean = false
  public isLogsInitialized: boolean = false
  public isHistoryInitialized: boolean = false
  public darkMode: boolean = false
  public notification: boolean = false
  public isLoggedIn: boolean = false
  constructor(
    private storage: StorageService,
    private rest: RestService,
    private router: Router,
    private toastController: ToastController,
    private backgroundMode: BackgroundMode) {
    this.foodLogs = [];
    // this.storage.getFastList().then((res:any) => {
    //   if(res) {
    //     let arr = JSON.parse(res);
    //     for(let i = 0; i < arr.length; i++)
    //       this.fasts.push(new Fast(arr[i].title, new Date(arr[i].duration), arr[i].description, arr[i].isPredefined))
    //   }
    // });
    console.log(this.backgroundMode.isEnabled())
    this.backgroundMode.enable(); 
    this.backgroundMode.on("enabled").subscribe(()=>{
      console.log("BACKGROUND MODE ACTIVATED")
    });
    console.log(this.backgroundMode.isEnabled())
    this.getSettings()
    if (this.IS_DEBUG_MODE) console.log(this.fasts)
    // this.fasts.push(new Fast("A",new Date("2020-03-01T01:14:29.909-05:00"),"1"));
    // this.storage.updateFasts(this.fasts);
    //this.completedFasts = this.storage.getCompletedFast();
    // this.storage.getFastHistory().then((res: any) => {
    //   if (this.IS_DEBUG_MODE) console.log(res);
    //   let history = JSON.parse(res);
    //   if (history) {
    //     for (let i = 0; i < history.length; i++) {
    //       let fast = new Fast(history[i].fast.title, history[i].fast.duration, history[i].fast.description, history[i].fast.isPredefined);
    //       let cf = new CompletedFast(fast, history[i].fastStartTime, history[i].eatStartTime, history[i].eatEndTime);
    //       this.completedFasts.push(cf);
    //     }
    //   }
    // });
    // this.foodLogs = this.storage.getFoodLogs();
    
  }

  async getSettings(fromLogin = false) {
    let result = {}
    if(!fromLogin && this.router.url == '/login')
      return
    await this.rest.getSettings().then((val) => {
      if (val.status == 403) {
        this.presentToast("Invalid sessionToken")
      }
      else if (val.status != 200) {
        this.presentToast("Something went wrong")
      }
      val.json().then((res) => {
        console.log("Resources constructor")  
        result = res 
        this.darkMode = res.data.dark
        this.notification = res.data.notification 
        this.checkDarkTheme(this.darkMode)      
      })
    })
    return result
  }

  setTimerInfo(chosenFast, fastStartTime) {
    var cf;   
    console.log(chosenFast  )
    if(!chosenFast) {
      cf = JSON.parse(JSON.stringify(chosenFast))
      cf.duration = new Date(cf.duration).toISOString()
    }
    else {
      cf = chosenFast 
    }
    console.log(cf.duration)
    this.rest.setTimerInfo({
      chosenFast: cf  ,
      fastStartTime: fastStartTime
    }).then((val) => {
      if (val.status == 400) {
        this.presentToast("Insufficient info")
      }
      else if (val.status == 403) {
        this.presentToast("Invalid sessionToken")
      }
      else if (val.status != 200) {
        this.presentToast("Something went wrong")
      }
    })
  }

  async getTimerInfo() {
    let timerInfo = {}
    await this.rest.getTimerInfo().then(async (val) => {
      await val.json().then((res) => {
        timerInfo = res.data
      })
    })
    return timerInfo
  }

  reset() {
    this.darkMode = false
    this.notification = false 
  }

  async logout() {
    await this.rest.logout().then(async (val) => {
      if (val.status == 403) {
        this.presentToast("Invalid sessionToken")
      }
      else if (val.status != 200) {
        this.presentToast("Something went wrong")
      }
      else {
        this.isLoggedIn = false 
        this.reset()
        console.log("message")
        await this.storage.setToken("")
        document.body.classList.toggle('dark', false);
        // this.reset()
        // console.log("message")
       this.router.navigate(['/login'])     
      }
    })
  }

  async getPassword() {
    let password = ""
    await this.rest.getPassword().then(async (val) => {
      if (val.status == 403) {
        this.presentToast("Invalid sessionToken")
      }
      else if (val.status != 200) {
        this.presentToast("Something went wrong")
      }
      await val.json().then((res) => {
        if(res.meta.status)
          password =  res.data
      })
    })
    console.log(password)
    return password
  }

  async changePassword(newPassword) {
    await this.rest.changePassword(newPassword).then((val) => {
      if (val.status == 403) {
        this.presentToast("Invalid sessionToken")
      }
      else if(val.status == 400) {
        this.presentToast("Please enter a valid new Password")
      }
      else if (val.status != 200) {
        this.presentToast("Something went wrong")
      }
    })
  }

  async updateSettings(settings) {
    await this.rest.updateSettings(settings).then((val) => {
      if (val.status == 403) {
        this.presentToast("Invalid sessionToken")
      } 
      else if(val.status == 400) {
        this.presentToast("Invalid settings info")
      }
      else if (val.status != 200) {
        this.presentToast("Something went wrong")
      }
    })
  }

  setChosenFast(fast: Fast) {
    console.log(fast)
    this.chosenFast = fast;
  }

  getChosenFast() {
    return this.chosenFast;
  }

  async getFasts() {
    if (this.isFastInitialized) {
      return this.fasts;
    }
    this.fasts.push(new Fast("16:8 Fast", new Date("2020-04-21T23:00:48.447Z"), "16 Hour Fast followed by an 8 hour eating window", true));
    this.fasts.push(new Fast("12:12 Fast", new Date("2020-04-21T19:00:53.820Z"), "12 Hour Fast followed by a 12 hour eating window", true));
    // for demo usage
    this.fasts.push(new Fast("1.30 hrs", new Date("2020-04-21T08:30:04.855Z"), "One and an Half hour fast...", true));
    await this.rest.getFasts().then((res: any) => {
      console.log(res)
      res.json().then((val) => {
        console.log(val)
        if (res.status != 200) {
          this.presentToast("Something went wrong")
          this.router.navigate(['/login'])
          return
        }
        if (val.meta.status) {
          let arr = val.data.fasts
          for (let i = 0; i < arr.length; i++) {
            this.fasts.push(new Fast(arr[i].title, new Date(arr[i].duration), arr[i].description, arr[i].isPredefined))
          }
          this.isFastInitialized = true
        }
      })
    })
    return this.fasts
  }

  async getCompletedFasts(shouldRefresh = false) {
    if (this.isHistoryInitialized && !shouldRefresh)
      return this.completedFasts;
    await this.rest.getCompletedFasts().then(async (res: any) => {
      this.isHistoryInitialized = true
      if (res.status != 200) {
        this.presentToast("Something went wrong")
        return
      }
      this.completedFasts = []
      await res.json().then((val) => {
        console.log(val)
        let history = val.data
        if (history) {
          for (let i = 0; i < history.length; i++) {
            let fast = new Fast(history[i].fast.title, history[i].fast.duration, history[i].fast.description, history[i].fast.isPredefined);
            let cf = new CompletedFast(history[i]._id, fast, history[i].fastStartTime, history[i].eatStartTime, history[i].eatEndTime);
            this.completedFasts.push(cf);
          }
        }
      })
    })
    // this.storage.getFastHistory().then((res: any) => {
    //   if (this.IS_DEBUG_MODE) console.log(res);
    //   let history = JSON.parse(res);
    //   if (history) {
    //     for (let i = 0; i < history.length; i++) {
    //       let fast = new Fast(history[i].fast.title, history[i].fast.duration, history[i].fast.description, history[i].fast.isPredefined);
    //       let cf = new CompletedFast(fast, history[i].fastStartTime, history[i].eatStartTime, history[i].eatEndTime);
    //       this.completedFasts.push(cf);
    //     }
    //   }
    // });
    console.log(this.completedFasts)
    return this.completedFasts
  }

  async getFoodLogs(shouldRefresh = false) {
    //  return this.foodLogs;
    // return this.storage.getFoodLogs();
    if (this.isLogsInitialized && !shouldRefresh) {
      return this.foodLogs
    }
    await this.rest.getLogs().then(async (res: any) => {
      console.log(res)
      await res.json().then((val) => {
        console.log(val)
        if (res.status != 200) {
          this.presentToast("Something went wrong")
          this.router.navigate(['/login'])
          return
        }
        if (val.meta.status) {
          this.foodLogs = val.data.logs
          this.isLogsInitialized = true
        }
      })
    })
    return this.foodLogs
  }

  setFoodResult(result) {
    this.foodResult = result
  }

  getFoodResult() {
    return this.foodResult
  }

  async deleteCompletedFast(id, fastStartTime = null) {
    console.log(id)
    await this.rest.deleteCompletedFast(id).then((val) => {
      if (val.status == 400) {
        this.presentToast("Insufficient info")
      }
      else if (val.status == 403) {
        this.presentToast("Invalid sessionToken")
      }
      else if (val.status != 200) {
        this.presentToast("Something went wrong")
      }
    })
    // for (let i = 0; i < this.completedFasts.length; i++) {
    //   if (!(fastStartTime instanceof Date))
    //     fastStartTime = new Date(fastStartTime)
    //   let d = this.completedFasts[i].getDetails().fastStartTime
    //   if (!(d instanceof Date))
    //     d = new Date(d)
    //   if (fastStartTime.getTime() == d.getTime()) {
    //     this.completedFasts.splice(i, 1);
    //     this.storage.deleteCompletedFast(i);
    //     return;
    //   }
    // }
  }

  async deleteLog(id) {
    // this.foodLogs = this.storage.getFoodLogs();
    await this.rest.deleteLog(id).then((val) => {
      if (val.status == 400) {
        this.presentToast("Insufficient info")
      }
      else if (val.status == 403) {
        this.presentToast("Invalid sessionToken")
      }
      else if (val.status != 200) {
        this.presentToast("Something went wrong")
      }
    })
    // let d = new Date(date);
    // for(let i = 0; i < this.foodLogs.length; i++) {
    //   let d2 = new Date(this.foodLogs[i].date);
    //   if (this.IS_DEBUG_MODE) console.log(d, d2);
    //   if (d.getTime() == d2.getTime()) {
    //     this.foodLogs.splice(i, 1);
    //     this.storage.updateLogs(this.foodLogs);
    //     return;
    //   }
    // }
  }

  addFast(fastTime, fastTitle, description, isPre) {
    if (this.IS_DEBUG_MODE) console.log(this.fasts);
    let fast = new Fast(fastTitle, fastTime, description, isPre);
    if (this.IS_DEBUG_MODE) console.log(fast);
    // this.storage.addFast(fast);
    this.rest.addFast(fast).then((res) => {
      if (res.status == 200) {
        res.json().then((json) => {
          if (json.meta.status) {
            this.fasts.push(fast)
          }
        })
      }
    })
  }

  deleteFast(index) {
    if (this.IS_DEBUG_MODE) console.log(this.fasts);
    if (this.IS_DEBUG_MODE) console.log(index);
    let cf = this.fasts[index]
    this.fasts.splice(index, 1);
    if (this.IS_DEBUG_MODE) console.log(this.fasts);
    // this.storage.deleteFast(index);
    this.rest.deleteFast(cf.getTitle()).then((val) => {
      if (val.status == 400) {
        this.presentToast("Insufficient info")
      }
      else if (val.status == 403) {
        this.presentToast("Invalid sessionToken")
      }
      else if (val.status != 200) {
        this.presentToast("Something went wrong")
      }
    })
  }

  async addCompletedFast(obj: CompletedFast) {
    // this.storage.addCompletedFast(obj);
    await this.rest.addCompletedFast(obj).then((val) => {
      if (val.status == 400) {
        this.presentToast("Insufficient info")
      }
      else if (val.status == 403) {
        this.presentToast("Invalid sessionToken")
      }
      else if (val.status != 200) {
        this.presentToast("Something went wrong")
      }
      this.completedFasts.push(obj);
    })
    //this.completedFasts = this.storage.getCompletedFast();
  }

  addFoodLog(obj) {
    if (this.IS_DEBUG_MODE) console.log(obj);
    //this.storage.addLogItem(obj);
    //this.foodLogs.push(obj);
    this.rest.addLog(obj).then((val) => {
      if (val.status == 400) {
        this.presentToast("Insufficient info")
      }
      else if (val.status == 403) {
        this.presentToast("Invalid sessionToken")
      }
      else if (val.status != 200) {
        this.presentToast("Something went wrong")
      }
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

  toggle: any;
  prefersDark: any;
  isEventAdded: boolean = false
  isListenerAdded: boolean = false
  checkDarkTheme(applyDark = false) {
    // Query for the toggle that is used to change between themes
    this.toggle = document.querySelector('#themeToggle');
    console.log(this.toggle)
    // Listen for the toggle check/uncheck to toggle the dark class on the <body>
    if(this.toggle && !this.isEventAdded) {
      this.isEventAdded = true
      this.toggle.addEventListener('ionChange', (ev) => {
        console.log(ev)
        document.body.classList.toggle('dark', ev.detail.checked);
      });
    }
    if(applyDark) {
      document.body.classList.toggle('dark', true);
    }
    // this.prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    // console.log(this.prefersDark)
    // // Listen for changes to the prefers-color-scheme media query
    // if(this.prefersDark && !this.isListenerAdded) {
    //   this.isListenerAdded = true
    //   this.prefersDark.addListener((e) => this.checkToggle(e.matches));
    //   if(this.toggle)
    //     this.checkToggle(this.prefersDark.matches);
    // }
  }

  // Called by the media query to check/uncheck the toggle
  checkToggle(shouldCheck) {
    this.toggle.checked = shouldCheck;
  }
}

export class Fast {
  private title: string;
  private duration: Date;
  private description: string;
  private isPredefined: Boolean;

  constructor(title, duration, description, isPre) {
    this.title = title;
    this.duration = duration;
    this.description = description;
    this.isPredefined = isPre;
  }

  getDescription() {
    return this.description;
  }

  getDuration() {
    return this.duration;
  }

  getTitle() {
    return this.title;
  }

  getIsPreDefined() {
    return this.isPredefined;
  }
}

export class CompletedFast {
  public _id: any;
  private fast: Fast;
  private fastStartTime: any;
  private eatStartTime: any;
  private eatEndTime: any;

  constructor(_id, fast, fastStartTime, eatStartTime, eatEndTime) {
    this._id = _id
    this.fast = fast;
    this.fastStartTime = fastStartTime;
    this.eatStartTime = eatStartTime;
    this.eatEndTime = eatEndTime;
  }

  public getDetails() {
    return {
      _id: this._id,
      fast: this.fast,
      fastStartTime: this.fastStartTime,
      eatStartTime: this.eatStartTime,
      eatEndTime: this.eatEndTime
    };
  }
}

