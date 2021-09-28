import { Ingreso } from "./ingreso.model";

export class IngresoService{
    ingresos: Ingreso[] = [
        new Ingreso('Salario', 2100.00),
        new Ingreso('Venta de coche', 1500.00)
    ];

    eliminar(ingreso:Ingreso){
        const indice:number = this.ingresos.indexOf( ingreso );
        this.ingresos.splice(indice, 1);    
    }

}