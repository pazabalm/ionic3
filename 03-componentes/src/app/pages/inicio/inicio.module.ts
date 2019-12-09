import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InicioPageRoutingModule } from './inicio-routing.module';

import { InicioPage } from './inicio.page';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { ComponentsModule } from 'src/app/components/components.module';


@NgModule({
  declarations: [
    InicioPage
  ],

  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InicioPageRoutingModule,
    ComponentsModule
  ],

})
export class InicioPageModule {}
