import { Component, OnInit } from '@angular/core';
import { ModalText } from 'src/app/Models/ModalText';

@Component({
  selector: 'app-time-line',
  templateUrl: './time-line.component.html',
  styleUrls: ['./time-line.component.css']
})
export class TimeLineComponent implements OnInit {
  public anoSelect:ModalText;
  public ModalStatus:boolean = false;

  constructor() {}
  ngOnInit():void {}

  public OpenModalAno(ano:number):void{
    switch(ano) {
      case 1961:

        this.anoSelect = new ModalText(
          "Minuteman míssil balístico intercontinental - USA",
          "O primeiro sistema de computação embarcada data de 1961 desenvolvido para o Minuteman míssil balístico intercontinental da Força Aérea dos EUA. Na sua construção foram utilizados transistores discretos e portas lógicas.",
          1961);
        this.ModalStatus = true;
      break;
      case 1970:
        this.anoSelect = new ModalText(
          "Air Data Computer Central 1970",
          "Foi primeiro sistema embarcado baseado em microprocessador, incorporado ao avião F-14 Tomcat Lançado em 1970, este sistema embarcado lidou com q electrónica a bordo dos aviões, tratamento de vôo, e cálculo do balanço de configuração de asa do F-14, além de fornecerem informações sobre a velocidade do cockpit do ar e altitude.",
          1970);
        this.ModalStatus = true;
      break;
      case 1980:
        this.anoSelect = new ModalText(
          "Sistemas on a Chip",
          "Sistemas embarcados tomou no mercado comercial na década de 1980, devido em grande parte à integração (sistemas-on-a-chip). Estes combinam um microprocessador, RAM , controladores de entrada /saída e quaisquer outros sistemas de controles relacionados com a função em um pacote de circuito integrado.",
          1980);
        this.ModalStatus = true;
      break;
      case 1990:
        this.anoSelect = new ModalText(
          "1990 em diante",
          "Movendo-se em direção a celulares e computadores de mão multiuso. Um aspecto chave que mudou é que os processadores de 32 bits maduras e ferramentas de desenvolvimento mais fáceis de usar, têm aumentado o poder computacional disponível tremendamente , enquanto que muitas das restrições de energia elétrica caíram com modernas técnicas de fabricação de CPU.",
          1990);
        this.ModalStatus = true;
      break;
    }
  }
}
