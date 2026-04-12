import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../button/button';
import { ButtonIconComponent } from '../button-icon/button-icon';

@Component({
  selector: 'app-tooltip',
  standalone: true,
  imports: [CommonModule, ButtonComponent, ButtonIconComponent],
  templateUrl: './tooltip.html',
  styleUrl: './tooltip.css',
})
export class TooltipComponent {
  /** Lado desde donde apunta la flecha */
  @Input() side: 'top' | 'right' | 'bottom' | 'left' = 'left';

  /** Alineación de la flecha en el lado */
  @Input() align: 'start' | 'center' | 'end' = 'start';

  /** Título del tooltip (opcional) */
  @Input() title: string = 'Title';

  /** Texto descriptivo */
  @Input() description: string = 'Descripción';

  /** Mostrar el título */
  @Input() showTitle: boolean = true;

  /** Mostrar botones de acción */
  @Input() showButtonGroup: boolean = true;

  /** Mostrar botón secundario */
  @Input() showButtonSecondary: boolean = true;

  /** Mostrar botón de cierre (X) */
  @Input() showClose: boolean = true;

  /** Texto del botón primario */
  @Input() primaryLabel: string = 'Button';

  /** Texto del botón secundario */
  @Input() secondaryLabel: string = 'Button';

  /** Emite cuando se cierra el tooltip */
  @Output() closed = new EventEmitter<void>();

  /** Emite cuando se hace click en el botón primario */
  @Output() primaryClick = new EventEmitter<void>();

  /** Emite cuando se hace click en el botón secundario */
  @Output() secondaryClick = new EventEmitter<void>();

  get hostClass(): string {
    return `tooltip tooltip--${this.side} tooltip--${this.side}-${this.align}`;
  }

  get arrowClass(): string {
    return `tooltip__arrow tooltip__arrow--${this.align}`;
  }

  onClose(): void {
    this.closed.emit();
  }
}
