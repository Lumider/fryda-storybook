import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.html',
  styleUrl: './button.css'
})
export class ButtonComponent {
  @Input() label: string = 'Button';

  @Input() hierarchy: 'primary' | 'secondary' | 'ghost' | 'link' | 'destructive' = 'primary';

  @Input() variant: 'default' | 'hover' | 'pressed' | 'focus' | 'disabled' | 'loading' = 'default';

  @Input() mode: 'default' | 'inverse' = 'default';

  @Input() size: 'small' | 'medium' | 'large' = 'medium';

  get cssClass(): string {
    return [
      'btn',
      `btn-${this.hierarchy}`,
      `btn-${this.variant}`,
      this.mode === 'inverse' ? 'btn-inverse' : '',
    ]
      .filter(Boolean)
      .join(' ');
  }
}
