import type { Meta, StoryObj } from '@storybook/angular';
import { TooltipComponent } from './tooltip';

// ─────────────────────────────────────────────────────────────
//  META
// ─────────────────────────────────────────────────────────────

const meta: Meta<TooltipComponent> = {
  title: 'Components/Tooltip',
  component: TooltipComponent,
  tags: ['autodocs'],
  argTypes: {
    side: {
      control: 'select',
      options: ['top', 'right', 'bottom', 'left'],
      description: 'Lado desde donde apunta la flecha',
      table: { defaultValue: { summary: 'left' } },
    },
    align: {
      control: 'select',
      options: ['start', 'center', 'end'],
      description: 'Alineación de la flecha',
      table: { defaultValue: { summary: 'start' } },
    },
    showTitle: {
      control: 'boolean',
      description: 'Mostrar el título',
    },
    showButtonGroup: {
      control: 'boolean',
      description: 'Mostrar botones de acción',
    },
    showButtonSecondary: {
      control: 'boolean',
      description: 'Mostrar botón secundario',
    },
    showClose: {
      control: 'boolean',
      description: 'Mostrar botón de cierre',
    },
    title: { control: 'text' },
    description: { control: 'text' },
    primaryLabel: { control: 'text' },
    secondaryLabel: { control: 'text' },
  },
  args: {
    side: 'left',
    align: 'start',
    title: 'Title',
    description: 'Descripción',
    showTitle: true,
    showButtonGroup: true,
    showButtonSecondary: true,
    showClose: true,
    primaryLabel: 'Button',
    secondaryLabel: 'Button',
  },
  parameters: {
    layout: 'centered',
    backgrounds: { default: 'light' },
    docs: {
      description: {
        component: `
**Tooltip** muestra información contextual adicional sobre un elemento.

### Variantes
| Prop | Valores |
|------|---------|
| \`side\` | \`top\` \`right\` \`bottom\` \`left\` |
| \`align\` | \`start\` \`center\` \`end\` |
| \`showTitle\` | boolean |
| \`showButtonGroup\` | boolean |
| \`showClose\` | boolean |

### Anatomía
- **Arrow**: caret de 9px apuntando al elemento trigger
- **Close**: botón X en esquina superior derecha
- **Content**: título (Demi 16px) + descripción (Book 14px)
- **Button group**: botón Secondary Inverse + Primary Inverse
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<TooltipComponent>;

// ─────────────────────────────────────────────────────────────
//  PLAYGROUND
// ─────────────────────────────────────────────────────────────

export const Playground: Story = {
  name: '⚡ Playground',
  args: { side: 'left', align: 'start' },
  parameters: { layout: 'padded' },
};

// ─────────────────────────────────────────────────────────────
//  SIDE — 4 lados
// ─────────────────────────────────────────────────────────────

export const SideLeft: Story = {
  name: 'Side / Left',
  args: { side: 'left', align: 'start' },
  parameters: { layout: 'padded' },
};

export const SideTop: Story = {
  name: 'Side / Top',
  args: { side: 'top', align: 'start' },
  parameters: { layout: 'padded' },
};

export const SideRight: Story = {
  name: 'Side / Right',
  args: { side: 'right', align: 'start' },
  parameters: { layout: 'padded' },
};

export const SideBottom: Story = {
  name: 'Side / Bottom',
  args: { side: 'bottom', align: 'start' },
  parameters: { layout: 'padded' },
};

// ─────────────────────────────────────────────────────────────
//  ALIGNMENT — 3 alineaciones
// ─────────────────────────────────────────────────────────────

export const AlignStart: Story = {
  name: 'Align / Start',
  args: { side: 'left', align: 'start' },
  parameters: { layout: 'padded' },
};

export const AlignCenter: Story = {
  name: 'Align / Center',
  args: { side: 'left', align: 'center' },
  parameters: { layout: 'padded' },
};

export const AlignEnd: Story = {
  name: 'Align / End',
  args: { side: 'left', align: 'end' },
  parameters: { layout: 'padded' },
};

// ─────────────────────────────────────────────────────────────
//  CONTENT VARIANTS
// ─────────────────────────────────────────────────────────────

export const WithoutTitle: Story = {
  name: 'Content / Without Title',
  args: { showTitle: false },
  parameters: { layout: 'padded' },
};

export const WithoutButtons: Story = {
  name: 'Content / Without Buttons',
  args: { showButtonGroup: false },
  parameters: { layout: 'padded' },
};

export const WithoutClose: Story = {
  name: 'Content / Without Close',
  args: { showClose: false },
  parameters: { layout: 'padded' },
};

export const Minimal: Story = {
  name: 'Content / Minimal',
  args: { showTitle: false, showButtonGroup: false, showClose: false },
  parameters: { layout: 'padded' },
};

// ─────────────────────────────────────────────────────────────
//  ALL VARIANTS — grid completo
// ─────────────────────────────────────────────────────────────

export const AllSides: Story = {
  name: '📋 All Sides',
  render: () => ({
    template: `
      <div style="display:grid; grid-template-columns: repeat(2, 1fr); gap:64px; padding:64px; background:#f0f0f0;">
        <div style="display:flex; justify-content:center; align-items:center; padding:16px;">
          <app-tooltip [side]="'left'" [align]="'start'" [title]="'Left / Start'" [description]="'Descripción'" [showTitle]="true" [showButtonGroup]="true" [showButtonSecondary]="true" [showClose]="true"></app-tooltip>
        </div>
        <div style="display:flex; justify-content:center; align-items:center; padding:16px;">
          <app-tooltip [side]="'top'" [align]="'start'" [title]="'Top / Start'" [description]="'Descripción'" [showTitle]="true" [showButtonGroup]="true" [showButtonSecondary]="true" [showClose]="true"></app-tooltip>
        </div>
        <div style="display:flex; justify-content:center; align-items:center; padding:16px;">
          <app-tooltip [side]="'right'" [align]="'start'" [title]="'Right / Start'" [description]="'Descripción'" [showTitle]="true" [showButtonGroup]="true" [showButtonSecondary]="true" [showClose]="true"></app-tooltip>
        </div>
        <div style="display:flex; justify-content:center; align-items:center; padding:16px;">
          <app-tooltip [side]="'bottom'" [align]="'start'" [title]="'Bottom / Start'" [description]="'Descripción'" [showTitle]="true" [showButtonGroup]="true" [showButtonSecondary]="true" [showClose]="true"></app-tooltip>
        </div>
      </div>
    `,
    moduleMetadata: { imports: [TooltipComponent] },
  }),
  parameters: {
    layout: 'fullscreen',
    docs: { description: { story: '4 lados con alineación start.' } },
  },
};
