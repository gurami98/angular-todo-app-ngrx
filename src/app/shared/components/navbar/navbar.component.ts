import { Component, OnInit } from '@angular/core';
import {State} from "../../../store/app.state";
import {Store} from "@ngrx/store";
import {logoutUser} from "../../../features/user/store/user.actions";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private store: Store<State>) { }

  ngOnInit(): void {
  }

  public get userName(): string {
    return JSON.parse(<string>localStorage.getItem('user')).username;
  }

  logout(){
    this.store.dispatch(logoutUser());
  }

}
