import {Component, OnInit, Input} from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-secon-flow',
  templateUrl: './secon-flow.component.html',
  styleUrls: ['./secon-flow.component.scss']
})
export class SeconFlowComponent implements OnInit {

  private display: boolean = true;

  constructor(private _location: Location) { }

  ngOnInit() {
  }

  goBackToLoginPage(){
    this._location.back();
  }

  cancel() {
    this.display = false;
  }

  approve() {
    this.display = false;
  }

}


///
