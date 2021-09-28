import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CabeceroComponent } from './componentes/cabecero/cabecero.component';
import { FormularioComponent } from './componentes/formulario/formulario.component';
import { IngresosComponent } from './componentes/ingresos/ingresos.component';
import { EgresosComponent } from './componentes/egresos/egresos.component';
import { EgresoService } from './componentes/egresos/egreso.service';
import { IngresoService } from './componentes/ingresos/ingreso.service';

@NgModule({
  declarations: [
    AppComponent,
    CabeceroComponent,
    FormularioComponent,
    IngresosComponent,
    EgresosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [IngresoService, EgresoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
