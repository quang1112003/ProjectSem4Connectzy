import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { UserLikePost } from '../../shared/models/user/post-response.model';

@Component({
  selector: 'app-list-user-like',
  templateUrl: './list-user-like.component.html',
  styleUrl: './list-user-like.component.scss'
})
export class ListUserLikeComponent {
  users: UserLikePost[] = [];

  constructor(private modalRef: BsModalRef, private router: Router) {}

  close() {
    if( this.modalRef) {
      this.modalRef.hide();
    }
  }

  navigateToUser(userEmail: string) {
    this.close();
    this.router.navigate([`/members/${userEmail}`]);
  }
  
}
