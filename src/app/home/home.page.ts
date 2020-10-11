import { Component } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    public actionSheetController: ActionSheetController
  ) {}

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      mode: 'ios',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          icon: 'trash',
          handler: () => {
            console.log('You clicked cancel');
          }
        },
        {
          text: 'Add',
          role: 'destructive',
          icon: 'add',
          handler: () => {
            console.log('You clicked add');
          }
        }
      ]
    });
    await actionSheet.present();
  }
}
