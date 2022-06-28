import { Component, OnInit } from '@angular/core';
import { Feature } from 'src/app/Models/Feature';

@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.css']
})
export class ApplicationsComponent implements OnInit {
  public listaAplicacao:Array<Feature>;

  constructor() { 
    let urlGeral:string = "../../../assets/aplicacao";
    this.listaAplicacao = new Array<Feature>();
    let item:Feature = new Feature("Eletrodomésticos","Ar condicionado, cafeteira elétrica, micro-ondas, geladeira, máquina de lavar.",urlGeral + "/eletrodomesticos.jpg");
    this.listaAplicacao.push(item);
    item = new Feature("Aparelhos de comunicação","Equipamentos de rede como switch e roteador, telefones, Periféricos de computadores.",urlGeral + "/comunicacao.jpg");
    this.listaAplicacao.push(item);
    item = new Feature("Equipamentos de Entretenimento","TVs e players de mídia, console de games, aparelhos de reprodução de imagens e som.",urlGeral + "/games.png");
    this.listaAplicacao.push(item);
    item = new Feature("Equipamentos médicos","Sistemas de suporte à vida, cadeira odontológica.",urlGeral + "/medico.jpg");
    this.listaAplicacao.push(item);
    item = new Feature("Sistemas de armamentos militares","Sistemas de lançamento de misseis, veículos militares.",urlGeral + "/misseis.jpg");
    this.listaAplicacao.push(item);
    item = new Feature("Dispositivos de vendas/atendimento","Biometria, leitor de código de barras, caixa de autoatendimento ATM.",urlGeral + "/biometria.jpg");
    this.listaAplicacao.push(item);
    item = new Feature("Brinquedos","Bonecos que falam e se movem, carros de controle remoto.",urlGeral + "/carroremoto.jpg");
    this.listaAplicacao.push(item);
    item = new Feature("Automotivo","'Computadores de bordo automotivos, freio ABS, interface de vídeo e voz.",urlGeral + "/computadorbordo.jpg");
    this.listaAplicacao.push(item);
  }

  ngOnInit(): void {}
}