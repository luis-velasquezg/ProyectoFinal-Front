import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ComprasComponent } from './pages/compras/compras.component';
import { FacturacionComponent } from './pages/facturacion/facturacion.component';
import { InventarioComponent } from './pages/inventario/inventario.component';
import { LoginComponent } from './pages/login/login.component';
import { RecursosHumanosComponent } from './pages/recursos-humanos/recursos-humanos.component';
import { VentasComponent } from './pages/ventas/ventas.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'compras', component: ComprasComponent },
  // { path: 'facturacion', component: FacturacionComponent },
  { path: 'inventario', component: InventarioComponent },
  { path: 'login', component: LoginComponent },
  { path: 'recursos-humanos', component: RecursosHumanosComponent },
  { path: 'ventas', component: VentasComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: false } )
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
