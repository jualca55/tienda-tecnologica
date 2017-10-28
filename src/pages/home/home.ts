import { Component, OnInit } from '@angular/core';
import { Refresher, NavController } from "ionic-angular";
import { ClienteServicesProvider } from '../../providers/cliente-services/cliente-services';
import { NewClientePage } from '../../pages/new-cliente/new-cliente';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  clientes: string[];

  constructor(
    public navCtrl: NavController,
    private clienteServices: ClienteServicesProvider
    ) {
  }

  ngOnInit() {
    this.clienteServices.getCliente();

  }

  nuevoCliente(){
    this.navCtrl.push(NewClientePage, {
      });
  }

  
  recargar_clientes(Refresher:Refresher)
  {
    console.log("Inicio del refresh");
    setTimeout(()=>{
      console.log("Terminó el refresh");
      this.clienteServices.getCliente();
      Refresher.complete();
    }, 1500 );
  }
}
