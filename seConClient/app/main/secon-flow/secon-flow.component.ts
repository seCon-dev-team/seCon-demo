import {Component, OnInit, Input} from '@angular/core';
import {Location} from '@angular/common';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-secon-flow',
  templateUrl: './secon-flow.component.html',
  styleUrls: ['./secon-flow.component.scss']
})
export class SeconFlowComponent implements OnInit {

  private display: boolean = true;

  constructor(private _location: Location, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }

  goBackToLoginPage(){
    console.log(this.activatedRoute.snapshot.parent.params['accountTypeId']);
    let parentPath = './generic-login/' + this.activatedRoute.snapshot.parent.params['accountTypeId'];
    this.router.navigate([parentPath]);
  }

  cancel() {
    this.display = false;
  }

  approve() {
    this.display = false;
  }

}
