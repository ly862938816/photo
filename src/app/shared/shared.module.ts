import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';

import { ImageShellComponent } from './image-shell/image-shell.component';
import { TextShellComponent } from './text-shell/text-shell.component';



@NgModule({
  declarations: [
    TextShellComponent,
    ImageShellComponent
  ],
  imports: [
    CommonModule,
    IonicModule.forRoot()
  ],
  exports: [
    TextShellComponent,
    ImageShellComponent
  ],
  entryComponents: [],
})
export class SharedModule { }
