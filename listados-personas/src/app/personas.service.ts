import { LoggingService } from "./LoggingService.service";
import { Persona } from "./persona.model";
import { EventEmitter, Injectable } from "@angular/core";
import { DataServices } from "./data.services";

@Injectable()
export class PersonasService{ 
    personas: Persona[] = [];

    saludar = new EventEmitter<number>();

    constructor(private loggingService:LoggingService,
                private dataServices:DataServices
        ){}

    setPersonas(personas:Persona[]){
        this.personas = personas;
    }

    obtenerPersonas(){
        return this.dataServices.cargarPersonas();
    }

    agregarPersona(persona: Persona){
        this.loggingService.enviaMensajeAConsola("agregamos a la persona: " + persona.nombre);
        if(this.personas == null){
            this.personas = [];
        }
        this.personas.push( persona );
        this.dataServices.guardarPersona( this.personas );
    }

    encontrarPersona(index:number){
        let persona: Persona=this.personas[index];
        return persona;
    }

    modificarPersona(index:number, persona:Persona){
        let persona1 = this.personas[index];
        persona1.nombre = persona.nombre;
        persona1.apellido = persona.apellido;
        this.dataServices.modificarPersona(index, persona);
    }

    eliminarPersona(index:number){
        this.personas.splice(index, 1);
        this.dataServices.eliminarPersona(index);
        // se vuelve a guardar el arreglo para regenerar los índices
        this.modificarPersonas();
    }

    modificarPersonas(){
        if(this.personas != null){
            this.dataServices.guardarPersona(this.personas);
        }
    }
}

