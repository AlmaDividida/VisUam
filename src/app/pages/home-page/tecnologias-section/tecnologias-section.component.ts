import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tecnologias-section',
  templateUrl: './tecnologias-section.component.html',
  styleUrls: ['./tecnologias-section.component.css']
})
export class TecnologiasSectionComponent implements OnInit {

  TECNOLOGIAS = 3;
  rutasImgTec: any[] = [];

  ngOnInit(): void {
    this.rutaImg();
  }

  rutaImg():void{
    for (let i = 0; i < this.TECNOLOGIAS; i++) {
      var ruta = "/assets/imgs/tecnologia" + (i+1) + ".png";
      this.rutasImgTec.push(ruta); 
    }
  }

}
