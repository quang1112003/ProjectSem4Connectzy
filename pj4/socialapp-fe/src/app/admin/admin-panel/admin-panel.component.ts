import { Component, inject, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { ToastrService } from 'ngx-toastr';
import { SharedService } from '../../shared/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrl: './admin-panel.component.scss'
})
export class AdminPanelComponent implements OnInit {
  private adminService = inject(AdminService);
  private toastrService = inject(ToastrService);
  private sharedService = inject(SharedService);
  private route = inject(Router);

  users: any[] = [];
  filteredUsers: any[] = []; // Add a property to store filtered users
  totalElements: number = 0;
  pageSize: number = 10; // Adjust page size as needed
  currentPage: number = 0;
  searchTerm: string = ''; // Add a property for search term


  ngOnInit(): void {
    this.loadUsers();
  }

  navigateToUserPosts(userId: number): void {
    this.route.navigate([`admin/posts/${userId}`]);
  }

  lockAccount(userId: any): void {
    this.sharedService.showNotification(
      false,
      'Confirm',
      'Are you sure you want to lock this account?'
    ).subscribe((confirmed: boolean) => {
      if(confirmed) {
        this.adminService.lockAccount(userId).subscribe(
          () => {
            this.toastrService.success('Account locked successfully.');
            
            const userIndex = this.users.findIndex(user => user.id === userId);
            if (userIndex !== -1) {
              this.users[userIndex].accountLocked = true;
            }
            
            // Nếu bạn cũng sử dụng `filteredUsers`, hãy cập nhật nó tương tự
            const filteredUserIndex = this.filteredUsers.findIndex(user => user.id === userId);
            if (filteredUserIndex !== -1) {
              this.filteredUsers[filteredUserIndex].accountLocked = true;
            }
          },
          error => {
            console.error('Error locking account:', error);
            alert('Failed to lock the account. Please try again later.');
          }
        );
      }
    });
  }
  
  unlockAccount(userId: any): void {
    this.sharedService.showNotification(
      true,
      'Confirm',
      'Are you sure you want to unlock this account?'
    ).subscribe((confirmed: boolean) => {
      if(confirmed) {
        this.adminService.unlockAccount(userId).subscribe(
          () => {
            this.toastrService.success('Account unlocked successfully.');
            this.loadUsers(); 
          },
          error => {
            console.error('Error unlocking account:', error);
            alert('Failed to unlock the account. Please try again later.');
          }
        );
      }
    });
  }

  loadUsers(): void {
    this.adminService.getAllUsers(this.currentPage, this.pageSize).subscribe(
      response => {
        console.log(response);
        
        this.users = response.content;
        this.filteredUsers = this.users; // Initialize filtered users with full list
        this.totalElements = response.totalElements;
      },
      error => {
        console.error('Error fetching users:', error);
      }
    );
  }

  onSearch(): void {
    const term = this.searchTerm.toLowerCase().trim();
    if (term) {
      this.filteredUsers = this.users.filter(user =>
        user.knowAs.toLowerCase().includes(term) ||
        user.email.toLowerCase().includes(term)
      );
    } else {
      this.filteredUsers = this.users; // Reset to full list if search term is empty
    }
  }

  onPageChanged(event: { page: number }): void {
    this.currentPage = event.page - 1; // ngx-bootstrap pages are 1-indexed, convert to 0-indexed if necessary
    this.loadUsers();
  }

}
