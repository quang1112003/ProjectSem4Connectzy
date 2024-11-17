import { Photo } from './photo.model';
import { PostVisibility } from './post.model';

export interface PostResponse {
    id: any;
    content: string;
    createdAt: Date;
    updatedAt: Date;
    user: User;
    photos: Photo[];
    visibility: PostVisibility;
}

export interface User {
    id: any;
    firstName: string;
    lastName: string;
    knowAs: string;
    photoUrl: string;
}

export interface UserLikePost {
    id: number
    userId: number
    userKnowAs: string
    userEmail: string;
    photoUrl: string;
    postId: number
    postContent: string
    createdAt: string
}