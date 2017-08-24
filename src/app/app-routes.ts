import { Route } from "@angular/router";
import { CanActivateViaAuthGuard } from "./auth-guard.service";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

export const Routes: Route[] = [
    {
        path: '',
        redirectTo: 'home',
        canActivate: [CanActivateViaAuthGuard],
        pathMatch: 'full',
    },
    {
        path: 'home',
        component: HomeComponent,
        canActivate: [CanActivateViaAuthGuard],
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: '*',
        component: PageNotFoundComponent
    }
];