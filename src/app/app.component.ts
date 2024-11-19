import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppHeaderComponent } from "./app-layout/app-header/app-header.component";
import { AppBodyComponent } from "./app-layout/app-body/app-body.component";
import { AppFooterComponent } from "./app-layout/app-footer/app-footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AppHeaderComponent, AppBodyComponent, AppFooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'test';
}
