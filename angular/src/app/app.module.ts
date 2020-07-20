import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './_app/app.component';
import { PageRegisterComponent } from './page-register/page-register.component';
import { PageLoginComponent } from './page-login/page-login.component';
import { PageFeedComponent } from './page-feed/page-feed.component';
import { PageProfileComponent } from './page-profile/page-profile.component';
import { PageMessagesComponent } from './page-messages/page-messages.component';
import { PageSearchesComponent } from './page-searches/page-searches.component';
import { PageFriendRequestsComponent } from './page-friend-requests/page-friend-requests.component';
import { ResultRequestComponent } from './result-request/result-request.component';
import { PostComponent } from './post/post.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopbarComponent } from './topbar/topbar.component';
import { FormBgComponent } from './form-bg/form-bg.component';
import { HttpClientModule } from '@angular/common/http';
import { PageForgotPasswordComponent } from './page-forgot-password/page-forgot-password.component';
import { PageResetPasswordComponent } from './page-reset-password/page-reset-password.component';
import { PageApplicationsComponent } from './page-applications/page-applications.component';

@NgModule({
  declarations: [
    AppComponent,
    PageRegisterComponent,
    PageLoginComponent,
    PageFeedComponent,
    PageProfileComponent,
    PageMessagesComponent,
    PageSearchesComponent,
    PageFriendRequestsComponent,
    ResultRequestComponent,
    PostComponent,
    SidebarComponent,
    TopbarComponent,
    FormBgComponent,
    PageForgotPasswordComponent,
    PageResetPasswordComponent,
    PageApplicationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
