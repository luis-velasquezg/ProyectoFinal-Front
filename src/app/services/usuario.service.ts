import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../classes/usuario';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };


@Injectable({
    providedIn: 'root'
    })
export class UsuarioService {

    // private urlAPI = 'http://localhost:8080/conficiet/api/v1/usuarios';
    // private urlAPI = 'http://192.168.137.1:8080/conficiet/api/v1/usuarios/';
    private urlAPI = 'https://conficiet-back.herokuapp.com/conficiet/api/v1/usuarios';

    constructor(
        protected http: HttpClient
        ) { }

    getUsuarios(): Observable<any> {
        return this.http.get(this.urlAPI);
    }

    getUsuarioPorId(id): Observable<any> {
        return this.http.get(this.urlAPI + id);
    }

    postUsuario(usuario: Usuario) {
        return this.http.post<Usuario>(this.urlAPI, usuario, httpOptions)
            .subscribe();
    }

    putUsuario(usuario: Usuario, id) {
        return this.http.put(this.urlAPI + id, usuario, httpOptions)
            .subscribe();
    }

    deleteUsuario(id) {
        return this.http.delete(this.urlAPI + id, httpOptions)
            .subscribe();
    }

    getLoginUsuario(usuario, contrasenna) {
        return this.http.get<Usuario>(this.urlAPI + "/login/" + usuario + "&" + contrasenna);
    }

}