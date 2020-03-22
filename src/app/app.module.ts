import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { LoginComponent } from './login/login.component';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { SignUpComponent } from './login/sign-up/sign-up.component';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { AuthService } from './services/auth.service';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { BaseComponent } from './base/base.component';
import { AuthGuardService as AuthGuard } from './services/auth-guard.service';
import { HomeComponent } from './home/home.component';


registerLocaleData(en);

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent},
/*   { path: 'base', component: BaseComponent, canActivate: [AuthGuard]}, */
  { path: '', component: HomeComponent, canActivate: [AuthGuard]},
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard]}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    BaseComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzMenuModule,
    NzLayoutModule,
    NzCardModule,
    NzInputModule,
    NzButtonModule,
    NzModalModule,
    NzFormModule,
    NzSelectModule,
    ReactiveFormsModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebase),
    NzRadioModule,
    NzDatePickerModule,
    RouterModule.forRoot(appRoutes)
  ],

  exports: [RouterModule],
  providers: [{ provide: NZ_I18N, useValue: en_US },
              {provide: AuthService}],
  bootstrap: [AppComponent]
})
export class AppModule { }