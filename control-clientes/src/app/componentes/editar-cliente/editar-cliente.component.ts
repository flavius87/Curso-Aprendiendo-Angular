import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Cliente } from 'src/app/modelo/cliente.model';
import { ClienteServicio } from 'src/app/servicios/cliente.service';

@Component({
  selector: 'app-editar-cliente',
  templateUrl: './editar-cliente.component.html',
  styleUrls: ['./editar-cliente.component.css']
})
export class EditarClienteComponent implements OnInit {

  clientes!: Cliente[];
  cliente: Cliente | null = {
    nombre: '',
    apellido: '',
    email: '',
    saldo: 0,
    id: ''
  }
  id!: string;
  
  constructor(private clientesServicio:ClienteServicio, 
              private flashMessages:FlashMessagesService,
              private router:Router,
              private route:ActivatedRoute
              ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.clientesServicio.getCliente(this.id).subscribe(cliente => {this.cliente = cliente});
  }

}
