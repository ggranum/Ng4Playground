import {RouterModule, Routes} from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { NgModule } from "@angular/core";
import { AsciiDoctorPanelDemo } from "./pages/asciidoctor-panel/asciidoctor-panel-demo";



export const
  appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'asciidoctor-panel', component: AsciiDoctorPanelDemo},
];
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
