import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { InventarioComponent } from './pages/inventario/inventario.component';
import { VentasComponent } from './pages/ventas/ventas.component';
import { ComprasComponent } from './pages/compras/compras.component';
import { FacturacionComponent } from './pages/facturacion/facturacion.component';
import { RecursosHumanosComponent } from './pages/recursos-humanos/recursos-humanos.component';
import { LoginComponent } from './pages/login/login.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ContabilidadComponent } from './pages/contabilidad/contabilidad.component';
import { GastosComponent } from './pages/contabilidad/gastos/gastos.component';
import { EstadosFinancierosComponent } from './pages/contabilidad/estados-financieros/estados-financieros.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InventarioComponent,
    VentasComponent,
    ComprasComponent,
    FacturacionComponent,
    RecursosHumanosComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    ContabilidadComponent,
    GastosComponent,
    EstadosFinancierosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
