import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../classes/usuario';
//import { HeaderComponent } from '../../shared/header/header.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  form: FormGroup;
  title = 'Iniciar Sesión';
  usuarioValidado: Usuario;

  loading = false;
  submitted = false;

  //private header: HeaderComponent;

  // usuario: string;
  // contrasenna: string;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private usuarioService: UsuarioService
) { }

  // constructor(
  //   private usuarioService: UsuarioService
  // ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      usuario: ['', Validators.required],
      contrasenna: ['', Validators.required]
    });
    // get return url from route parameters or default to '/'
      // this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  // Metodo sin usar
  validarLogin(usuario, contrasenna): any {
    console.log("Validando login");
    this.usuarioService.getLoginUsuario(usuario, contrasenna)
    // .pipe(first())
    .subscribe(
        data => {
          this.usuarioValidado = data;
        },
        error => {
          console.log('Hubo un error:' + error);
        });
    console.log(this.usuarioValidado);
    console.log('El usuario ingresado es: ' + this.usuarioValidado.usuario);
    console.log('El contrasenna ingresada es: ' + this.usuarioValidado.contrasenna);
    return this.usuarioValidado;

    // [COMENTARIO] return this.usuarioService.getLoginUsuario(usuario, contrasenna);
  }


  onSubmit() {
    this.submitted = true;

    if (this.form.invalid) {
      console.log("Formulario invalido");
      return;
    }

    console.log("Validando Login");
    this.loading = true;
    //const usuario = this.form.get('usuario').value;
    //const contrasenna = this.form.get('contrasenna').value;


    const objetoUsuario = {
      usuario: this.form.get('usuario').value,
      contrasenna: this.form.get('contrasenna').value
    };

    // this.usuarioService.getLoginUsuario(usuario, contrasenna)
    this.usuarioService.getLoginUsuario(objetoUsuario.usuario, objetoUsuario.contrasenna)
    .subscribe(
        data => {
          if (data == null) {
            console.log('Data es nulo');
            return;
          }
          this.usuarioValidado = data;
          console.log('Entro en data');
          console.log(this.usuarioValidado);
          this.router.navigate(["ventas"]);
          localStorage.setItem('Usuario', JSON.stringify(objetoUsuario));
          console.log("Datos locales: " + JSON.parse(localStorage.getItem('Usuario')).usuario);
          //this.usuarioService.actualizarEstadoSesion(true);
        },
        error => {
          this.loading = false;
          console.log('Hubo un error:' + error);
        });

  }



  // sessionStorage.setItem('usuario', )
  // localStorage.setItem

}
