import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  sesionUsuario: string;

  constructor() { }

  ngOnInit(): void {
    const infoUsuario = localStorage.getItem('Usuario');
    const objUsuario = JSON.parse(infoUsuario);

    if(objUsuario == null) {
      this.sesionUsuario = 'Inicar Sesión';
    } else {
      this.sesionUsuario = 'Cerrar Sesión';
    }

  }

  actulizarSesion(estaLogueado: boolean) {
    if (estaLogueado) {
      this.sesionUsuario = 'Cerrar Sesión';
    } else {
      this.sesionUsuario = 'Iniciar Sesión';
    }
  }




}
