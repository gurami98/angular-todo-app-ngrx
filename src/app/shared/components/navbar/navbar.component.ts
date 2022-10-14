import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {State} from "../../../store/app.state";
import {Store} from "@ngrx/store";
import {logoutUser} from "../../../features/user/store/user.actions";
import {getCurrentUsername} from "../../../features/user/store/user.selectors";
import {Observable} from "rxjs";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent implements OnInit {

  constructor(private store: Store<State>) { }

  ngOnInit(): void {
  }

  public get userName(): Observable<any> {
    return this.store.select(getCurrentUsername);
  }

  logout(){
    this.store.dispatch(logoutUser());
  }

}
