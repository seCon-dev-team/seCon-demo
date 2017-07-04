import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-generic-login',
  templateUrl: 'generic-login.component.html',
  styleUrls: ['generic-login.component.scss']
})
export class GenericLoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSeconUsernameAuthSuccess(userName){
    this.router.navigate(['secon-flow/secon-login', userName]);
  }

}
