import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute} from '@angular/router';
import { Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  checkForm() {
    // alert('Login failed!');
    this.router.navigate(['trips']);
  }

}
