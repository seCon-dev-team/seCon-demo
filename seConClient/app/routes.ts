import {Routes} from "@angular/router";
import {DemoWelcomeComponent} from "./main/login-flow/demo-welcome/demo-welcome.component";
import {GenericLoginComponent} from "./main/login-flow/generic-login/generic-login.component";
import {MainComponent} from "./main/main.component";
import {SeconLoginComponent} from "./main/login-flow/secon-login/secon-login.component";
import {SeconVerifyComponent} from "./main/login-flow/secon-verify/secon-verify.component";
import {SeconSiteComponent} from "./secon-site/secon-site.component";
import {GenericLoginSuccesComponent} from "./main/login-flow/generic-login-succes/generic-login-succes.component";


export const appRoutes: Routes = [
  {
    path: '',
    component: MainComponent,
    children:[
      {path: '', component: DemoWelcomeComponent},
      {path: 'generic-login/:accountTypeId', component: GenericLoginComponent},
      {path: 'secon-login/:username', component: SeconLoginComponent, canActivate:[]},
      {path: 'secon-verify', component: SeconVerifyComponent, canActivate:[]},
      {path: 'succesful-login', component: GenericLoginSuccesComponent, canActivate:[]},
    ]
  },

  {path: 'secon', component: SeconSiteComponent}
];
