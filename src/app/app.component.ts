import { Component } from '@angular/core';
import { HeaderComponent } from "./components/header/header.component";
import { BeatListComponent } from "./components/beat-list/beat-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [BeatListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'beats-clone';
}
