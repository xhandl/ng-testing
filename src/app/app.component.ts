import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {CounterComponent} from './components/counter/counter.component';
import {ThemeColorsComponent} from './components/theme-colors/theme-colors.component';
import {HomeComponent} from './components/home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CounterComponent, ThemeColorsComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ng-testing';
}
