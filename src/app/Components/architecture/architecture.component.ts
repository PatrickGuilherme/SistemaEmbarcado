import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-architecture',
  templateUrl: './architecture.component.html',
  styleUrls: ['./architecture.component.css']
})
export class ArchitectureComponent implements OnInit {
  public text:string;
  public title:string;

  constructor() {
    this.title = "Microcontroladores";
    this.text =  "Quando se analisa o desenvolvimento de sistemas embarcados, é comum que o cerne do projeto seja um microcontrolador, este possui um processador dedicado a uma finalidade específica. Em um microcontrolador geralmente as entradas são fornecidas ao sistema e estas geram as as saídas. Neste contexto as entradas e saídas representam elementos como: sensores, atuadores, dispositivos de comunicação, dispositivos de interface gráfica, entre outros.";       
  }

  ngOnInit(): void {
  }

}
