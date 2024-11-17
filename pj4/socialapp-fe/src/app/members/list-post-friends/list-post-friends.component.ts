import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { PostResponse } from '../../shared/models/user/post-response.model';
import { MemberService } from '../member.service';
import { error } from '@ant-design/icons-angular';
import { CommonModule } from '@angular/common';
import { GalleryItem, GalleryModule, ImageItem } from 'ng-gallery';
import { TimeagoModule } from 'ngx-timeago';
import { BsModalRef, BsModalService, ModalModule } from 'ngx-bootstrap/modal';
import { ListUserLikeComponent } from '../list-user-like/list-user-like.component';

@Component({
  selector: 'app-list-post-friends',
  templateUrl: './list-post-friends.component.html',
  styleUrl: './list-post-friends.component.scss',
  standalone: true,
  imports: [
    CommonModule,
    GalleryModule,
    TimeagoModule,
    ModalModule,
  ]
})
export class ListPostFriendsComponent implements OnInit, OnDestroy {
  private memberService = inject(MemberService);
  modalService = inject(BsModalService);
  
  modalRef?: BsModalRef;
  isLoading: boolean = true;
  imagesByPost = new Map<number, GalleryItem[]>();
  reachedEnd: boolean = false;

  posts: PostResponse[] = [];
  likeCounts = new Map<number, number>();

  ngOnInit(): void {
    this.getAllPostsFriends();
    this.memberService.getUserIdLikePost();
    // Thêm sự kiện lắng nghe cuộn
    window.addEventListener('scroll', this.onScroll, { passive: true });
  }

  ngOnDestroy(): void {
    // Loại bỏ sự kiện khi component bị hủy
    window.removeEventListener('scroll', this.onScroll);
  }

  getAllPostsFriends() {
    this.memberService.getPostsFriends().subscribe({
      next: (res: PostResponse[]) => {
        console.log('list posts friends', res);
        this.posts = res;
        this.isLoading = false;
        if (this.posts) {
          this.posts.forEach(post => {
            const galleryItems = post.photos.map(photo => new ImageItem({ src: photo.url, thumb: photo.url }));
            this.imagesByPost.set(post.id, galleryItems);
             this.fetchLikeCount(post.id); 
          });
        }
      },
      error: () => {
        console.error(error);
      }
    });
  }

  fetchLikeCount(postId: number) {
    this.memberService.getLikeCount(postId).subscribe({
      next: (count: number) => {
        this.likeCounts.set(postId, count); // Lưu số lượng like vào map
      },
      error: (error) => {
        console.error(`Error fetching like count for post ${postId}:`, error);
      }
    });
  }
  

  toggleLike(postId: number) {
    this.memberService.likePostToggle(postId).subscribe({
      next: () => {
        this.memberService.getUserIdLikePost(); // Cập nhật danh sách bài viết đã thích
        this.fetchLikeCount(postId); // Lấy lại số lượng người thích sau khi toggle
      },
      error: (error) => {
        console.error('Error toggling like:', error);
      }
    });
  }

  showListUserLikeModal(postId: number) {
    this.memberService.getAllMemberLikePost(postId).subscribe({
      next: (users) => {
        const initialState = { users }; // Truyền dữ liệu vào modal
        this.modalRef = this.modalService.show(ListUserLikeComponent, {
          initialState,
          class: 'modal-dialog-centered'
        });
      },
      error: (err) => {
        console.error('Error loading users who liked the post:', err);
      }
    });
  }
  

  isPostLiked(postId: number): boolean {
    return this.memberService.userLikePostIds().includes(postId);
  }

  onScroll = (): void => {
    const bottomOfWindow = window.innerHeight + window.scrollY >= document.body.offsetHeight;
    if (bottomOfWindow && this.posts.length > 0 && !this.isLoading) {
      this.reachedEnd = true; 
    }
  }

}
