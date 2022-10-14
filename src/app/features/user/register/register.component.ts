import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {UserService} from "../../../core/services/user.service";
import {MyErrorStateMatcher} from "../../../core/utils/error-state-matcher";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss', '../login/login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  matcher = new MyErrorStateMatcher();

  constructor(private fb: FormBuilder, private http: HttpClient, private userService: UserService) {
    this.registerForm = fb.group({
      email: fb.control('', [Validators.required, Validators.email]),
      username: fb.control('', [Validators.required, Validators.minLength(3)]),
      password: fb.control('', [Validators.required, Validators.minLength(6)]),
    });
  }

  ngOnInit(): void {
  }

  register(): void{
    if(this.registerForm.invalid){
      return;
    }
    this.userService.registerUser(this.registerForm.value).subscribe();
  }

  get isLoading() {
    return this.userService.loading;
  }

}
