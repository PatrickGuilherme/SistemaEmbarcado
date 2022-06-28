import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-microcontroller',
  templateUrl: './microcontroller.component.html',
  styleUrls: ['./microcontroller.component.css']
})
export class MicrocontrollerComponent implements OnInit {
  public contL:number = 20;
  public contC:number = 10;

  constructor() { }

  ngOnInit(): void {
  }

}
