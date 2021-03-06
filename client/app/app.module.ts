import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MessageComponent } from './directives/message.component.ts'; 
import { DraggableItemDirective } from './directives/draggable-item.directive.ts'; 
import { SafePipe } from './pipes/safe.pipe.ts';

import { GlobalVarsService } from './services/global-vars.service.ts';
import { AppHttpService } from './services/app-http.service.ts';
import { WebApiService } from './services/web-api.service.ts';


@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    MessageComponent,
    DraggableItemDirective,
    SafePipe
  ],
  providers: [
    GlobalVarsService,
    AppHttpService,
    WebApiService  
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }