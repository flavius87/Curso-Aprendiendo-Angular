import { Component } from '@angular/core';
import { Egreso } from '../egresos/egreso.model';
import { EgresoService } from '../egresos/egreso.service';
import { Ingreso } from '../ingresos/ingreso.model';
import { IngresoService } from '../ingresos/ingreso.service';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  
  tipo:string="ingresoOperacion";
  descripcionInput:string;
  valorInput:number;
  
  constructor(private ingresoService:IngresoService, private egresoService:EgresoService){}

  tipoOperacion(evento){
    this.tipo = evento.target.value;
  }

  agregarValor(){
    if(this.tipo === "ingresoOperacion")
      this.ingresoService.ingresos.push(new Ingreso(this.descripcionInput, this.valorInput));
    else
      this.egresoService.egresos.push(new Egreso(this.descripcionInput, this.valorInput));

  }

}
