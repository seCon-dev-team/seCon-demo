import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-secon-login',
  templateUrl: 'secon-login.component.html',
  styleUrls: ['secon-login.component.scss']
})
export class SeconLoginComponent implements OnInit {

  private userName: string;
  private seConAccountPassword: string;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.userName = this.activatedRoute.snapshot.params['username'];
  }

  goToVerifyFlow(){
    //todo - integration to the seCon-login api, and route after success
    this.router.navigate(["../../secon-verify"], { relativeTo: this.activatedRoute });
  }

}
