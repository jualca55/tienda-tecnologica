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
  public clienteSearched: Cliente;

  constructor(public http: HttpClient) {
    //console.log('Hello ClienteServicesProvider Provider');
  }

  public getCliente(){
    this.http.get('http://192.168.0.9:8080/tienda/webresources/entidades.cliente')
    .subscribe(data => {
      this.clienteList = data as Array<Cliente>;
    });
  }

  public saveCliente(cliente: Cliente) {
    const body = {id: cliente.id, nombre: cliente.nombre, direccion: cliente.direccion, correo: cliente.correo, telefono: cliente.telefono};
    this.http.post('http://192.168.0.9:8080/tienda/webresources/entidades.cliente', body)
    .subscribe(data => {
    });
  }

  public editCliente(cliente: Cliente) {
    const body = {id: cliente.id, nombre: cliente.nombre, direccion: cliente.direccion, correo: cliente.correo, telefono: cliente.telefono};
    this.http.put('http://192.168.0.9:8080/tienda/webresources/entidades.cliente/{id}', body)
    .subscribe(data => {
    });
  }

  public searchClienteById(clienteToSearch: Cliente) {
    this.clienteSearched = new Cliente();
    const body = {id: clienteToSearch.id};
    this.http.get('http://192.168.0.9:8080/tienda/webresources/entidades.cliente/' + clienteToSearch.id)
    .subscribe(data => {
      this.clienteSearched = data as Cliente;
      console.log(this.clienteSearched.id);
    });
  }

  public deleteCliente(cliente: Cliente) {
    const body = { id: cliente.id };
    this.http.delete('http://192.168.0.9:8080/tienda/webresources/entidades.cliente' + body)
    .subscribe(data => {
    });
  }
}
