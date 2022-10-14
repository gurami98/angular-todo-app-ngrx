import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotFoundComponent implements OnDestroy {
  countdown: BehaviorSubject<number> = new BehaviorSubject<number>(5);
  countdownNumber: number = 5;

  countdownInterval = setInterval(() => {
    this.countdownNumber = this.countdownNumber - 1;
    this.countdown.next(this.countdownNumber);
  }, 1000);

  redirectTimer = setTimeout(() => {
    this.router.navigateByUrl('/');
  }, 5000);

  constructor(private router: Router) {}

  ngOnDestroy() {
    clearInterval(this.countdownInterval);
    clearTimeout(this.redirectTimer);
  }
}
