import { Injectable, ViewChild } from "@angular/core";
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from "@angular/fire/compat/firestore";
import { map } from "rxjs/operators";
import { Observable } from "rxjs";
import { Cliente } from "../modelo/cliente.model";

@Injectable()
export class ClienteServicio{
  
    clienteColeccion: AngularFirestoreCollection<Cliente>;
    clienteDoc: AngularFirestoreDocument<Cliente> | undefined;
    clientes: Observable<Cliente[]> | undefined; //definimos un arreglo de tipo cliente que regresa un observable 
    cliente: Observable<Cliente | null> | undefined; //definimos un objeto de tipo cliente que regresa un observable
 
    
    constructor(private db:AngularFirestore){
        this.clienteColeccion = db.collection('clientes', ref => ref.orderBy('nombre', 'asc'))
    }


    getClientes():Observable<Cliente[]>{
        //Obtener los clientes
        this.clientes = this.clienteColeccion.snapshotChanges().pipe(
            map(cambios => {
                return cambios.map( accion => {
                    const datos = accion.payload.doc.data() as Cliente;
                    datos.id = accion.payload.doc.id;
                    return datos;
                }) 
            })
        );
        return this.clientes;
    }

    agregarCliente(cliente: Cliente){
        this.clienteColeccion.add(cliente);
    }

    getCliente(id:string){
        this.clienteDoc = this.db.doc<Cliente>(`clientes/${id}`);
        this.cliente = this.clienteDoc.snapshotChanges().pipe(
            map( accion => {
                if(accion.payload.exists === false){
                    return null;
                }
                else{
                    const datos = accion.payload.data() as Cliente;
                    datos.id = accion.payload.id;
                    return datos
            }
            })
        );
        return this.cliente;
    }

    modificarCliente(cliente:Cliente){
        this.clienteDoc = this.db.doc(`clientes/${cliente.id}`);
        this.clienteDoc.update(cliente);
    }

    eliminarCliente(cliente:Cliente){
        this.clienteDoc = this.db.doc(`clientes/${cliente.id}`);
        this.clienteDoc.delete();
    }
}