import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";
import {RestApiService} from "../../services/rest-api.service";

@Component({
  selector: 'app-generic-login',
  templateUrl: 'generic-login.component.html',
  styleUrls: ['generic-login.component.scss']
})
export class GenericLoginComponent implements OnInit {

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private restApi: RestApiService) { }

  ngOnInit() {
  }

  onSeconUsernameSent(userName){
    this.restApi.verifySeconUsernameEmail(userName)
      .subscribe((response) => {
        let parentPath = './generic-login/' + this.activatedRoute.snapshot.params['accountTypeId'] + '/secon-flow';
        this.router.navigate([parentPath, 'secon-login', response.userName]);
      });


  }

}



