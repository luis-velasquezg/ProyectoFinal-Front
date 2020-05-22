import { Usuario } from './usuario';

export class Maquina {
    id: number;
    marca: string;
    modelo: string;
    tipo: string;
    estado: string;
    ubicacion: string;
    precioCompra: number;
    reciboCompra: number;
    fechaCreacion?: Date;
    fechaVenta?: Date;
    vendedor?: Usuario;
}