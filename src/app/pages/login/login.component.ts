import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../classes/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  title = 'Iniciar Sesión';
  usuarioValidado: Usuario;

  constructor(
    private usuarioService: UsuarioService
  ) { }

  ngOnInit(): void {
  }

  validarLogin(usuario, contrasenna): any {
    console.log("Validando login");
    this.usuarioService.getLoginUsuario(usuario, contrasenna)
    // .pipe(first())
    .subscribe(
        data => {
          this.usuarioValidado = data;
        });
    console.log(this.usuarioValidado);
    return this.usuarioValidado;
    // return this.usuarioService.getLoginUsuario(usuario, contrasenna);
  }


  // onSubmit() {
  //   console.log("Presionaste el boton");
  // }

}
