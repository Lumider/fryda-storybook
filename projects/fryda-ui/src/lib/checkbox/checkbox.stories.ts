import type { Meta, StoryObj } from '@storybook/angular';
import { CheckboxComponent } from './checkbox';

// ─────────────────────────────────────────────────────────────
//  META
// ─────────────────────────────────────────────────────────────

const meta: Meta<CheckboxComponent> = {
  title: 'Components/Checkbox',
  component: CheckboxComponent,
  tags: ['autodocs'],
  argTypes: {
    state: {
      control: 'select',
      options: ['default', 'hover', 'pressed', 'focus', 'disabled'],
      description: 'Estado visual del checkbox',
      table: { defaultValue: { summary: 'default' } },
    },
    value: {
      control: 'select',
      options: ['unselected', 'selected', 'indeterminate'],
      description: 'Valor del checkbox',
      table: { defaultValue: { summary: 'unselected' } },
    },
    label: {
      control: 'text',
      description: 'Etiqueta accesible (aria-label)',
    },
  },
  args: {
    state: 'default',
    value: 'unselected',
    label: 'Checkbox',
  },
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
**Checkbox** permite al usuario seleccionar una o varias opciones de forma independiente.

### Anatomía
| Capa | Tamaño | Descripción |
|------|--------|-------------|
| State layer | 40×40px | Fondo circular para hover/pressed |
| Focus ring | 32×32px | Anillo azul de accesibilidad |
| Control | 24×24px | Caja principal con borde |
| Icon | 16×16px | Check o Minus cuando está marcado |

### Estados × Valores
| Estado | Unselected | Selected | Indeterminate |
|--------|-----------|----------|---------------|
| \`default\` | Borde oscuro | Fondo sólido + check | Fondo sólido + minus |
| \`hover\` | State layer + borde | State layer + fondo | State layer + fondo |
| \`pressed\` | State layer (opac.) | State layer (naranja) | State layer (naranja) |
| \`focus\` | Focus ring azul | Focus ring + check | Focus ring + minus |
| \`disabled\` | Fondo gris claro | Fondo gris + check | Fondo gris + minus |
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<CheckboxComponent>;

// ─────────────────────────────────────────────────────────────
//  PLAYGROUND
// ─────────────────────────────────────────────────────────────

export const Playground: Story = {
  name: '⚡ Playground',
  args: { state: 'default', value: 'unselected' },
};

// ─────────────────────────────────────────────────────────────
//  UNSELECTED — todos los estados
// ─────────────────────────────────────────────────────────────

export const UnselectedDefault: Story = {
  name: 'Unselected / Default',
  args: { state: 'default', value: 'unselected' },
};

export const UnselectedHover: Story = {
  name: 'Unselected / Hover',
  args: { state: 'hover', value: 'unselected' },
};

export const UnselectedPressed: Story = {
  name: 'Unselected / Pressed',
  args: { state: 'pressed', value: 'unselected' },
};

export const UnselectedFocus: Story = {
  name: 'Unselected / Focus',
  args: { state: 'focus', value: 'unselected' },
};

export const UnselectedDisabled: Story = {
  name: 'Unselected / Disabled',
  args: { state: 'disabled', value: 'unselected' },
};

// ─────────────────────────────────────────────────────────────
//  SELECTED — todos los estados
// ─────────────────────────────────────────────────────────────

export const SelectedDefault: Story = {
  name: 'Selected / Default',
  args: { state: 'default', value: 'selected' },
};

export const SelectedHover: Story = {
  name: 'Selected / Hover',
  args: { state: 'hover', value: 'selected' },
};

export const SelectedPressed: Story = {
  name: 'Selected / Pressed',
  args: { state: 'pressed', value: 'selected' },
};

export const SelectedFocus: Story = {
  name: 'Selected / Focus',
  args: { state: 'focus', value: 'selected' },
};

export const SelectedDisabled: Story = {
  name: 'Selected / Disabled',
  args: { state: 'disabled', value: 'selected' },
};

// ─────────────────────────────────────────────────────────────
//  INDETERMINATE — todos los estados
// ─────────────────────────────────────────────────────────────

export const IndeterminateDefault: Story = {
  name: 'Indeterminate / Default',
  args: { state: 'default', value: 'indeterminate' },
};

export const IndeterminateHover: Story = {
  name: 'Indeterminate / Hover',
  args: { state: 'hover', value: 'indeterminate' },
};

export const IndeterminatePressed: Story = {
  name: 'Indeterminate / Pressed',
  args: { state: 'pressed', value: 'indeterminate' },
};

export const IndeterminateFocus: Story = {
  name: 'Indeterminate / Focus',
  args: { state: 'focus', value: 'indeterminate' },
};

export const IndeterminateDisabled: Story = {
  name: 'Indeterminate / Disabled',
  args: { state: 'disabled', value: 'indeterminate' },
};

// ─────────────────────────────────────────────────────────────
//  ALL STATES — grid completo
// ─────────────────────────────────────────────────────────────

export const AllStates: Story = {
  name: '📋 All States',
  render: () => ({
    template: `
      <div style="display:flex; flex-direction:column; gap:24px; padding:24px; background:#f8f9fa; border-radius:8px;">

        <div>
          <p style="font-size:12px; font-weight:600; color:#888; margin:0 0 12px; text-transform:uppercase; letter-spacing:0.05em;">Unselected</p>
          <div style="display:flex; gap:8px; align-items:center;">
            <app-checkbox [state]="'default'" [value]="'unselected'" [label]="'Default'"></app-checkbox>
            <app-checkbox [state]="'hover'" [value]="'unselected'" [label]="'Hover'"></app-checkbox>
            <app-checkbox [state]="'pressed'" [value]="'unselected'" [label]="'Pressed'"></app-checkbox>
            <app-checkbox [state]="'focus'" [value]="'unselected'" [label]="'Focus'"></app-checkbox>
            <app-checkbox [state]="'disabled'" [value]="'unselected'" [label]="'Disabled'"></app-checkbox>
          </div>
        </div>

        <div>
          <p style="font-size:12px; font-weight:600; color:#888; margin:0 0 12px; text-transform:uppercase; letter-spacing:0.05em;">Selected</p>
          <div style="display:flex; gap:8px; align-items:center;">
            <app-checkbox [state]="'default'" [value]="'selected'" [label]="'Default'"></app-checkbox>
            <app-checkbox [state]="'hover'" [value]="'selected'" [label]="'Hover'"></app-checkbox>
            <app-checkbox [state]="'pressed'" [value]="'selected'" [label]="'Pressed'"></app-checkbox>
            <app-checkbox [state]="'focus'" [value]="'selected'" [label]="'Focus'"></app-checkbox>
            <app-checkbox [state]="'disabled'" [value]="'selected'" [label]="'Disabled'"></app-checkbox>
          </div>
        </div>

        <div>
          <p style="font-size:12px; font-weight:600; color:#888; margin:0 0 12px; text-transform:uppercase; letter-spacing:0.05em;">Indeterminate</p>
          <div style="display:flex; gap:8px; align-items:center;">
            <app-checkbox [state]="'default'" [value]="'indeterminate'" [label]="'Default'"></app-checkbox>
            <app-checkbox [state]="'hover'" [value]="'indeterminate'" [label]="'Hover'"></app-checkbox>
            <app-checkbox [state]="'pressed'" [value]="'indeterminate'" [label]="'Pressed'"></app-checkbox>
            <app-checkbox [state]="'focus'" [value]="'indeterminate'" [label]="'Focus'"></app-checkbox>
            <app-checkbox [state]="'disabled'" [value]="'indeterminate'" [label]="'Disabled'"></app-checkbox>
          </div>
        </div>

      </div>
    `,
    moduleMetadata: { imports: [CheckboxComponent] },
  }),
  parameters: {
    layout: 'centered',
    docs: {
      description: { story: 'Vista completa: 3 valores × 5 estados = 15 variantes.' },
    },
  },
};
