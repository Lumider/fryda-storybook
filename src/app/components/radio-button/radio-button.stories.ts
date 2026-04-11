import type { Meta, StoryObj } from '@storybook/angular';
import { userEvent, within, expect } from '@storybook/test';
import { RadioButtonComponent } from './radio-button';

// ─────────────────────────────────────────────────────────────
//  META
// ─────────────────────────────────────────────────────────────

const meta: Meta<RadioButtonComponent> = {
  title: 'Components/Radio Button',
  component: RadioButtonComponent,
  tags: ['autodocs'],
  argTypes: {
    state: {
      control: 'select',
      options: ['default', 'hover', 'pressed', 'focus', 'disabled'],
      description: 'Estado visual del radio button',
      table: { defaultValue: { summary: 'default' } },
    },
    checked: {
      control: 'boolean',
      description: 'true = Selected · false = Unselected',
      table: { defaultValue: { summary: 'false' } },
    },
    label: {
      control: 'text',
      description: 'Etiqueta accesible (aria-label)',
    },
    name: {
      control: 'text',
      description: 'Nombre del grupo de radio',
    },
  },
  args: {
    state: 'default',
    checked: false,
    label: 'Opción',
    name: 'demo',
  },
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
**Radio Button** permite al usuario seleccionar una opción dentro de un grupo mutuamente excluyente.

### Anatomía
| Capa | Tamaño | Descripción |
|------|--------|-------------|
| State layer | 40×40px | Fondo circular para hover/pressed |
| Focus ring | 32×32px | Anillo azul de accesibilidad |
| Control | 24×24px | Círculo principal con borde |
| Indicator | 12×12px | Punto interior cuando está seleccionado |

### Estados
| Estado | Descripción |
|--------|-------------|
| \`default\` | Estado de reposo |
| \`hover\` | Cursor sobre el componente |
| \`pressed\` | Pulsación activa |
| \`focus\` | Foco por teclado |
| \`disabled\` | No interactivo |
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<RadioButtonComponent>;

// ─────────────────────────────────────────────────────────────
//  PLAYGROUND
// ─────────────────────────────────────────────────────────────

export const Playground: Story = {
  name: '⚡ Playground',
  args: { state: 'default', checked: false },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('radio');

    await step('Radio button renderizado', async () => {
      await expect(input).toBeInTheDocument();
      await expect(input).not.toBeDisabled();
    });

    await step('Hover sobre el radio', async () => {
      await userEvent.hover(input);
    });

    await step('Unhover', async () => {
      await userEvent.unhover(input);
    });

    await step('Focus por teclado', async () => {
      await userEvent.tab();
      await expect(input).toHaveFocus();
    });

    await step('Click — seleccionar', async () => {
      await userEvent.click(input);
    });
  },
};

// ─────────────────────────────────────────────────────────────
//  UNSELECTED — todos los estados
// ─────────────────────────────────────────────────────────────

export const UnselectedDefault: Story = {
  name: 'Unselected / Default',
  args: { state: 'default', checked: false },
};

export const UnselectedHover: Story = {
  name: 'Unselected / Hover',
  args: { state: 'hover', checked: false },
};

export const UnselectedPressed: Story = {
  name: 'Unselected / Pressed',
  args: { state: 'pressed', checked: false },
};

export const UnselectedFocus: Story = {
  name: 'Unselected / Focus',
  args: { state: 'focus', checked: false },
};

export const UnselectedDisabled: Story = {
  name: 'Unselected / Disabled',
  args: { state: 'disabled', checked: false },
  play: async ({ canvasElement, step }) => {
    const input = within(canvasElement).getByRole('radio');
    await step('Verificar deshabilitado', async () => {
      await expect(input).toBeDisabled();
    });
  },
};

// ─────────────────────────────────────────────────────────────
//  SELECTED — todos los estados
// ─────────────────────────────────────────────────────────────

export const SelectedDefault: Story = {
  name: 'Selected / Default',
  args: { state: 'default', checked: true },
};

export const SelectedHover: Story = {
  name: 'Selected / Hover',
  args: { state: 'hover', checked: true },
};

export const SelectedPressed: Story = {
  name: 'Selected / Pressed',
  args: { state: 'pressed', checked: true },
};

export const SelectedFocus: Story = {
  name: 'Selected / Focus',
  args: { state: 'focus', checked: true },
};

export const SelectedDisabled: Story = {
  name: 'Selected / Disabled',
  args: { state: 'disabled', checked: true },
  play: async ({ canvasElement, step }) => {
    const input = within(canvasElement).getByRole('radio');
    await step('Verificar deshabilitado y seleccionado', async () => {
      await expect(input).toBeDisabled();
      await expect(input).toBeChecked();
    });
  },
};

// ─────────────────────────────────────────────────────────────
//  VISTA COMPARATIVA — todos los estados juntos
// ─────────────────────────────────────────────────────────────

export const AllStates: Story = {
  name: '📋 Todos los estados',
  render: () => ({
    template: `
      <div style="display:flex; flex-direction:column; gap:24px;">

        <!-- Unselected row -->
        <div>
          <p style="font-size:12px; color:#6E727C; margin:0 0 8px; font-family:sans-serif;">UNSELECTED</p>
          <div style="display:flex; align-items:center; gap:8px;">
            <app-radio-button [checked]="false" state="default"  label="Default"  name="r1"></app-radio-button>
            <app-radio-button [checked]="false" state="hover"    label="Hover"    name="r1"></app-radio-button>
            <app-radio-button [checked]="false" state="pressed"  label="Pressed"  name="r1"></app-radio-button>
            <app-radio-button [checked]="false" state="focus"    label="Focus"    name="r1"></app-radio-button>
            <app-radio-button [checked]="false" state="disabled" label="Disabled" name="r1"></app-radio-button>
          </div>
        </div>

        <!-- Selected row -->
        <div>
          <p style="font-size:12px; color:#6E727C; margin:0 0 8px; font-family:sans-serif;">SELECTED</p>
          <div style="display:flex; align-items:center; gap:8px;">
            <app-radio-button [checked]="true" state="default"  label="Default"  name="r2"></app-radio-button>
            <app-radio-button [checked]="true" state="hover"    label="Hover"    name="r2"></app-radio-button>
            <app-radio-button [checked]="true" state="pressed"  label="Pressed"  name="r2"></app-radio-button>
            <app-radio-button [checked]="true" state="focus"    label="Focus"    name="r2"></app-radio-button>
            <app-radio-button [checked]="true" state="disabled" label="Disabled" name="r2"></app-radio-button>
          </div>
        </div>

      </div>
    `,
    moduleMetadata: { imports: [RadioButtonComponent] },
  }),
  parameters: {
    docs: {
      description: {
        story: 'Vista comparativa 1:1 con el frame de Figma — 5 estados × 2 valores.',
      },
    },
  },
};

// ─────────────────────────────────────────────────────────────
//  GRUPO FUNCIONAL — comportamiento real de radio group
// ─────────────────────────────────────────────────────────────

export const RadioGroup: Story = {
  name: '🔘 Radio Group (funcional)',
  render: () => ({
    template: `
      <div style="display:flex; flex-direction:column; gap:12px; font-family:sans-serif;">
        <p style="font-size:14px; font-weight:600; margin:0 0 4px;">¿Cuál es tu plan favorito?</p>

        <label style="display:flex; align-items:center; gap:12px; cursor:pointer;">
          <app-radio-button [checked]="true"  name="plan" label="Free"></app-radio-button>
          <span style="font-size:14px;">Free</span>
        </label>

        <label style="display:flex; align-items:center; gap:12px; cursor:pointer;">
          <app-radio-button [checked]="false" name="plan" label="Pro"></app-radio-button>
          <span style="font-size:14px;">Pro</span>
        </label>

        <label style="display:flex; align-items:center; gap:12px; cursor:pointer;">
          <app-radio-button [checked]="false" name="plan" label="Enterprise"></app-radio-button>
          <span style="font-size:14px;">Enterprise</span>
        </label>

        <label style="display:flex; align-items:center; gap:12px; cursor:pointer; opacity:0.5;">
          <app-radio-button [checked]="false" state="disabled" name="plan" label="Legacy (no disponible)"></app-radio-button>
          <span style="font-size:14px; color:#9CA3AF;">Legacy (no disponible)</span>
        </label>
      </div>
    `,
    moduleMetadata: { imports: [RadioButtonComponent] },
  }),
  parameters: {
    docs: {
      description: {
        story: 'Ejemplo de uso real: radio group con opciones y estado disabled.',
      },
    },
  },
};
