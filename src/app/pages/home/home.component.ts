import {Component} from "@angular/core";

export const NAV_ITEMS = [
  {name: 'Asciidoctor-panel', route: 'asciidoctor-panel'},
  {name: 'Authorization-service', route: 'authorization-service'},
  {name: 'Admin Panel Demo', route: 'admin-demo'},
  {name: 'Inline Profile', route: 'inline-profile'},
  {name: 'Sign In Panel Demo', route: 'sign-in-panel'},
];



@Component({
  selector: 'tg-home',
  templateUrl: 'demo-home.html'
})
export class HomeComponent {
  navItems: any[] = NAV_ITEMS
}
