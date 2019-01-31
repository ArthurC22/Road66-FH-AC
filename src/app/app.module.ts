import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VideoComponentComponent } from './video-component/video-component.component';
import {HttpClientModule} from '@angular/common/http';
import { ChapterComponent } from './chapter/chapter.component';

@NgModule({
  declarations: [
    AppComponent,
    VideoComponentComponent,
    ChapterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
