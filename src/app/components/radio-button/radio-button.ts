import { Component, Input, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-radio-button',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './radio-button.html',
  styleUrl: './radio-button.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RadioButtonComponent),
      multi: true,
    },
  ],
})
export class RadioButtonComponent implements ControlValueAccessor {
  /** Estado visual del radio button */
  @Input() state: 'default' | 'hover' | 'pressed' | 'focus' | 'disabled' = 'default';

  /** Valor seleccionado (true = selected) */
  @Input() checked: boolean = false;

  /** Nombre del grupo de radio */
  @Input() name: string = 'radio-group';

  /** Etiqueta accesible */
  @Input() label: string = '';

  private onChange: (value: boolean) => void = () => {};
  private onTouched: () => void = () => {};

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

  handleChange(event: Event): void {
    if (this.isDisabled) return;
    this.checked = (event.target as HTMLInputElement).checked;
    this.onChange(this.checked);
    this.onTouched();
  }

  writeValue(value: boolean): void {
    this.checked = value;
  }

  registerOnChange(fn: (value: boolean) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    if (isDisabled) this.state = 'disabled';
  }
}
