import { Component, Input, OnChanges, OnInit, SimpleChanges, TemplateRef, ViewChild } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ModalText } from 'src/app/Models/ModalText';

@Component({
  selector: 'app-modal',
  templateUrl: './modal-info.component.html',
  styleUrls: ['./modal-info.component.css']
})
export class ModalInfoComponent implements OnChanges{
  modalRef?: BsModalRef;
  @Input() ModalText:ModalText;
  @Input() switchModal:boolean;
  @ViewChild('template') public template: TemplateRef<any>;

  constructor(private modalService: BsModalService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['ModalText'].firstChange == false){
      if(changes['ModalText'].currentValue){
        this.ShowModal();
      }
    }
  }

  public ShowModal() {
    this.modalRef = this.modalService.show(this.template);
  }

  public CloseModal() {
    this.modalRef?.hide();
  }
}