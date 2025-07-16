import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BurgersListComponent } from './burgers-list/burgers-list.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NtburgersBurgersComponent } from './ntburgers-burgers/ntburgers-burgers.component';
import { NtburgersAboutComponent } from './ntburgers-about/ntburgers-about.component';
import { CartComponent } from './cart/cart.component';
import { InputNumberComponent } from './input-number/input-number.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NtburgersHomeComponent } from './ntburgers-home/ntburgers-home.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';

@NgModule({
  declarations: [
    AppComponent,
    BurgersListComponent,
    NtburgersBurgersComponent,
    NtburgersAboutComponent,
    CartComponent,
    InputNumberComponent,
    NtburgersHomeComponent,
    ReactiveFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
