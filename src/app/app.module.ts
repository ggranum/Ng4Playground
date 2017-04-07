import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { MaterialModule } from "@angular/material";
import { AppComponent } from "./app.component";


import "hammerjs";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HomeComponent } from "./pages/home/home.component";
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from "./app-routing.module";
import { AsciiDoctorPanelDemo } from "./pages/asciidoctor-panel/asciidoctor-panel-demo";
import { AsciidoctorPanelModule } from "./lib/asciidoctor-panel/asciidoctor-panel.module";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AsciiDoctorPanelDemo,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule,

    AppRoutingModule,
    AsciidoctorPanelModule,


  ],
  exports: [
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
