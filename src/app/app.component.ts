import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent],
  template: `
  <main>
    <header class="brand-name" style="border-bottom: 2px solid grey; border-style: inset;">
      <img class="brand-logo" src="https://static.vecteezy.com/system/resources/previews/000/626/877/original/home-logo-building-vectors.jpg" alt="logo" aria-hidden="true" style="width: 100px;">
      <a style="position: absolute; top: 40px; font-size: 25px;">Homes</a>
    </header>
    <section class="content">
      <app-home></app-home>
    </section>
  </main>
`,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Homes';
}
