import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button-icon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button-icon.html',
  styleUrl: './button-icon.css',
})
export class ButtonIconComponent {
  /** Jerarquía visual del botón */
  @Input() hierarchy: 'primary' | 'secondary' | 'ghost' | 'link' | 'destructive' = 'primary';

  /** Estado interactivo del botón */
  @Input() variant: 'default' | 'hover' | 'pressed' | 'focus' | 'disabled' | 'loading' = 'default';

  /** Modo de color: claro / oscuro */
  @Input() mode: 'default' | 'inverse' = 'default';

  /** Etiqueta accesible obligatoria para lectores de pantalla */
  @Input() ariaLabel: string = 'Ir al enlace';

  /** Icono a mostrar */
  @Input() icon: 'arrow' | 'close' = 'arrow';

  get cssClass(): string {
    return [
      'btn-icon',
      `btn-icon-${this.hierarchy}`,
      `btn-icon-${this.variant}`,
      this.mode === 'inverse' ? 'btn-icon-inverse' : '',
    ]
      .filter(Boolean)
      .join(' ');
  }
}
