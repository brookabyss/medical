import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CallComponent } from './call/call.component';
import { StakesService } from './stakes.service';
import { ShowComponent } from './show/show.component';
import { NewAccountComponent } from './new-account/new-account.component'

@NgModule({
  declarations: [
    AppComponent,
    CallComponent,
    ShowComponent,
    NewAccountComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AppRoutingModule,
    
  ],
  providers: [StakesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
