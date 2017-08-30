import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-secon-verify',
  templateUrl: 'secon-verify.component.html',
  styleUrls: ['secon-verify.component.scss']
})
export class SeconVerifyComponent implements OnInit {

  private clickCounts: number = 0;
  private booleanMat = {
    0: [false, false, false],
    1: [false, false, false],
    2: [false, false, false]
  };

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  onImageClick(imgRowIndex, imgSingleIndex) {
    this.booleanMat[imgRowIndex][imgSingleIndex] = !this.booleanMat[imgRowIndex][imgSingleIndex];
    this.clickCounts++;

    if (this.clickCounts == 3) {
      //todo - integration with validateClickableImages & complete login after success
      this.router.navigate(["succesful-login"]);

    }

  }

}
