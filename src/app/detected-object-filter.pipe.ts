import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'detectedObjectFilter'
})

export class DetectedObjectFilterPipe implements PipeTransform {
  transform(items: any[], field: string, value: string): any[] {
    if (!items) {
      return [];
    } else if (!value) {
      return items;
    }
    return items.filter(it => (it[field] === value || it[field].length !== value.length));
  }
}
