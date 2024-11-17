import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient, HttpParams } from '@angular/common/http';
import { User } from '../shared/models/account/user.model';
import { Observable } from 'rxjs';
import { PostResponse } from '../shared/models/user/post-response.model';
interface UserResponseDto {
  id: string;
  knowAs: string;
  email: string;
  role: string;
  accountLocked: boolean;
}

interface PaginatedResponse<T> {
  content: T[];
  totalElements: number;
  totalPages: number;
  size: number;
  number: number;
}
@Injectable({
  providedIn: 'root'
})
export class AdminService {
  api = environment.appUrl;

  private http = inject(HttpClient);

  constructor() { }

  getAllUsers(page: number, size: number): Observable<PaginatedResponse<UserResponseDto>> {
    const params = new HttpParams()
      .set('pageNumber', page.toString())
      .set('pageSize', size.toString());

    return this.http.get<PaginatedResponse<UserResponseDto>>(`${this.api}/admin`, { params });
  }

  lockAccount(userId: any) {
    return this.http.post(`${this.api}/admin/lock/${userId}`,{});
  }

  unlockAccount(userId: any) {
    return this.http.post(`${this.api}/admin/unlock/${userId}`,{});
  }

  getPostUser(userId: any) {
    return this.http.get<PostResponse[]>(`${this.api}/admin/post-by-user/${userId}`);
  }

  getUserId(userId: any) {
    return this.http.get(`${this.api}/users/get-by-id/${userId}`);
  }

  deletePost(postId: number) {
    return this.http.delete(`${this.api}/admin/post/${postId}`);
  }
  
}
