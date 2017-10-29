import { Component } from '@angular/core';
import { IonicPage, NavController} from 'ionic-angular';
import { Cliente } from '../../interfaces/cliente.interface';
import { ClienteServicesProvider } from '../../providers/cliente-services/cliente-services';
import { HomePage } from '../home/home';

/**
 * Generated class for the NewClientePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-new-cliente',
  templateUrl: 'new-cliente.html',
})
export class NewClientePage {

  private cliente: Cliente = new Cliente();
  constructor(
    public navCtrl: NavController, 
    private clienteServices: ClienteServicesProvider
   ) {
  }

  guardarCliente(){
    this.clienteServices.saveCliente(this.cliente);
    this.navCtrl.setRoot(HomePage);
  }

  ionViewDidLoad() {
    
  }

}
