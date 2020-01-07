import { Component, OnInit } from '@angular/core'; // faltaba el OnInit
import { NoticiasService } from 'src/app/services/noticias.service';
import { Item } from 'src/app/interfaces/interfaces';
import { ActionSheetController } from '@ionic/angular';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

@Component({
  selector: 'app-noticias',
  templateUrl: 'noticias.page.html',
  styleUrls: ['noticias.page.scss']
})

export class NoticiasPage implements OnInit {
  constructor(
        private noticiasService: NoticiasService, 
        private actionSheetCtrl: ActionSheetController,
        private socialSharing: SocialSharing) {
  }

  noticias: Item[] = []; // aquí se guardarán las noticias

  ngOnInit() {

    /*
    this.noticiasService.getTopHeadLines()
       .subscribe( resp => {console.log('noticias',resp);  
        })
    */
        this.noticiasService.getTopHeadLines()
        .subscribe( resp => {console.log('noticias',resp);  
        this.noticias.push( ...resp.items) // Con los ... se añaden al arreglo articulo por artículo de forma independiente
         })
  }

  async lanzaMenu(){
    //console.log('aqui el evento click del menu compartir');
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Artículos',
      buttons: [ 
        {
        text: 'Compartir',
        icon: 'share',
        handler: () => {
            console.log('Share clicked');
            //this.socialSharing.share()
        }
      }, {
        text: 'Favorito',
        icon: 'star',
        handler: () => {
            console.log('Favorito');
        }
      },{
        text: 'Cancelar',
        icon: 'close',
        role: 'cancel',
        handler: () => {
            console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

  }

