import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular'; // esto se agregó para que lea los componentes básicos de ionic

@NgModule({
  declarations: [
    HeaderComponent
  ],

  exports: [
    HeaderComponent // sirve para exportar el uso de este módulo a otros
  ],

  imports: [
    CommonModule,
    IonicModule // esto se agregó carga todo lo necesario y básico de ionic
  ]
})
export class ComponentsModule { }
