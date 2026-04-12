import { Component, Input, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ICONS, IconData, IconName } from './icons.registry';

@Component({
  selector: 'app-icon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './icon.html',
  styleUrl: './icon.css',
  host: {
    '[attr.size]': 'size',
    '[style.--fry-f-icon-stroke-width]': 'strokeWidth',
  },
})
export class IconComponent implements OnChanges {
  /** Nombre del icono — FrYDA v3 General (line) */
  @Input() name: IconName = 'check';

  /** Tamaño via tokens FrYDA: s=16px · m=24px · l=32px
   *  ⚠️ No escalar más allá de 32px — usar un contenedor si necesitas íconos "feature" */
  @Input() size: 's' | 'm' | 'l' = 'm';

  /** Grosor del trazo SVG — default 2 (igual que la especificación FrYDA).
   *  Otras opciones habituales: 1 (thin) · 1.5 (light) · 2.5 (bold)
   *  También controlable vía CSS: app-icon { --fry-f-icon-stroke-width: 1.5 } */
  @Input() strokeWidth: number = 2;

  // ⚠️ NO hay @Input() color — el color SIEMPRE se hereda via CSS currentColor del elemento padre

  iconData: IconData = ICONS['check'];

  ngOnChanges(): void {
    this.iconData = ICONS[this.name] ?? ICONS['check'];
  }
}
