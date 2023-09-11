import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap'; // Import NgbModal and NgbActiveModal

@Component({
  selector: 'app-delete-confirm',
  templateUrl: './delete-confirm.component.html',
  styleUrls: ['./delete-confirm.component.css'],
})
export class DeleteConfirmComponent {
  constructor(public activeModal: NgbActiveModal) {}
}
