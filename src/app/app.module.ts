import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AccountsGoogleLoginComponent } from './accounts_google_login/accounts_google_login.component';
import { ServicesComponent } from './services/services.component';
import { ServicesModalComponent } from './services/modal.component';
import { NotFoundComponent } from './notfound/notfound.component';


const routes: Routes = [
  { path: '', component: LoginComponent, pathMatch: 'full', },
  // TODO: replace this
  { path: 'accounts/google/login/?process=login', component: AccountsGoogleLoginComponent, pathMatch: 'full',  },
  { path: 'services', component: ServicesComponent, },
  { path: '**', component: NotFoundComponent, },
];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AccountsGoogleLoginComponent,
    ServicesComponent,
    ServicesModalComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    Angular2FontawesomeModule,
    RouterModule.forRoot(routes)
  ],
  entryComponents: [
    ServicesModalComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
