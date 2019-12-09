import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header', //nombre del componente
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  // se agrega esta línea para recibir esta variable y utilizar en el header.component.html
  @Input() titulo: string; 
  constructor() { }

  ngOnInit() {}

}
