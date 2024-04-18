import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { LoadingErrorComponent } from './loading-error/loading-error.component';
import { PatientInformationComponent } from './patient-information/patient-information.component';
import { DateFormatPipe } from './date-format.pipe';
import { DefaultComponent } from './pages/default/default.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    LoadingErrorComponent,
    PatientInformationComponent,
    DateFormatPipe,
    DefaultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
