import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-secon-verify',
  templateUrl: 'secon-verify.component.html',
  styleUrls: ['secon-verify.component.scss']
})
export class SeconVerifyComponent implements OnInit {

  private clickCounts: number = 0;

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  onImageClick(event) {

    console.log(event);
    this.clickCounts++;

    if(this.clickCounts == 3){
      //todo - integration with validateClickableImages & complete login after success
      this.router.navigate(["succesful-login"]);

    }

  }

}
