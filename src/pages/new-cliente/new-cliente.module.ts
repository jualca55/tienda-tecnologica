import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewClientePage } from './new-cliente';

@NgModule({
  declarations: [
    NewClientePage,
  ],
  imports: [
    IonicPageModule.forChild(NewClientePage),
  ],
})
export class NewClientePageModule {}
