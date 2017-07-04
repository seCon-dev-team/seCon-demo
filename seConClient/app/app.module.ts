import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DemoWelcomeComponent } from './main/login-flow/demo-welcome/demo-welcome.component';
import { BankPoalimComponent } from './accounts-ui/bank-poalim/bank-poalim.component';
import { GenericLoginComponent } from './main/login-flow/generic-login/generic-login.component';
import { LoginFlowComponent } from './main/login-flow/login-flow.component';
import { SeconLoginComponent } from './main/login-flow/secon-flow/secon-login/secon-login.component';
import { SeconVerifyComponent } from './main/login-flow/secon-flow/secon-verify/secon-verify.component';
import { MainComponent } from './main/main.component';
import {appRoutes} from "./routes";
import {RouterModule} from "@angular/router";
import { SeconSiteComponent } from './secon-site/secon-site.component';
import { SeconRefererComponent } from './common/secon-referer/secon-referer.component';
import { GenericLoginSuccesComponent } from './main/login-flow/generic-login-succes/generic-login-succes.component';
import {DialogModule} from "primeng/primeng";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { SeconFlowComponent } from './main/login-flow/secon-flow/secon-flow.component';


@NgModule({
  declarations: [
    AppComponent,
    DemoWelcomeComponent,
    BankPoalimComponent,
    GenericLoginComponent,
    LoginFlowComponent,
    SeconLoginComponent,
    SeconVerifyComponent,
    MainComponent,
    SeconSiteComponent,
    SeconRefererComponent,
    GenericLoginSuccesComponent,
    SeconFlowComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes, { useHash: true }),
    DialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



