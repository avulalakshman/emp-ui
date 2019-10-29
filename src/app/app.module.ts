import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { AddempComponent } from './emp/addemp/addemp.component';
import { EmplistComponent } from './emp/emplist/emplist.component';
import { CommonComponent } from './emp/common/common.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {
  MatButtonModule, MatCardModule, MatDialogModule,
  MatInputModule, MatTableModule,
  MatToolbarModule, MatMenuModule, MatIconModule, MatProgressSpinnerModule,
  MatDividerModule,
  MatListModule,
  MatFormFieldModule,

  MatSelectModule,
} from '@angular/material';
import { EmpService } from './emp/emp.service';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms'
import { TokenInterceptor } from './tokenInterceptor';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddempComponent,
    EmplistComponent,
    CommonComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatDividerModule,
    MatListModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    HttpClientModule,
    MatButtonModule, MatCardModule, MatDialogModule, MatTableModule,
    MatMenuModule, MatIconModule, MatProgressSpinnerModule,
    FormsModule
  ],
  providers: [EmpService, {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
