import {Routes} from "@angular/router";
import {DemoWelcomeComponent} from "./main/demo-welcome/demo-welcome.component";
import {GenericLoginComponent} from "./main/generic-login/generic-login.component";
import {MainComponent} from "./main/main.component";
import {SeconLoginComponent} from "./main/secon-flow/secon-login/secon-login.component";
import {SeconVerifyComponent} from "./main/secon-flow/secon-verify/secon-verify.component";
import {SeconSiteComponent} from "./secon-site/secon-site.component";
import {GenericLoginSuccesComponent} from "./main/generic-login-succes/generic-login-succes.component";
import {SeconFlowComponent} from "./main/secon-flow/secon-flow.component";


export const appRoutes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {path: '', component: DemoWelcomeComponent},
      {
        path: 'generic-login/:accountTypeId', component: GenericLoginComponent,
        children: [
          {
            path: 'secon-flow', component: SeconFlowComponent, canActivate: [],
            children: [
              {path: '', redirectTo: 'secon-login/:username', pathMatch: 'full'},
              {path: 'secon-login/:username', component: SeconLoginComponent, canActivate: []},
              {path: 'secon-verify', component: SeconVerifyComponent, canActivate: []}
            ]
          }
        ]
      },
      {path: 'succesful-login', component: GenericLoginSuccesComponent, canActivate: []},
    ]
  },

  {path: 'secon', component: SeconSiteComponent}
];
