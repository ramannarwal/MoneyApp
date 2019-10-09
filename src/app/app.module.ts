import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HashrateComponent } from './layout/hashrateComponent/hashrate.component';
import { HashrateService} from './services/hashrate.service';

@NgModule({
  declarations: [
    AppComponent,
    HashrateComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [HashrateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
