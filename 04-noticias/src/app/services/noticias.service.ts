import { Injectable } from '@angular/core';
//import { HttpClient } from 'selenium-webdriver/http';
import { HttpClient } from '@angular/common/http' // agregué esta línea y comenté la anterior pq no encontraba el método get
import { RespuestaTopHeadlines } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor( private http: HttpClient) {  // Agrego al constructor el servicio
   }
   
   getTopHeadLines () {
      return this.http.get<RespuestaTopHeadlines>(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=b82d26a8aab14fb78901efd658d5e846`)
   }

  }
