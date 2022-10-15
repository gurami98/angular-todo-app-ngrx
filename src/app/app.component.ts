import { ChangeDetectionStrategy, Component } from '@angular/core';
import { State } from '@store/app.state';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getCurrentUser } from '@features/user/store/user.selectors';
import { IUser } from '@shared/models/user.interfae';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'angular-todo-ngrx';

  constructor(private store: Store<State>) {}

  public get isUserLoggedIn(): Observable<IUser | null> {
    return this.store.select(getCurrentUser);
  }
}
