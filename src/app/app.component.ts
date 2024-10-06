import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {CounterComponent} from './counter/counter.component';
import {ThemeColorsComponent} from './theme-colors/theme-colors.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CounterComponent, ThemeColorsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ng-testing';
}
