import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner-intro',
  templateUrl: './banner-intro.component.html',
  styleUrls: ['./banner-intro.component.css']
})
export class BannerIntroComponent implements OnInit {
  public text:string;
  public title:string;

  constructor() {
    this.title = "Introdução";
    this.text =  "Diferindo dos computadores que possuem sistemas operacionais e executam softwares dos mais variados os sistemas eletrônicos embarcados são sistemas de processamento de informações que estão embutidos em sistemas maiores e que normalmente não possuem uma interface direta com o usuário (computação invisível), o hardware e software normalmente são integrados e seu projeto visa o desempenho de uma função específica.";       
  }

  ngOnInit(): void {
  }

}
