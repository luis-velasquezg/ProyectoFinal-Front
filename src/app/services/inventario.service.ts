import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Maquina } from '../classes/maquina';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };


@Injectable({
    providedIn: 'root'
    })
export class InventarioService {

    private urlAPI = 'http://localhost:8080/conficiet/api/v1/maquinas';
    // private urlAPI = 'http://192.168.137.1:8080/conficiet/api/v1/maquinas/';

    constructor(protected http: HttpClient) { }

    getMaquinas(): Observable<any> {
        return this.http.get(this.urlAPI);
    }

    getMaquinaPorId(id): Observable<any> {
        return this.http.get(this.urlAPI + id);
    }

    postMaquina(maquina: Maquina) {
        return this.http.post<Maquina>(this.urlAPI, maquina, httpOptions)
            .subscribe();
    }

    putMaquina(maquina: Maquina, id) {
        return this.http.put(this.urlAPI + id, maquina, httpOptions)
            .subscribe();
    }

    deleteMaquina(id) {
        return this.http.delete(this.urlAPI + id, httpOptions)
            .subscribe();
    }

}