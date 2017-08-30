import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { DemoWelcomeComponent } from './main/demo-welcome/demo-welcome.component';
import { BankPoalimComponent } from './accounts-ui/bank-poalim/bank-poalim.component';
import { GenericLoginComponent } from './main/generic-login/generic-login.component';
import { SeconLoginComponent } from './main/secon-flow/secon-login/secon-login.component';
import { SeconVerifyComponent } from './main/secon-flow/secon-verify/secon-verify.component';
import { MainComponent } from './main/main.component';
import {appRoutes} from "./routes";
import {RouterModule} from "@angular/router";
import { SeconSiteComponent } from './secon-site/secon-site.component';
import { SeconRefererComponent } from './common/secon-referer/secon-referer.component';
import { GenericLoginSuccesComponent } from './main/generic-login-succes/generic-login-succes.component';
import {DialogModule} from "primeng/primeng";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { SeconFlowComponent } from './main/secon-flow/secon-flow.component';
import {RestApiService} from "./services/rest-api.service";


@NgModule({
  declarations: [
    AppComponent,
    DemoWelcomeComponent,
    BankPoalimComponent,
    GenericLoginComponent,
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
  providers: [RestApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }



