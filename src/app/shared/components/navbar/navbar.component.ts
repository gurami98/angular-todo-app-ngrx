import { ChangeDetectionStrategy, Component } from '@angular/core';
import { State } from '../../../store/app.state';
import { Store } from '@ngrx/store';
import { logoutUser } from '../../../features/user/store/user.actions';
import { getCurrentUsername } from '../../../features/user/store/user.selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  constructor(private store: Store<State>) {}

  public get userName(): Observable<string> {
    return this.store.select(getCurrentUsername) as Observable<string>;
  }

  logout() {
    this.store.dispatch(logoutUser());
  }
}
