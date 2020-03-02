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

  constructor(private resources: ResourcesService, 
              private actionSheetController: ActionSheetController) { }

  ngOnInit() {}

  ionViewWillEnter()  {
    this.completedFasts = this.resources.getCompletedFasts();
    for(let i = 0; i < this.completedFasts.length; i++) {
      this.completedFasts[i].formattedStartTime = this.timeUtil(this.completedFasts[i].fastStartTime)
    }
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

  deleteHistory(cf) {
    this.resources.deleteCompletedFast(cf);
  }
  // Name of fast
  // Date dd/mm/yyyy hh:mm
  async openActionSheet(event, date) {
    const actionSheet = await this.actionSheetController.create({
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          this.deleteHistory(date);
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
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
