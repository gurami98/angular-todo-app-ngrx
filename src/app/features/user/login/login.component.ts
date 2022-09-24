import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {UserService} from "../../../core/services/user.service";
import {Store} from "@ngrx/store";
import {State} from "../../../store/app.state";
import * as UserActions from '../store/user.actions'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient, private userService: UserService, private store: Store<State>) {
    this.loginForm = fb.group({
      email: fb.control('', Validators.required),
      password: fb.control('', Validators.required)
    })
  }

  ngOnInit(): void {
  }

  login(): void{
    // this.userService.loginUser(this.loginForm.value).subscribe()
    this.store.dispatch(UserActions.loginUser({user: this.loginForm.value}));
  }

}
