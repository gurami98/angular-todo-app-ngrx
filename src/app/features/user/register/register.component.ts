import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {UserService} from "../../../core/services/user.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient, private userService: UserService) {
    this.registerForm = fb.group({
      email: fb.control('', Validators.required),
      username: fb.control('', Validators.required),
      password: fb.control('', Validators.required),
    })
  }

  ngOnInit(): void {
  }

  register(): void{
    this.userService.registerUser(this.registerForm.value).subscribe()
  }

}
