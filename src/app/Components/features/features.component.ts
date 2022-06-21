import { Component, OnInit } from '@angular/core';
import { Feature } from 'src/app/Models/Feature';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent implements OnInit {
  public ListData:Array<Feature>;

  constructor() { 
    this.ListData = new Array<Feature>();
    let objeto:Feature = new Feature("Móveis","Geralmente os sistemas embarcados são móveis, compondo estruturas maiores.","../../../assets/movel.png");
    this.ListData.push(objeto);
    objeto = new Feature("Energia","Consumo energético  deve ser mínimo e bem balanceado.","../../../assets/energia.png");
    this.ListData.push(objeto);
    objeto = new Feature("Memória","A disponibilidade de memória é muito limitada então um código fonte bem otimizado e enxuto é necessário.","../../../assets/memoria.png");
    this.ListData.push(objeto);
    objeto = new Feature("Hardware","Recursos de hardware são bem limitados com a frequência do clock e tensão sendo as menores possíveis.","../../../assets/hardware.png");
    this.ListData.push(objeto);
    objeto = new Feature("Uso Eficiente","O uso eficiente do hardware pode vir a reduzir o custo final do sistema embarcado.","../../../assets/otimizacao.png");
    this.ListData.push(objeto);
  }

  ngOnInit(): void {
    
  }

}
