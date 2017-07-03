import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-secon-referer',
  templateUrl: 'secon-referer.component.html',
  styleUrls: ['secon-referer.component.scss']
})
export class SeconRefererComponent implements OnInit {

  private showSeconUsernameInput: boolean = false;
  private display: boolean = false;
  private seconUsername: string = '';

  @Output() seconUsernameAuthSuccess = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  showSeconUserNameInput(){
    this.showSeconUsernameInput = true;
  }

  sendSeconUserName(){
    //todo - emit event only after api success
    this.seconUsernameAuthSuccess.emit(this.seconUsername);
  }
}
