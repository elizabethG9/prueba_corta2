import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './_components/navbar/navbar.component';
import { FooterComponent } from './_components/footer/footer.component';
import { MemberListComponent } from './_pages/member-list/member-list.component';
import { CreateMemberComponent } from './_components/create-member/create-member.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditMemberComponent } from './_components/edit-member/edit-member.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    MemberListComponent,
    CreateMemberComponent,
    EditMemberComponent,
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule , FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
