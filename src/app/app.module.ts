import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GithubComponent } from './github/github.component';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { TokenInterceptorService } from './github-services/tokeninterceptor.service';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [AppComponent, GithubComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule,FormsModule,NgxPaginationModule],
  providers: [
    { provide: HTTP_INTERCEPTORS,useClass: TokenInterceptorService,multi: true}
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
