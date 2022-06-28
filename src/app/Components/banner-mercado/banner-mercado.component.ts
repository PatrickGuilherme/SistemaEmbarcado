import { Component, OnInit } from '@angular/core';
import { Feature } from 'src/app/Models/Feature';

@Component({
  selector: 'app-banner-mercado',
  templateUrl: './banner-mercado.component.html',
  styleUrls: ['./banner-mercado.component.css']
})
export class BannerMercadoComponent implements OnInit {
  public listaAplicacao:Array<Feature>;

  constructor() { 
    let urlGeral:string = "../../../assets/Mercado";
    this.listaAplicacao = new Array<Feature>();
    let item:Feature = new Feature("","Fóruns de tecnologias abordam o questionamento de esses avanços pode ocasionar o aumento do número de desempregados por conta da “substituição” do humano pela máquina, mas na verdade, vai está provocando os mesmo a se profissionalizar e se preparem para o futuro",urlGeral + "/1.png");
    this.listaAplicacao.push(item);
    item = new Feature("","Linguagens como C, C++, Python, Rust e até mesmo JavaScript estão sendo usadas em aplicações mais atuais, chamando assim a atenção de desenvolvedores de outras áreas (com o destaque em Web).",urlGeral + "/2.png");
    this.listaAplicacao.push(item);
    item = new Feature("","No ramo da TI, a área que está crescendo muito é a área de Inteligência Artificial, no qual tem link com IoT, tecnologias as quais possuem um poder muito grande em soluções de problemas e melhora na qualidade de vida ou de ensino, reconhecimento facial, detecção de enchentes, sistema de monitoramento cardíaco, entre outros.",urlGeral + "/3.png");
    this.listaAplicacao.push(item);
  }
  ngOnInit(): void {
  }

}
