import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataViewerComponent } from './data-viewer/data-viewer.component';
import { DataExporterComponent } from './data-exporter/data-exporter.component';

@NgModule({
  declarations: [
    AppComponent,
    DataViewerComponent,
    DataExporterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
