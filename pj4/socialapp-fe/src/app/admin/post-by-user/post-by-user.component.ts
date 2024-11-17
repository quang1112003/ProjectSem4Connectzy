import { Component, OnInit } from '@angular/core';
import { PostResponse } from '../../shared/models/user/post-response.model';
import { AdminService } from '../admin.service';
import { ActivatedRoute } from '@angular/router';
import { error } from '@ant-design/icons-angular';
import { CommonModule } from '@angular/common';
import { GalleryItem, GalleryModule, ImageItem } from 'ng-gallery';
import { TimeagoModule } from 'ngx-timeago';
import { ModalModule } from 'ngx-bootstrap/modal';
import { SharedService } from '../../shared/shared.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-post-by-user',
  templateUrl: './post-by-user.component.html',
  styleUrl: './post-by-user.component.scss',
  standalone: true,
  imports: [
    CommonModule,
    GalleryModule,
    TimeagoModule,
    ModalModule,
  ]
})
export class PostByUserComponent implements OnInit{
  posts: PostResponse[] = [];
  userId!: number;
  isLoading: boolean = true;
  member!: any;
  imagesByPost = new Map<number, GalleryItem[]>();

  constructor(
    private adminService: AdminService,
    private route: ActivatedRoute,
    private sharedService: SharedService,
    private toastr: ToastrService,
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.userId = +params['userId']; // Lấy userId từ URL
      this.loadMember();
      this.loadUserPosts();
    });
  }

  loadUserPosts(): void {
    this.adminService.getPostUser(this.userId).subscribe({
      next: (res: PostResponse[]) => {
        this.posts = res;
        console.log('posts', this.posts);
        this.isLoading = false;

        if (this.posts) {
          this.posts.forEach(post => {
            const galleryItems = post.photos.map(photo => new ImageItem({ src: photo.url, thumb: photo.url }));
            this.imagesByPost.set(post.id, galleryItems);
          });
        }
      },
      error: () => {
        console.error(error);
        this.isLoading = false;
      }
    })
  }

  loadMember() {
    this.adminService.getUserId(this.userId).subscribe({
      next: (res: any) => {
        console.log('user',res);
        this.member = res;
      }
    })
  }

  deletePost(postId: number) {
    this.sharedService.showNotification(
      false,
      'Confirm',
      'Are you sure you want to delete this post?'
    ).subscribe((confirm: boolean) => {
      if(confirm) {
        this.adminService.deletePost(postId).subscribe({
          next: _ => {
            this.toastr.success('Post deleted successfully!');
            this.loadUserPosts();
          },
          error: () => {
            console.error(error);
          },
        });
      }
    });
  }

}
