import { Component, OnInit } from '@angular/core';
import { ResourcesService } from '../shared/resources.service';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
  
})
export class HistoryPage implements OnInit {
  private completedFasts: Array<any>;
  private shouldRefresh: boolean = false;
  constructor(private resources: ResourcesService, 
              private actionSheetController: ActionSheetController) { }

  ngOnInit() {}

  refreshPage() {
    this.resources.getCompletedFasts(this.shouldRefresh).then((res) => {
      this.shouldRefresh = false
      this.completedFasts = res
      for(let i = 0; i < this.completedFasts.length; i++) {
        this.completedFasts[i].formattedStartTime = this.timeUtil(this.completedFasts[i].fastStartTime)
      }
    })
  }

  ionViewWillEnter()  {
    this.shouldRefresh =  true
    this.refreshPage()
    // setTimeout(() => {
    //   let history = this.resources.getCompletedFasts();
    //   history.forEach(e => {
    //     this.completedFasts.push({
    //       title: e.getDetails().fast.getTitle();
    //     })
    //   })
    //   this.completedFasts = this.resources.getCompletedFasts();
    // }, 500);
  }

  async deleteHistory(id) {
    await this.resources.deleteCompletedFast(id).then(() => {
      this.shouldRefresh = true
      this.refreshPage()
    })
  }
  // Name of fast
  // Date dd/mm/yyyy hh:mm
  async openActionSheet(event, date, id) {
    const actionSheet = await this.actionSheetController.create({
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        handler: async () => {
          await this.deleteHistory(id);
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          if (this.resources.IS_DEBUG_MODE) console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }
  
  timeUtil(startTime: Date) {
    if(!(startTime instanceof Date)) startTime = new Date(startTime)
    let date = startTime.toLocaleDateString()
    let time = startTime.toLocaleTimeString()
    time = time.substring(0,time.length-6) + " " + time.substr(time.length-2, 2)
    return date + " " + time
  }

}
