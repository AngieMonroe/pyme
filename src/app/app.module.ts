import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestore } from '@angular/fire/firestore';
import { AppRoutingModule } from './app-routing.module';
import { environment } from '../environments/environment';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//servicios
import { AuthService } from '../services/auth.service';
import {ConectionDataService } from 'src/services/conection-data.service'

//componentes
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { RegistryUserComponent } from './components/registry-user/registry-user.component';
import { RegistryDataComponent } from './components/registry-data/registry-data.component';
import { DataComponent } from './components/data/data.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { SliderComponent } from './components/slider/slider.component';
import { NgImageSliderModule } from 'ng-image-slider';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegistryUserComponent,
    RegistryDataComponent,
    DataComponent,
    NavbarComponent,
    FooterComponent,
    HeaderComponent,
    SliderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    FormsModule,
    ReactiveFormsModule,
    NgImageSliderModule
  ],
  providers: [ AuthService, ConectionDataService, AngularFirestore ],
  bootstrap: [AppComponent]
})
export class AppModule { }
