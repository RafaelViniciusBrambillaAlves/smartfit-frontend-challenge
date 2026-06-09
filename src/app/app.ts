import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./components/header/header";
import { Forms } from "./components/forms/forms";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Header, Forms],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('desafio-smartfit');
}
