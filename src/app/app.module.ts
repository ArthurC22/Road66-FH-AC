import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VideoComponent } from './video-component/video-component.component';
import {HttpClientModule} from '@angular/common/http';
import { ChapterComponent } from './chapter/chapter.component';
import {MatMenuModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MapComponent } from './map/map.component';

@NgModule({
  declarations: [
    AppComponent,
    VideoComponent,
    ChapterComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MatMenuModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
