import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Log } from './core/components/log/log';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('refazendo');
}
