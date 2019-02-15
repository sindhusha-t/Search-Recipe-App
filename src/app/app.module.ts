import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StorageServiceModule} from 'ngx-webstorage-service';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { routing} from './app.routing';
import {LocalStorageService} from './local-storage.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ControlMessagesComponent } from './control-messages/control-messages.component';
import {ValidationService} from './validation.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ControlMessagesComponent
  ],
  imports: [
    BrowserModule,
    routing,
    StorageServiceModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [LocalStorageService, ValidationService],
  bootstrap: [AppComponent]
})
export class AppModule {
  private static HttpModule: any;
}
