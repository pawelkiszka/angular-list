import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListItemComponent } from './components/list-item/list-item.component';
import { StopperComponent } from './components/stopper/stopper.component';

@NgModule({
  declarations: [
    AppComponent,
    ListItemComponent,
    StopperComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
      
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
