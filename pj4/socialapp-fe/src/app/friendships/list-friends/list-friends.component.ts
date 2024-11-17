import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Friendships, FriendshipStatus } from '../../shared/models/user/friendships.model';
import { FriendshipService } from '../friendship.service';
import { MemberService } from '../../members/member.service';

@Component({
  selector: 'app-list-friends',
  templateUrl: './list-friends.component.html',
  styleUrls: ['./list-friends.component.scss']
})
export class ListFriendsComponent implements OnInit {
  friends: Friendships[] = [];
  filteredFriends: Friendships[] = [];
  searchTerm: string = '';

  friendshipService = inject(FriendshipService);
  memberService = inject(MemberService);
  router = inject(Router);

  ngOnInit(): void {
    this.loadFriends();
  }

  loadFriends() {
    this.friendshipService.getFriendships(FriendshipStatus.ACCEPTED).subscribe({
      next: (res: Friendships[]) => {
        this.friends = res;
        this.filteredFriends = res;
      }
    });
  }

  searchFriends(event: any) {
    const value = event.target.value.toLowerCase();
    this.searchTerm = value;

    if (!value) {
      this.filteredFriends = this.friends;
      return;
    }

    this.filteredFriends = this.friends.filter(friend =>
      friend.otherUserKnowAs.toLowerCase().includes(value)
    );
  }

  navigateToMessage(friend: Friendships) {
    this.memberService.setRecipientName(friend.otherUserKnowAs);
    this.router.navigate(['/message']);
  }

  unfriend(friendKnowAs: string) {
    this.friendshipService.deleteFriend(friendKnowAs).subscribe({
      next: () => {
        this.friends = this.friends.filter(friend => friend.otherUserKnowAs !== friendKnowAs);
        this.filteredFriends = this.filteredFriends.filter(friend => friend.otherUserKnowAs !== friendKnowAs);
      },
      error: (err) => {
        console.error('Failed to unfriend', err);
      }
    });
  }
}
