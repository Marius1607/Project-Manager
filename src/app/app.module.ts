import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VerticalListComponent } from './components/vertical-list/vertical-list.component';
import { NavigationListComponent } from './components/navigation-list/navigation-list.component';

@NgModule({
  declarations: [
    AppComponent,
    VerticalListComponent,
    NavigationListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
