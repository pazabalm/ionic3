import { Component, OnInit } from '@angular/core'; // faltaba el OnInit
import { NoticiasService } from 'src/app/services/noticias.service';
import { Article } from 'src/app/interfaces/interfaces';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})


export class Tab1Page implements OnInit {
  constructor(private noticiasService: NoticiasService) {
  }

  noticias: Article[] = []; // aquí se guardarán las noticias

  ngOnInit() {

    /*
    this.noticiasService.getTopHeadLines()
       .subscribe( resp => {console.log('noticias',resp);  
        })
    */
        this.noticiasService.getTopHeadLines()
        .subscribe( resp => {console.log('noticias',resp);  
        this.noticias.push( ...resp.articles ) // Con los ... se añaden al arreglo articulo por artículo de forma independiente
         })

  }

}

