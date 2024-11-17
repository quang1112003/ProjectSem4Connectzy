import { Component, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-notification-update-infomation',
  templateUrl: './notification-update-infomation.component.html',
  styleUrl: './notification-update-infomation.component.scss'
})
export class NotificationUpdateInfomationComponent {
  username?: string; 

  constructor(private modalRef: BsModalRef, private router: Router) {}

  closeAndNavigate() {
    if (this.modalRef) {
      this.modalRef.hide();
    }
    
    this.router.navigate([`/members/edit`]);
  }

  close() {
    if( this.modalRef) {
      this.modalRef.hide();
    }
  }
}
