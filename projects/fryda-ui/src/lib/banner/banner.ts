import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './banner.html',
  styleUrl: './banner.css',
})
export class BannerComponent {
  /** Intención semántica del banner */
  @Input() intent: 'warning' | 'neutral' | 'error' | 'info' | 'success' = 'warning';

  /** Texto o mensaje que muestra el banner */
  @Input() text: string = 'Text';

  get cssClass(): string {
    return `banner banner--${this.intent}`;
  }
}
