import { Component, OnInit } from '@angular/core';
import { InventarioService } from 'src/app/services/inventario.service';
import { Maquina } from 'src/app/classes/maquina';

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css']
})
export class InventarioComponent implements OnInit {

  title = 'Inventario';
  maquinas: Maquina[];

  constructor( protected inventarioService: InventarioService) { }

  ngOnInit() {
    this.inventarioService.getMaquinas()
      .subscribe(
        (data) => {
          this.maquinas = data;
          console.log(this.maquinas);
        }
      );
  }

}
