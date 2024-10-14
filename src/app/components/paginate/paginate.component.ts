import {ChangeDetectionStrategy, Component} from '@angular/core';
import {PaginateDirective} from '../../directives/paginate.directive';

@Component({
  selector: 'app-paginate',
  standalone: true,
  imports: [
    PaginateDirective
  ],
  templateUrl: './paginate.component.html',
  styleUrl: './paginate.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaginateComponent {

}
