import { Component, inject, OnInit } from '@angular/core';
import { MemberService } from '../member.service';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { AccountService } from '../../account/account.service';
import { Member } from '../../shared/models/user/member.model';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { NotificationUpdateInfomationComponent } from '../notification-update-infomation/notification-update-infomation.component';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrl: './member-list.component.scss'
})
export class MemberListComponent implements OnInit {
  memberService = inject(MemberService);
  accountService = inject(AccountService);
  modalService = inject(BsModalService);

  modalRef?: BsModalRef;
  member: Member | null = null;
  genderList = [
    { value: 'male', display: 'Male' },
    { value: 'female', display: 'Female' },
  ];

  ngOnInit(): void {
    if (!this.memberService.paginatedResult()) {
      this.loadMember();
    }

    this.loadByMember();
  }

  loadMember() {
    this.memberService.memberCache.clear();
    this.memberService.userParams().pageNumber = 1;
    this.memberService.loadMembers();
  }

  loadByMember() {
    const username = this.accountService.getCurrentUser()!.email;

    this.memberService.getMember(username).subscribe({
      next: (res: Member) => {
        this.member = res;
        this.checkProfileCompletion();
      },
      error: _ => {
        console.error('Error loading member data');
      }
    });
  }

  checkProfileCompletion() {
    if (this.member) {
      const incompleteFields = [
        'introduction',
        'interests',
        'lookingFor',
        'countryName',
        'stateName',
        'cityName',
        'countryId',
        'stateId',
        'cityId'
      ].filter((field) => !this.member![field as keyof Member]);

      const userKey = `profileStatus_${this.member.email}`;
      const modalShownKey = `modalShown_${this.member.email}`;

      // Kiểm tra trạng thái trong localStorage
      const hasUpdated = localStorage.getItem(userKey);
      const hasShownModal = localStorage.getItem(modalShownKey);

      if (incompleteFields.length > 0 && !hasUpdated && !hasShownModal) {
        // Hiển thị modal và đánh dấu là đã hiển thị
        setTimeout(() => {
          this.showUpdateProfileModal();
          localStorage.setItem(modalShownKey, 'true'); // Đánh dấu đã hiển thị
        }, 3000);
      } else if (incompleteFields.length === 0) {
        // Lưu vào localStorage nếu đã hoàn thành
        localStorage.setItem(userKey, 'updated');
      }
    }
}



  showUpdateProfileModal() {
    const username = this.accountService.getCurrentUser()!.email;
    const initialState = { username: username }

    this.modalRef = this.modalService.show(NotificationUpdateInfomationComponent, {
      initialState,
      class: 'modal-dialog-centered'
    });
  }

  resetFilter() {
    this.memberService.resetUserParams();
    this.loadMember();
  }

  pageChanged(event: PageChangedEvent) {
    if (this.memberService.userParams().pageNumber !== event.page) {
      this.memberService.userParams().pageNumber = event.page;
      this.memberService.loadMembers();
    }
  }
}
