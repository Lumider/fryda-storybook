import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-radio-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './radio-button.html',
  styleUrl: './radio-button.css',
})
export class RadioButtonComponent {
  /** Estado visual del radio button */
  @Input() state: 'default' | 'hover' | 'pressed' | 'focus' | 'disabled' = 'default';

  /** true = Selected, false = Unselected */
  @Input() checked: boolean = false;

  /** Nombre del grupo de radio */
  @Input() name: string = 'radio-group';

  /** Etiqueta accesible (aria-label) */
  @Input() label: string = '';

  /** Emite cuando el usuario selecciona este radio */
  @Output() checkedChange = new EventEmitter<boolean>();

  get isDisabled(): boolean {
    return this.state === 'disabled';
  }

  get hostClass(): string {
    return [
      'radio',
      `radio--${this.state}`,
      this.checked ? 'radio--selected' : 'radio--unselected',
    ].join(' ');
  }

  handleChange(): void {
    if (this.isDisabled) return;
    this.checked = true;
    this.checkedChange.emit(true);
  }
}
