import type { Meta, StoryObj } from '@storybook/angular';
import { IconComponent } from './icon';
import { ICON_NAMES } from './icons.registry';

// ─────────────────────────────────────────────────────────────
//  META
// ─────────────────────────────────────────────────────────────

const meta: Meta<IconComponent> = {
  title: 'Foundation/Icons',
  component: IconComponent,
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: 'select',
      options: ICON_NAMES,
      description: 'Nombre del icono FrYDA v3 (line)',
      table: { defaultValue: { summary: 'check' } },
    },
    size: {
      control: 'select',
      options: ['s', 'm', 'l'],
      description: 'Tamaño via tokens — s=16px · m=24px · l=32px',
      table: { defaultValue: { summary: 'm' } },
    },
    strokeWidth: {
      control: { type: 'number', min: 0.5, max: 3, step: 0.5 },
      description: 'Grosor del trazo SVG. También vía CSS: `--fry-f-icon-stroke-width`',
      table: { defaultValue: { summary: '2' } },
    },
  },
  args: {
    name: 'check',
    size: 'm',
    strokeWidth: 2,
  },
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
**Icon** — librería de iconos FrYDA v3 · line (193 iconos).

### Color — siempre \`currentColor\`
El icono hereda el color del elemento padre via CSS. **No existe un prop \`color\`.**

\`\`\`css
.mi-contenedor { color: #1c1f28; }   /* icono oscuro */
.mi-boton      { color: white; }      /* icono blanco */
\`\`\`

### Tamaños recomendados
| Prop | Tamaño | Token |
|------|--------|-------|
| \`s\` | 16×16px | \`--fry-f-icon-width-s\` |
| \`m\` | 24×24px | \`--fry-f-icon-width-m\` |
| \`l\` | 32×32px | \`--fry-f-icon-width-l\` |

> ⚠️ No escalar más allá de 32px. Para íconos "feature" grandes, coloca el ícono \`m\` dentro de un contenedor con background.

### Stroke width
Controlable via prop o CSS custom property:

\`\`\`html
<!-- via prop -->
<app-icon name="check" [strokeWidth]="1.5"></app-icon>

<!-- via CSS (aplica a todos los íconos del contexto) -->
<div style="--fry-f-icon-stroke-width: 1.5">
  <app-icon name="check"></app-icon>
</div>
\`\`\`

### Uso
\`\`\`html
<app-icon name="check" size="m"></app-icon>
<app-icon name="arrow-up-right" size="s" [strokeWidth]="1.5"></app-icon>
\`\`\`
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<IconComponent>;

// ─────────────────────────────────────────────────────────────
//  PLAYGROUND
// ─────────────────────────────────────────────────────────────

export const Playground: Story = {
  name: '⚡ Playground',
  args: { name: 'check', size: 'm', strokeWidth: 2 },
};

// ─────────────────────────────────────────────────────────────
//  TAMAÑOS
// ─────────────────────────────────────────────────────────────

export const Sizes: Story = {
  name: 'Tamaños',
  render: () => ({
    template: `
      <div style="display:flex; align-items:center; gap:24px; padding:24px;">
        <div style="display:flex; flex-direction:column; align-items:center; gap:8px; color:#1c1f28;">
          <app-icon name="check" size="s"></app-icon>
          <span style="font-size:11px; color:#888;">s · 16px</span>
        </div>
        <div style="display:flex; flex-direction:column; align-items:center; gap:8px; color:#1c1f28;">
          <app-icon name="check" size="m"></app-icon>
          <span style="font-size:11px; color:#888;">m · 24px</span>
        </div>
        <div style="display:flex; flex-direction:column; align-items:center; gap:8px; color:#1c1f28;">
          <app-icon name="check" size="l"></app-icon>
          <span style="font-size:11px; color:#888;">l · 32px ← máx recomendado</span>
        </div>
      </div>
    `,
    moduleMetadata: { imports: [IconComponent] },
  }),
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        story: 'Rango válido según las buenas prácticas de iconografía: **16–32px**. No escalar más allá de `l` para evitar que el stroke se vea grueso y poco refinado.',
      },
    },
  },
};

// ─────────────────────────────────────────────────────────────
//  STROKE WIDTH
// ─────────────────────────────────────────────────────────────

export const StrokeWidth: Story = {
  name: 'Stroke Width',
  render: () => ({
    template: `
      <div style="display:flex; align-items:center; gap:32px; padding:24px; color:#1c1f28;">
        <div style="display:flex; flex-direction:column; align-items:center; gap:8px;">
          <app-icon name="check" size="m" [strokeWidth]="1"></app-icon>
          <span style="font-size:11px; color:#888;">1 · thin</span>
        </div>
        <div style="display:flex; flex-direction:column; align-items:center; gap:8px;">
          <app-icon name="check" size="m" [strokeWidth]="1.5"></app-icon>
          <span style="font-size:11px; color:#888;">1.5 · light</span>
        </div>
        <div style="display:flex; flex-direction:column; align-items:center; gap:8px;">
          <app-icon name="check" size="m" [strokeWidth]="2"></app-icon>
          <span style="font-size:11px; color:#888; font-weight:700;">2 · regular ✓</span>
        </div>
        <div style="display:flex; flex-direction:column; align-items:center; gap:8px;">
          <app-icon name="check" size="m" [strokeWidth]="2.5"></app-icon>
          <span style="font-size:11px; color:#888;">2.5 · semibold</span>
        </div>
        <div style="display:flex; flex-direction:column; align-items:center; gap:8px;">
          <app-icon name="check" size="m" [strokeWidth]="3"></app-icon>
          <span style="font-size:11px; color:#888;">3 · bold</span>
        </div>
      </div>
    `,
    moduleMetadata: { imports: [IconComponent] },
  }),
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        story: `El grosor del trazo es configurable via **prop** o **CSS custom property**. El valor por defecto de FrYDA es \`2\`.

\`\`\`html
<!-- Via prop (por icono) -->
<app-icon name="check" [strokeWidth]="1.5"></app-icon>

<!-- Via CSS (aplica a todos los íconos del contexto) -->
<div style="--fry-f-icon-stroke-width: 1.5">
  <app-icon name="check"></app-icon>
  <app-icon name="user"></app-icon>
</div>
\`\`\``,
      },
    },
  },
};

// ─────────────────────────────────────────────────────────────
//  CURRENTCOLOR EN ACCIÓN
// ─────────────────────────────────────────────────────────────

export const CurrentColor: Story = {
  name: 'currentColor en acción',
  render: () => ({
    template: `
      <div style="display:flex; gap:0; border-radius:8px; overflow:hidden;">
        <div style="display:flex; flex-direction:column; align-items:center; gap:12px; padding:32px; background:#f8f9fa; color:#1c1f28;">
          <app-icon name="check" size="l"></app-icon>
          <span style="font-size:12px; font-weight:600;">color: #1c1f28</span>
          <span style="font-size:11px; color:#888;">fondo claro</span>
        </div>
        <div style="display:flex; flex-direction:column; align-items:center; gap:12px; padding:32px; background:#1c1f28; color:white;">
          <app-icon name="check" size="l"></app-icon>
          <span style="font-size:12px; font-weight:600; color:white;">color: white</span>
          <span style="font-size:11px; color:#888;">fondo oscuro</span>
        </div>
        <div style="display:flex; flex-direction:column; align-items:center; gap:12px; padding:32px; background:#1a56db; color:white;">
          <app-icon name="check" size="l"></app-icon>
          <span style="font-size:12px; font-weight:600; color:white;">color: white</span>
          <span style="font-size:11px; color:rgba(255,255,255,0.7);">fondo azul</span>
        </div>
        <div style="display:flex; flex-direction:column; align-items:center; gap:12px; padding:32px; background:#fff; color:#c9490c;">
          <app-icon name="check" size="l"></app-icon>
          <span style="font-size:12px; font-weight:600; color:#c9490c;">color: accent</span>
          <span style="font-size:11px; color:#888;">color custom</span>
        </div>
      </div>
    `,
    moduleMetadata: { imports: [IconComponent] },
  }),
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        story: 'El mismo icono `check` en 4 contextos — el color cambia solo con CSS `color`, sin ningún prop adicional.',
      },
    },
  },
};

// ─────────────────────────────────────────────────────────────
//  GALERÍA — 191 iconos
// ─────────────────────────────────────────────────────────────

export const Gallery: Story = {
  name: '📋 Galería — 191 iconos',
  render: () => ({
    template: `
      <div style="padding:24px; background:#f8f9fa; min-height:100vh;">
        <p style="font-size:12px; color:#888; margin:0 0 16px; font-weight:600; text-transform:uppercase; letter-spacing:0.05em;">
          FrYDA v3 · General · 191 iconos
        </p>
        <div style="display:grid; grid-template-columns:repeat(auto-fill, minmax(100px, 1fr)); gap:8px;">
          ${ICON_NAMES.map(name => `
          <div style="display:flex; flex-direction:column; align-items:center; gap:6px; padding:12px 8px; background:white; border-radius:6px; border:1px solid #eee;">
            <app-icon name="${name}" size="m" style="color:#1c1f28;"></app-icon>
            <span style="font-size:9px; color:#666; text-align:center; word-break:break-all; line-height:1.3;">${name}</span>
          </div>`).join('')}
        </div>
      </div>
    `,
    moduleMetadata: { imports: [IconComponent] },
  }),
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: { story: 'Todos los iconos del sistema FrYDA v3 — grupo General.' },
    },
  },
};
