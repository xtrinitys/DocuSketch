import { Injectable } from '@angular/core';
import { FaConfig, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { IconName, fas } from '@fortawesome/free-solid-svg-icons';
import { getRandomIntInRange } from '../../utils/utils';

@Injectable({
  providedIn: 'root',
})
export class RandomizerService {
  private fasArray: string[];

  constructor(private library: FaIconLibrary, private config: FaConfig) {
    library.addIconPacks(fas);
    this.fasArray = Object.keys(fas);
    config.defaultPrefix = 'fas';
  }

  getRandomIcon(): IconName {
    const index = getRandomIntInRange(0, this.fasArray.length - 1);
    const iconName = this.fasArray[index];
    return this.transformStringToIconName(iconName) as IconName;
  }

  private transformStringToIconName(s: string): string {
    let result = s;

    if (result.startsWith('fa')) {
      result = result.slice(2);
    }

    const pattern = /(([A-Z])(?![a-z]))|([A-Z][a-z]+)|([0-9]+)/g;
    const matches = result.match(pattern) || [];
    return matches.map((word) => word.toLowerCase()).join('-');
  }
}
