import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NoticiasPage } from './noticias.page';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: NoticiasPage }])
  ],
  declarations: [NoticiasPage]
})

export class Tab1PageModule {}
