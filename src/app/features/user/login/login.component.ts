import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { UserService } from '@core/services/user.service';
import { Store } from '@ngrx/store';
import { State } from '@store/app.state';
import * as UserActions from '../store/user.actions';
import { MyErrorStateMatcher } from '@core/utils/error-state-matcher';
import { getIsLoading } from '@features/user/store/user.selectors';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  loginForm: FormGroup;
  matcher = new MyErrorStateMatcher();

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private userService: UserService,
    private store: Store<State>
  ) {
    this.loginForm = fb.group({
      email: fb.control('', [Validators.required, Validators.email]),
      password: fb.control('', [Validators.required, Validators.minLength(6)]),
    });
  }

  login(): void {
    if (this.loginForm.invalid) {
      return;
    }
    this.store.dispatch(UserActions.loginUser({ user: this.loginForm.value }));
  }

  public get isLoading() {
    return this.store.select(getIsLoading);
  }
}
