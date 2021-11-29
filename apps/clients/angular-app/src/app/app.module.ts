import { ClientHelloUiModule } from '@poc-nx-workspace/client-hello-ui';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([], { initialNavigation: 'enabledBlocking' }),
    ClientHelloUiModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
