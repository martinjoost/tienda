import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OfertaHombreInterface } from '../../interfaces/ofertas.interfaces';

@Component({
  selector: 'app-hombres',
  templateUrl: './hombres.component.html',
  styleUrls: ['./hombres.component.css']
})
export class HombresComponent implements OnInit {
  ofertas: OfertaHombreInterface[] = [];

  constructor(private http:HttpClient) { 
    this.cargarOfertas();
  }

  ngOnInit() {
  }
  cargarOfertas(){
    this.http.get('https://tienda-f60d9.firebaseio.com/ofertas/oferta-01.json')
    .subscribe( (resp:OfertaHombreInterface[]) => {
      this.ofertas = resp;
      console.log(this.ofertas)
    }) 
  }
}
