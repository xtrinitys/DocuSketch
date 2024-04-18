import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconName } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'icon-box',
  standalone: true,
  templateUrl: './icon-box.component.html',
  imports: [FontAwesomeModule],
})
export class IconBoxComponent {
  @Input({ required: true }) icon: IconName = '0';
}
