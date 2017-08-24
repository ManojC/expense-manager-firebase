import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { Routes } from "./app-routes";
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CanActivateViaAuthGuard } from "./auth-guard.service";
import { HomeComponent } from './home/home.component';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        RegisterComponent,
        PageNotFoundComponent,
        HomeComponent
    ],
    imports: [
        BrowserModule,
        CommonModule,
        RouterModule.forRoot(Routes),
        FormsModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireDatabaseModule,
        AngularFireAuthModule,
    ],
    exports: [
        AppComponent,
        LoginComponent
    ],
    providers: [CanActivateViaAuthGuard],
    bootstrap: [AppComponent]
})
export class AppModule { }