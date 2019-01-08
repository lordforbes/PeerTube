import { CommonModule } from '@angular/common'
import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'
import { MarkdownTextareaComponent } from '@app/shared/forms/markdown-textarea.component'
import { HelpComponent } from '@app/shared/misc/help.component'
import { InfiniteScrollerDirective } from '@app/shared/video/infinite-scroller.directive'
import { MarkdownService } from '@app/videos/shared'

import { BytesPipe, KeysPipe, NgPipesModule } from 'ngx-pipes'
import { SharedModule as PrimeSharedModule } from 'primeng/components/common/shared'

import { AUTH_INTERCEPTOR_PROVIDER } from './auth'
import { ButtonComponent } from './buttons/button.component'
import { DeleteButtonComponent } from './buttons/delete-button.component'
import { EditButtonComponent } from './buttons/edit-button.component'
import { FromNowPipe } from './misc/from-now.pipe'
import { LoaderComponent } from './misc/loader.component'
import { NumberFormatterPipe } from './misc/number-formatter.pipe'
import { ObjectLengthPipe } from './misc/object-length.pipe'
import { RestExtractor, RestService } from './rest'
import { UserService } from './users'
import { VideoAbuseService } from './video-abuse'
import { VideoBlacklistService } from './video-blacklist'
import { VideoOwnershipService } from './video-ownership'
import { VideoMiniatureComponent } from './video/video-miniature.component'
import { FeedComponent } from './video/feed.component'
import { VideoThumbnailComponent } from './video/video-thumbnail.component'
import { VideoService } from './video/video.service'
import { AccountService } from '@app/shared/account/account.service'
import { VideoChannelService } from '@app/shared/video-channel/video-channel.service'
import { I18n } from '@ngx-translate/i18n-polyfill'
import { FormValidatorService } from '@app/shared/forms/form-validators/form-validator.service'
import {
  CustomConfigValidatorsService,
  LoginValidatorsService,
  ReactiveFileComponent,
  ResetPasswordValidatorsService,
  TextareaAutoResizeDirective,
  UserValidatorsService,
  VideoAbuseValidatorsService,
  VideoAcceptOwnershipValidatorsService,
  VideoBlacklistValidatorsService,
  VideoChangeOwnershipValidatorsService,
  VideoChannelValidatorsService,
  VideoCommentValidatorsService,
  VideoValidatorsService
} from '@app/shared/forms'
import { I18nPrimengCalendarService } from '@app/shared/i18n/i18n-primeng-calendar'
import { ScreenService } from '@app/shared/misc/screen.service'
import { VideoCaptionsValidatorsService } from '@app/shared/forms/form-validators/video-captions-validators.service'
import { VideoCaptionService } from '@app/shared/video-caption'
import { PeertubeCheckboxComponent } from '@app/shared/forms/peertube-checkbox.component'
import { VideoImportService } from '@app/shared/video-import/video-import.service'
import { ActionDropdownComponent } from '@app/shared/buttons/action-dropdown.component'
import { NgbDropdownModule, NgbModalModule, NgbPopoverModule, NgbTabsetModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap'
import { RemoteSubscribeComponent, SubscribeButtonComponent, UserSubscriptionService } from '@app/shared/user-subscription'
import { InstanceFeaturesTableComponent } from '@app/shared/instance/instance-features-table.component'
import { OverviewService } from '@app/shared/overview'
import { UserBanModalComponent } from '@app/shared/moderation'
import { UserModerationDropdownComponent } from '@app/shared/moderation/user-moderation-dropdown.component'
import { BlocklistService } from '@app/shared/blocklist'
import { TopMenuDropdownComponent } from '@app/shared/menu/top-menu-dropdown.component'
import { UserHistoryService } from '@app/shared/users/user-history.service'
import { UserNotificationService } from '@app/shared/users/user-notification.service'
import { UserNotificationsComponent } from '@app/shared/users/user-notifications.component'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,

    NgbDropdownModule,
    NgbModalModule,
    NgbPopoverModule,
    NgbTabsetModule,
    NgbTooltipModule,

    PrimeSharedModule,
    NgPipesModule
  ],

  declarations: [
    LoaderComponent,
    VideoThumbnailComponent,
    VideoMiniatureComponent,
    FeedComponent,
    ButtonComponent,
    DeleteButtonComponent,
    EditButtonComponent,
    ActionDropdownComponent,
    NumberFormatterPipe,
    ObjectLengthPipe,
    FromNowPipe,
    MarkdownTextareaComponent,
    InfiniteScrollerDirective,
    TextareaAutoResizeDirective,
    HelpComponent,
    ReactiveFileComponent,
    PeertubeCheckboxComponent,
    SubscribeButtonComponent,
    RemoteSubscribeComponent,
    InstanceFeaturesTableComponent,
    UserBanModalComponent,
    UserModerationDropdownComponent,
    TopMenuDropdownComponent,
    UserNotificationsComponent
  ],

  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,

    NgbDropdownModule,
    NgbModalModule,
    NgbPopoverModule,
    NgbTabsetModule,
    NgbTooltipModule,

    PrimeSharedModule,
    BytesPipe,
    KeysPipe,

    LoaderComponent,
    VideoThumbnailComponent,
    VideoMiniatureComponent,
    FeedComponent,
    ButtonComponent,
    DeleteButtonComponent,
    EditButtonComponent,
    ActionDropdownComponent,
    MarkdownTextareaComponent,
    InfiniteScrollerDirective,
    TextareaAutoResizeDirective,
    HelpComponent,
    ReactiveFileComponent,
    PeertubeCheckboxComponent,
    SubscribeButtonComponent,
    RemoteSubscribeComponent,
    InstanceFeaturesTableComponent,
    UserBanModalComponent,
    UserModerationDropdownComponent,
    TopMenuDropdownComponent,
    UserNotificationsComponent,

    NumberFormatterPipe,
    ObjectLengthPipe,
    FromNowPipe
  ],

  providers: [
    AUTH_INTERCEPTOR_PROVIDER,
    RestExtractor,
    RestService,
    VideoAbuseService,
    VideoBlacklistService,
    VideoOwnershipService,
    UserService,
    VideoService,
    AccountService,
    MarkdownService,
    VideoChannelService,
    VideoCaptionService,
    VideoImportService,
    UserSubscriptionService,

    FormValidatorService,
    CustomConfigValidatorsService,
    LoginValidatorsService,
    ResetPasswordValidatorsService,
    UserValidatorsService,
    VideoAbuseValidatorsService,
    VideoChannelValidatorsService,
    VideoCommentValidatorsService,
    VideoValidatorsService,
    VideoCaptionsValidatorsService,
    VideoBlacklistValidatorsService,
    OverviewService,
    VideoChangeOwnershipValidatorsService,
    VideoAcceptOwnershipValidatorsService,
    BlocklistService,
    UserHistoryService,

    I18nPrimengCalendarService,
    ScreenService,

    UserNotificationService,

    I18n
  ]
})
export class SharedModule { }
