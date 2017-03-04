import { Component } from '@angular/core';
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

import { ServicesModalComponent } from './modal.component';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  constructor(
    private modalService: NgbModal,
  ) {}

  new() {

  }

  deleteRoom(link) {
    // $('#modal_delete_button').attr('onclick', 'location.href="' + link + '"');
    // $('#room_delete_modal').modal('show');
    this.modalService.open(ServicesModalComponent);
  }
}
