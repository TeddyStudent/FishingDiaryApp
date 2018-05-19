import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoverComponent } from './cover/cover.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TripsComponent } from './trips/trips.component';
import { HttpClientModule} from '@angular/common/http';
import { DataService} from './data.service';

@NgModule({
  declarations: [
    AppComponent,
    CoverComponent,
    LoginComponent,
    RegisterComponent,
    TripsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
