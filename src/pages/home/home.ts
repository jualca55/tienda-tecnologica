import { Component, OnInit } from '@angular/core';
import { Refresher } from "ionic-angular";
import { ANIMALES } from "../../data/data.animales";
import { Animal } from "../../interfaces/animal.interface";
import { ClienteServicesProvider } from '../../providers/cliente-services/cliente-services';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  animales:Animal[] = [];
  audio= new Audio();
  audioTiempo: any;
  clientes: string[];

  constructor(private clienteServices: ClienteServicesProvider) {
    this.animales = ANIMALES.slice(0);
  }

  ngOnInit() {
    this.clienteServices.getCliente();
  }

  cargarClientes(){
    this.clienteServices.getCliente();
    console.log(this.clienteServices.clienteList);
  }

  private pausar_audio(animalSel:Animal)
  {
    clearTimeout(this.audioTiempo);
    this.audio.pause();
    this.audio.currentTime=0;
    for(let animal of this.animales)
    {
      if(animal.nombre != animalSel.nombre)  
        {
          animal.reproduciendo= false;
        }
    }

  }
  reproducir (animal:Animal){
    this.pausar_audio(animal);
    if(animal.reproduciendo){
      animal.reproduciendo= false;
      return;
    }
    console.log(animal);
    this.audio.src= animal.audio;
    this.audio.load();
    this.audio.play();
    animal.reproduciendo=true;
    this.audioTiempo=setTimeout(()=>animal.reproduciendo=false,
     animal.duracion * 1000);

  }

  borrar_animal(idx:number)
  {
    this.animales.splice(idx, 1);
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
