import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'dashreplacer'})
export class DashReplacerPipe implements PipeTransform {
  transform(value: any): string {
    if (!value) return value;
    return value.replace(/-/g, '');
  }
}