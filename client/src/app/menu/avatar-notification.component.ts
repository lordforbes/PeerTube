import { Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core'
import { User } from '../shared/users/user.model'
import { UserNotificationService } from '@app/shared/users/user-notification.service'
import { Subscription } from 'rxjs'
import { Notifier } from '@app/core'
import { NgbPopover } from '@ng-bootstrap/ng-bootstrap'
import { NavigationEnd, Router } from '@angular/router'
import { filter } from 'rxjs/operators'

@Component({
  selector: 'my-avatar-notification',
  templateUrl: './avatar-notification.component.html',
  styleUrls: [ './avatar-notification.component.scss' ]
})
export class AvatarNotificationComponent implements OnInit, OnDestroy {
  @ViewChild('popover') popover: NgbPopover
  @Input() user: User

  unreadNotifications = 0

  private notificationSub: Subscription
  private routeSub: Subscription

  constructor (
    private userNotificationService: UserNotificationService,
    private notifier: Notifier,
    private router: Router
  ) {}

  ngOnInit () {
    this.userNotificationService.countUnreadNotifications()
      .subscribe(
        result => {
          this.unreadNotifications = Math.min(result, 99) // Limit number to 99
          this.subscribeToNotifications()
        },

        err => this.notifier.error(err.message)
      )

    this.routeSub = this.router.events
                        .pipe(filter(event => event instanceof NavigationEnd))
                        .subscribe(() => this.closePopover())
  }

  ngOnDestroy () {
    if (this.notificationSub) this.notificationSub.unsubscribe()
    if (this.routeSub) this.routeSub.unsubscribe()
  }

  closePopover () {
    this.popover.close()
  }

  private subscribeToNotifications () {
    this.notificationSub = this.userNotificationService.getMyNotificationsSocket()
                               .subscribe(data => {
                                 if (data.type === 'new') return this.unreadNotifications++
                                 if (data.type === 'read') return this.unreadNotifications--
                                 if (data.type === 'read-all') return this.unreadNotifications = 0
                               })
  }

}
