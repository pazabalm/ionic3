import { Injectable } from '@angular/core';
//import { HttpClient } from 'selenium-webdriver/http';
import { HttpClient } from '@angular/common/http' // agregué esta línea y comenté la anterior pq no encontraba el método get
import { RootObject } from '../interfaces/interfaces';


@Injectable({
  providedIn: 'root'
})

export class NoticiasService {

  constructor( private http: HttpClient) {  // Agrego al constructor el servicio
   }
   
   getTopHeadLines () {
      return this.http.get<RootObject>(`https://neurus.cl/wp/feed/json`)
   }


  }
