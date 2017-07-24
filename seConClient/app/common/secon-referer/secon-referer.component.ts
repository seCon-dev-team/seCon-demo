import {Component, OnInit, Output, EventEmitter, ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-secon-referer',
  templateUrl: 'secon-referer.component.html',
  styleUrls: ['secon-referer.component.scss']
})
export class SeconRefererComponent implements OnInit {
  @ViewChild('seconUsernameInput') seconUsernameInput:any ;

  private showSeconUsernameInput: boolean = false;
  private display: boolean = false;

  private seconUsername: string = '';
  @Output() seconUsernameAuthSuccess = new EventEmitter();

  constructor() {
  }

  ngOnInit() {}

  showSeconUserNameInput() {
    this.showSeconUsernameInput = true;
    setTimeout(()=>{
      this.seconUsernameInput.nativeElement.focus();
    },0);
  }

  sendSeconUserName() {
    //todo - emit event only after api success
    this.seconUsernameAuthSuccess.emit(this.seconUsername);
  }

  ngAfterViewInit(){
    console.log(this.seconUsernameInput.nativeElement);
  }
}
