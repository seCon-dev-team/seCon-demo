import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-generic-login',
  templateUrl: 'generic-login.component.html',
  styleUrls: ['generic-login.component.scss']
})
export class GenericLoginComponent implements OnInit {

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }

  onSeconUsernameAuthSuccess(userName){
    let parentPath = './generic-login/' + this.activatedRoute.snapshot.params['accountTypeId'] + '/secon-flow';
    this.router.navigate([parentPath, 'secon-login', userName]);
  }

}



