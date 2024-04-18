import { Component, HostListener } from '@angular/core';
import { IconName } from '@fortawesome/free-solid-svg-icons';
import { RandomizerService } from '../services/randomizer.service';
import { TaskQueueService } from '../services/task-queue.service';
import { ButtonComponent } from './components/button/button.component';
import { IconBoxComponent } from './components/icon-box/icon-box.component';
import { ProgressComponent } from './components/progress/progress.component';

@Component({
  selector: 'app-randomizer',
  standalone: true,
  imports: [ButtonComponent, IconBoxComponent, ProgressComponent],
  templateUrl: './randomizer.component.html',
})
export class RandomizerComponent {
  public icon: IconName = this.randomizerService.getRandomIcon();
  public totalTasks = 0;
  public finishedTasks = 0;

  constructor(
    private randomizerService: RandomizerService,
    private taskQueueService: TaskQueueService
  ) {}

  newIcon() {
    this.totalTasks++;
    this.taskQueueService.enqueueTask(() => {
      this.icon = this.randomizerService.getRandomIcon();
      this.finishedTasks++;
    });
  }

  @HostListener('document:keyup', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.key === ' ' || event.key === 'Enter') {
      this.newIcon();
    }
  }
}
