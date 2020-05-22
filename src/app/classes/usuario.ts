import { Rol } from './rol';

export class Usuario {
    id: number;
    nombres: string;
    apellidos: string;
    rol: Rol;
    usuario: string;
    contrasenna: string;
    telefono?: string;
    estaActivo: boolean;
}