import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Cliente } from '../../interfaces/cliente.interface';
import { ClienteServicesProvider } from '../../providers/cliente-services/cliente-services';
import { HomePage } from '../home/home';

/**
 * Generated class for the EditClientePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-cliente',
  templateUrl: 'edit-cliente.html',
})
export class EditClientePage {

  private cliente: Cliente = new Cliente();
  

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public clienteServices: ClienteServicesProvider,
  ) {
    this.cliente.id = navParams.get('id');
    this.clienteServices.searchClienteById(this.cliente);
    
    
  }

  cargarCliente(){
    this.cliente= this.clienteServices.clienteSearched;
  }

  editarCliente(){
    
    this.clienteServices.editCliente(this.cliente);
    this.navCtrl.setRoot(HomePage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditClientePage');
  }

}
