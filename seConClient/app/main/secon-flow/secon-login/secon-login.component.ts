import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-secon-login',
  templateUrl: 'secon-login.component.html',
  styleUrls: ['secon-login.component.scss']
})
export class SeconLoginComponent implements OnInit {

  private userName: string;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.userName = this.activatedRoute.snapshot.params['username'];
  }

}
