import { Component, OnInit } from '@angular/core';
import {ACCOUNTS_DEFINITION} from '../../constants/accounts.config';

@Component({
  selector: 'app-demo-welcome',
  templateUrl: 'demo-welcome.component.html',
  styleUrls: ['demo-welcome.component.scss']
})
export class DemoWelcomeComponent implements OnInit {

  private accountsMetadata = ACCOUNTS_DEFINITION.accountsMetaData;

  constructor() { }

  ngOnInit() {
  }

}
