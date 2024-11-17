import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemberListComponent } from './member-list/member-list.component';
import { SharedModule } from '../shared/shared.module';
import { MemberRoutingModule } from './member-routing.module';
import { MemberCardComponent } from './member-card/member-card.component';
import { MemberEditComponent } from './member-edit/member-edit.component';
import { PhotoEditorComponent } from './photo-editor/photo-editor.component';
import { MemberDetailsComponent } from "./member-details/member-details.component";
import { ListPostMemberComponent } from "./list-post-member/list-post-member.component";
import { NotificationUpdateInfomationComponent } from './notification-update-infomation/notification-update-infomation.component';
import { ListUserLikeComponent } from './list-user-like/list-user-like.component';
@NgModule({
  declarations: [
    MemberListComponent,
    MemberCardComponent,
    MemberEditComponent,
    PhotoEditorComponent,
    NotificationUpdateInfomationComponent,
    ListUserLikeComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    MemberRoutingModule,
    MemberDetailsComponent,
    ListPostMemberComponent
]
})
export class MemberModule { }
