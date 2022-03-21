import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grupo-trabajo-section',
  templateUrl: './grupo-trabajo-section.component.html',
  styleUrls: ['./grupo-trabajo-section.component.css']
})
export class GrupoTrabajoSectionComponent implements OnInit {

  INTEGRANTES = 3;
  fotosEquipo: any[] = [];
  rutasFotos: any[] = [];
  nombres: any[] = ["David Moreno Gutierrez",
                    "Angel Pimentel Méndez",
                    "Antonio Valdovinos Apellido2",
                    "Mario",
                    "Antonio"];

  ngOnInit(): void {
    this.inicializaFotos();
    this.getRutaFoto();
  }
  
  inicializaFotos():void{
    for (let i = 0; i < this.INTEGRANTES; i++) {
      var integrante = "integrante" + (i+1) + ".jpg"; 
      this.fotosEquipo.push(integrante); 
    }
  }

  getRutaFoto():void{
    for (let i = 0; i < this.fotosEquipo.length; i++) {
      var ruta = "/assets/imgs/" + this.fotosEquipo[i];
      this.rutasFotos.push({ruta:ruta,nombre:this.nombres[i]}); 
    }
  }
}
