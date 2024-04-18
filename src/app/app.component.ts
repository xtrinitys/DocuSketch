import { Component } from '@angular/core';
import { RandomizerComponent } from './randomizer/randomizer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [RandomizerComponent],
})
export class AppComponent {}
