import { Routes } from '@angular/router';
import { ChatComponent } from './pages/chat/chat.component';
import { LoginComponent } from './pages/login/login.component';
import { authGuard } from './auth.guard';

export const routes: Routes = [
    {path: 'chat', component: ChatComponent, canActivate: [authGuard]},
    {path: 'login', component: LoginComponent},
    {path: '', component: LoginComponent}
];
