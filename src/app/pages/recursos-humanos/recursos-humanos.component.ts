import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from 'src/app/classes/usuario';

@Component({
  selector: 'app-recursos-humanos',
  templateUrl: './recursos-humanos.component.html',
  styleUrls: ['./recursos-humanos.component.css']
})
export class RecursosHumanosComponent implements OnInit {

  title = 'Recursos Humanos';
  usuarios: Usuario[];

  constructor( protected usuarioService: UsuarioService ) { }

  ngOnInit() {
    this.usuarioService.getUsuarios()
      .subscribe(
        (data) => {
          this.usuarios = data;
          console.log(this.usuarios);
        }
      );
  }

}
