import { Component, Input } from '@angular/core';

@Component({
  selector: 'square',
  template: `
    <button *ngIf="!value">{{ value }}</button>
    <button *ngIf="value == 'X'">{{ value }}</button>
    <button *ngIf="value == 'O'">{{ value }}</button>
  `,
  styles: ['button { width: 100%; height: 100%; font-size: 5em;}']
})
export class SquareComponent {
  @Input() value: 'X' | 'O';
}
