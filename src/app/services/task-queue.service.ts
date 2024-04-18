import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TaskQueueService {
  private taskQueue: (() => void)[] = [];
  private isProcessing: boolean = false;

  constructor() {}

  enqueueTask(task: () => void, delayMs = 1000) {
    this.taskQueue.push(() => {
      setTimeout(() => {
        task();

        if (this.taskQueue.length > 0) {
          this.processQueue();
        } else {
          this.isProcessing = false;
        }
      }, delayMs);
    });

    if (!this.isProcessing) {
      this.processQueue();
    }
  }

  private processQueue() {
    this.isProcessing = true;
    const task = this.taskQueue.shift();
    task && task();
  }
}
