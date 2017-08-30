import { Component, OnInit } from '@angular/core';
import {ACCOUNTS_DEFINITION} from '../../constants/accounts.config';
import {Router} from "@angular/router";

@Component({
  selector: 'app-demo-welcome',
  templateUrl: 'demo-welcome.component.html',
  styleUrls: ['demo-welcome.component.scss']
})
export class DemoWelcomeComponent implements OnInit {

  private accountsMetadata = ACCOUNTS_DEFINITION.accountsMetaData;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigateTologinFlow(accountId){
    this.router.navigate(['/generic-login', accountId]);
  }

}
