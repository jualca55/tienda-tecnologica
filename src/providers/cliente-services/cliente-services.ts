import { Injectable } from '@angular/core';
//import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { HttpClient} from '@angular/common/http';
import { Cliente } from '../../interfaces/cliente.interface';

/*
  Generated class for the ClienteServicesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ClienteServicesProvider {

  clienteList: Array<Cliente>;

  constructor(public http: HttpClient) {
    //console.log('Hello ClienteServicesProvider Provider');
  }

  public getCliente(){
    this.http.get('http://localhost:8080/tienda/webresources/entidades.cliente')
    .subscribe(data => {
      this.clienteList = data as Array<Cliente>;
    });
  }

  public saveClientes(cliente: Cliente) {
    const body = {id: cliente.id, nombre: cliente.nombre, direccion: cliente.direccion, correo: cliente.correo, telefono: cliente.telefono};
    this.http.post('http://localhost:8080/tienda/webresources/entidades.cliente', body)
    .subscribe(data => {
    });
  } 

}
//http://localhost:8080/tienda/webresources/entidades.cliente
