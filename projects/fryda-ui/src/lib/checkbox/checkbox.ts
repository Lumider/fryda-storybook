import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-checkbox',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './checkbox.html',
  styleUrl: './checkbox.css',
})
export class CheckboxComponent {
  /** Estado visual del checkbox */
  @Input() state: 'default' | 'hover' | 'pressed' | 'focus' | 'disabled' = 'default';

  /** Valor del checkbox */
  @Input() value: 'unselected' | 'selected' | 'indeterminate' = 'unselected';

  /** Etiqueta accesible (aria-label) */
  @Input() label: string = 'Checkbox';

  /** Emite cuando el usuario cambia el estado */
  @Output() valueChange = new EventEmitter<'unselected' | 'selected' | 'indeterminate'>();

  get isDisabled(): boolean {
    return this.state === 'disabled';
  }

  get isChecked(): boolean {
    return this.value === 'selected';
  }

  get isIndeterminate(): boolean {
    return this.value === 'indeterminate';
  }

  get hostClass(): string {
    return [
      'checkbox',
      `checkbox--${this.state}`,
      `checkbox--${this.value}`,
    ].join(' ');
  }

  handleChange(): void {
    if (this.isDisabled) return;
    const next = this.value === 'selected' ? 'unselected' : 'selected';
    this.value = next;
    this.valueChange.emit(next);
  }
}
