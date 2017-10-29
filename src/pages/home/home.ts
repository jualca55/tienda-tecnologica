import { Component, OnInit } from '@angular/core';
import { Refresher, NavController, NavParams } from "ionic-angular";
import { ClienteServicesProvider } from '../../providers/cliente-services/cliente-services';
import { NewClientePage } from '../../pages/new-cliente/new-cliente';
import { EditClientePage } from '../../pages/edit-cliente/edit-cliente';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  clientes: string[];

  constructor(
    public navCtrl: NavController,
    private navParams: NavParams,
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
  
  editarCliente(id: string){
    this.navCtrl.push(EditClientePage, {
      id
      });
  }

  borrarCliente(id: string){
    this.clienteServices.deleteCliente(id);
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
