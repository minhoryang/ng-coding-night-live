import { Component } from '@angular/core';

import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-services-modal',
  templateUrl: './modal.component.html'
})
export class ServicesModalComponent {
  constructor(public activeModal: NgbActiveModal) {}
}
