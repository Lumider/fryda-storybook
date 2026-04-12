import { Component, Input, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ICONS, IconData, IconName } from './icons.registry';

@Component({
  selector: 'app-icon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './icon.html',
  styleUrl: './icon.css',
  host: { '[attr.size]': 'size' },
})
export class IconComponent implements OnChanges {
  /** Nombre del icono — uno de los 191 iconos FrYDA v3 */
  @Input() name: IconName = 'check';

  /** Tamaño usando tokens FrYDA: s=16px m=24px l=32px xl=40px */
  @Input() size: 's' | 'm' | 'l' | 'xl' = 'm';

  // ⚠️ NO hay @Input() color — el color SIEMPRE se hereda via CSS currentColor del elemento padre

  iconData: IconData = ICONS['check'];

  ngOnChanges(): void {
    this.iconData = ICONS[this.name] ?? ICONS['check'];
  }
}
