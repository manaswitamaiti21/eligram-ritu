import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { CompleteProfileComponent } from './components/auth/complete-profile/complete-profile.component';
import { ForgotPasswordComponent } from './components/auth/forgot-password/forgot-password.component';
import { LoginComponent } from './components/auth/login/login.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { VerifyEmailComponent } from './components/auth/verify-email/verify-email.component';
import { FeedComponent } from './components/home/feed/feed.component';
import { NotFoundComponent } from './components/misc/not-found/not-found.component';
import { ProfileHomeComponent } from './components/user/profile-home/profile-home.component';
import { ChangePasswordComponent } from './components/user/settings/change-password/change-password.component';
import { EditProfileComponent } from './components/user/settings/edit-profile/edit-profile.component';
import { PrivacySecurityComponent } from './components/user/settings/privacy-security/privacy-security.component';
import { SettingsComponent } from './components/user/settings/settings.component';
import { AdminGuard } from './guards/admin.guard';
import { AnonymousGuard } from './guards/anonymous.guard';
import { AuthGuard } from './guards/auth.guard';
import { CompleteProfileGuard } from './guards/complete-profile.guard';
import { VerifyEmailGuard } from './guards/verify-email.guard';

const routes: Routes = [
  { path: '', component: FeedComponent, canActivate: [AuthGuard] },
  {
    path: 'auth',
    children: [
      {
        path: 'login',
        component: LoginComponent,
        canActivate: [AnonymousGuard],
      },
      {
        path: 'signup',
        component: SignupComponent,
        canActivate: [AnonymousGuard],
      },
      {
        path: 'forgot-password',
        component: ForgotPasswordComponent,
        canActivate: [AnonymousGuard],
      },
      {
        path: 'verify-email',
        component: VerifyEmailComponent,
        canActivate: [VerifyEmailGuard],
      },
      {
        path: 'complete-profile',
        component: CompleteProfileComponent,
        canActivate: [CompleteProfileGuard],
      },
    ],
  },
  {
    path: 'admin',
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [AuthGuard, AdminGuard],
      },
    ],
  },
  {
    path: 'u/:username',
    component: ProfileHomeComponent,
  },
  {
    path: 'settings',
    component: SettingsComponent,
  },
  {
    path: 'not-found',
    component: NotFoundComponent,
  },
  {
    path: '**',
    redirectTo: '/not-found',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
