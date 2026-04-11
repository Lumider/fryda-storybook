import type { Meta, StoryObj } from '@storybook/angular';
import { userEvent, within, expect } from '@storybook/test';
import { ButtonComponent } from './button';

// ─────────────────────────────────────────────────────────────
//  META
// ─────────────────────────────────────────────────────────────

const meta: Meta<ButtonComponent> = {
  title: 'Components/Button',
  component: ButtonComponent,
  tags: ['autodocs'],
  argTypes: {
    hierarchy: {
      control: 'select',
      options: ['primary', 'secondary', 'ghost', 'link', 'destructive'],
      description: 'Jerarquía visual del botón',
      table: {
        defaultValue: { summary: 'primary' },
      },
    },
    variant: {
      control: 'select',
      options: ['default', 'hover', 'pressed', 'focus', 'disabled', 'loading'],
      description: 'Estado interactivo del botón',
      table: {
        defaultValue: { summary: 'default' },
      },
    },
    mode: {
      control: 'select',
      options: ['default', 'inverse'],
      description: 'Modo de color (claro / oscuro)',
      table: {
        defaultValue: { summary: 'default' },
      },
    },
    label: {
      control: 'text',
      description: 'Texto visible del botón',
    },
  },
  args: {
    label: 'Button',
    hierarchy: 'primary',
    variant: 'default',
    mode: 'default',
  },
};

export default meta;
type Story = StoryObj<ButtonComponent>;

// ─────────────────────────────────────────────────────────────
//  PLAYGROUND — story interactivo con todos los controles
// ─────────────────────────────────────────────────────────────

export const Playground: Story = {
  name: '⚡ Playground',
  args: {
    label: 'Button',
    hierarchy: 'primary',
    variant: 'default',
    mode: 'default',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Story interactiva. Usa los **Controls** para cambiar jerarquía, estado y modo. El panel **Interactions** muestra cada paso automatizado.',
      },
    },
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');

    await step('Render — Default state visible', async () => {
      await expect(button).toBeInTheDocument();
      await expect(button).not.toBeDisabled();
    });

    await step('Hover — cursor sobre el botón', async () => {
      await userEvent.hover(button);
    });

    await step('Unhover — cursor sale del botón', async () => {
      await userEvent.unhover(button);
    });

    await step('Focus — foco por teclado (Tab)', async () => {
      await userEvent.tab();
      await expect(button).toHaveFocus();
    });

    await step('Click — simula pulsación', async () => {
      await userEvent.click(button);
    });

    await step('Blur — pierde el foco', async () => {
      await userEvent.tab();
    });
  },
};

// ─────────────────────────────────────────────────────────────
//  PLAYGROUND INTERACCIONES ESPECÍFICAS
// ─────────────────────────────────────────────────────────────

export const PlaygroundHoverDemo: Story = {
  name: '⚡ Playground / Hover demo',
  args: { hierarchy: 'primary', variant: 'default' },
  parameters: {
    docs: {
      description: { story: 'El cursor entra y sale del botón automáticamente.' },
    },
  },
  play: async ({ canvasElement, step }) => {
    const button = within(canvasElement).getByRole('button');
    await step('Hover in', async () => { await userEvent.hover(button); });
    await step('Hover out', async () => { await userEvent.unhover(button); });
  },
};

export const PlaygroundFocusDemo: Story = {
  name: '⚡ Playground / Focus demo',
  args: { hierarchy: 'primary', variant: 'default' },
  parameters: {
    docs: {
      description: { story: 'Simula navegación por teclado — muestra el focus ring.' },
    },
  },
  play: async ({ canvasElement, step }) => {
    const button = within(canvasElement).getByRole('button');
    await step('Tab focus', async () => {
      button.focus();
      await expect(button).toHaveFocus();
    });
    await step('Blur', async () => { button.blur(); });
  },
};

export const PlaygroundDisabledDemo: Story = {
  name: '⚡ Playground / Disabled demo',
  args: { hierarchy: 'primary', variant: 'disabled' },
  parameters: {
    docs: {
      description: { story: 'Verifica que el botón deshabilitado no acepta interacción.' },
    },
  },
  play: async ({ canvasElement, step }) => {
    const button = within(canvasElement).getByRole('button');
    await step('El botón debe estar deshabilitado', async () => {
      await expect(button).toBeDisabled();
    });
  },
};

// ─────────────────────────────────────────────────────────────
//  PRIMARY — Mode: Default
// ─────────────────────────────────────────────────────────────

export const PrimaryDefault: Story = {
  name: 'Primary / Default',
  args: { hierarchy: 'primary', variant: 'default' },
};

export const PrimaryHover: Story = {
  name: 'Primary / Hover',
  args: { hierarchy: 'primary', variant: 'hover' },
};

export const PrimaryPressed: Story = {
  name: 'Primary / Pressed',
  args: { hierarchy: 'primary', variant: 'pressed' },
};

export const PrimaryFocus: Story = {
  name: 'Primary / Focus',
  args: { hierarchy: 'primary', variant: 'focus' },
};

export const PrimaryDisabled: Story = {
  name: 'Primary / Disabled',
  args: { hierarchy: 'primary', variant: 'disabled' },
};

export const PrimaryLoading: Story = {
  name: 'Primary / Loading',
  args: { hierarchy: 'primary', variant: 'loading' },
};

// ─────────────────────────────────────────────────────────────
//  PRIMARY — Mode: Inverse
// ─────────────────────────────────────────────────────────────

export const PrimaryInverseDefault: Story = {
  name: 'Primary Inverse / Default',
  args: { hierarchy: 'primary', variant: 'default', mode: 'inverse' },
  parameters: {
    backgrounds: { default: 'dark' },
  },
};

export const PrimaryInverseHover: Story = {
  name: 'Primary Inverse / Hover',
  args: { hierarchy: 'primary', variant: 'hover', mode: 'inverse' },
  parameters: {
    backgrounds: { default: 'dark' },
  },
};

export const PrimaryInversePressed: Story = {
  name: 'Primary Inverse / Pressed',
  args: { hierarchy: 'primary', variant: 'pressed', mode: 'inverse' },
  parameters: {
    backgrounds: { default: 'dark' },
  },
};

export const PrimaryInverseFocus: Story = {
  name: 'Primary Inverse / Focus',
  args: { hierarchy: 'primary', variant: 'focus', mode: 'inverse' },
  parameters: {
    backgrounds: { default: 'dark' },
  },
};

export const PrimaryInverseDisabled: Story = {
  name: 'Primary Inverse / Disabled',
  args: { hierarchy: 'primary', variant: 'disabled', mode: 'inverse' },
  parameters: {
    backgrounds: { default: 'dark' },
  },
};

export const PrimaryInverseLoading: Story = {
  name: 'Primary Inverse / Loading',
  args: { hierarchy: 'primary', variant: 'loading', mode: 'inverse' },
  parameters: {
    backgrounds: { default: 'dark' },
  },
};

// ─────────────────────────────────────────────────────────────
//  SECONDARY — Mode: Default
// ─────────────────────────────────────────────────────────────

export const SecondaryDefault: Story = {
  name: 'Secondary / Default',
  args: { hierarchy: 'secondary', variant: 'default' },
};

export const SecondaryHover: Story = {
  name: 'Secondary / Hover',
  args: { hierarchy: 'secondary', variant: 'hover' },
};

export const SecondaryPressed: Story = {
  name: 'Secondary / Pressed',
  args: { hierarchy: 'secondary', variant: 'pressed' },
};

export const SecondaryFocus: Story = {
  name: 'Secondary / Focus',
  args: { hierarchy: 'secondary', variant: 'focus' },
};

export const SecondaryDisabled: Story = {
  name: 'Secondary / Disabled',
  args: { hierarchy: 'secondary', variant: 'disabled' },
};

export const SecondaryLoading: Story = {
  name: 'Secondary / Loading',
  args: { hierarchy: 'secondary', variant: 'loading' },
};

// ─────────────────────────────────────────────────────────────
//  SECONDARY — Mode: Inverse
// ─────────────────────────────────────────────────────────────

export const SecondaryInverseDefault: Story = {
  name: 'Secondary Inverse / Default',
  args: { hierarchy: 'secondary', variant: 'default', mode: 'inverse' },
  parameters: { backgrounds: { default: 'dark' } },
};

export const SecondaryInverseHover: Story = {
  name: 'Secondary Inverse / Hover',
  args: { hierarchy: 'secondary', variant: 'hover', mode: 'inverse' },
  parameters: { backgrounds: { default: 'dark' } },
};

export const SecondaryInversePressed: Story = {
  name: 'Secondary Inverse / Pressed',
  args: { hierarchy: 'secondary', variant: 'pressed', mode: 'inverse' },
  parameters: { backgrounds: { default: 'dark' } },
};

export const SecondaryInverseFocus: Story = {
  name: 'Secondary Inverse / Focus',
  args: { hierarchy: 'secondary', variant: 'focus', mode: 'inverse' },
  parameters: { backgrounds: { default: 'dark' } },
};

export const SecondaryInverseDisabled: Story = {
  name: 'Secondary Inverse / Disabled',
  args: { hierarchy: 'secondary', variant: 'disabled', mode: 'inverse' },
  parameters: { backgrounds: { default: 'dark' } },
};

export const SecondaryInverseLoading: Story = {
  name: 'Secondary Inverse / Loading',
  args: { hierarchy: 'secondary', variant: 'loading', mode: 'inverse' },
  parameters: { backgrounds: { default: 'dark' } },
};

// ─────────────────────────────────────────────────────────────
//  GHOST — Mode: Default
// ─────────────────────────────────────────────────────────────

export const GhostDefault: Story = {
  name: 'Ghost / Default',
  args: { hierarchy: 'ghost', variant: 'default' },
};

export const GhostHover: Story = {
  name: 'Ghost / Hover',
  args: { hierarchy: 'ghost', variant: 'hover' },
};

export const GhostPressed: Story = {
  name: 'Ghost / Pressed',
  args: { hierarchy: 'ghost', variant: 'pressed' },
};

export const GhostFocus: Story = {
  name: 'Ghost / Focus',
  args: { hierarchy: 'ghost', variant: 'focus' },
};

export const GhostDisabled: Story = {
  name: 'Ghost / Disabled',
  args: { hierarchy: 'ghost', variant: 'disabled' },
};

export const GhostLoading: Story = {
  name: 'Ghost / Loading',
  args: { hierarchy: 'ghost', variant: 'loading' },
};

// ─────────────────────────────────────────────────────────────
//  GHOST — Mode: Inverse
// ─────────────────────────────────────────────────────────────

export const GhostInverseDefault: Story = {
  name: 'Ghost Inverse / Default',
  args: { hierarchy: 'ghost', variant: 'default', mode: 'inverse' },
  parameters: { backgrounds: { default: 'dark' } },
};

export const GhostInverseHover: Story = {
  name: 'Ghost Inverse / Hover',
  args: { hierarchy: 'ghost', variant: 'hover', mode: 'inverse' },
  parameters: { backgrounds: { default: 'dark' } },
};

export const GhostInversePressed: Story = {
  name: 'Ghost Inverse / Pressed',
  args: { hierarchy: 'ghost', variant: 'pressed', mode: 'inverse' },
  parameters: { backgrounds: { default: 'dark' } },
};

export const GhostInverseFocus: Story = {
  name: 'Ghost Inverse / Focus',
  args: { hierarchy: 'ghost', variant: 'focus', mode: 'inverse' },
  parameters: { backgrounds: { default: 'dark' } },
};

export const GhostInverseDisabled: Story = {
  name: 'Ghost Inverse / Disabled',
  args: { hierarchy: 'ghost', variant: 'disabled', mode: 'inverse' },
  parameters: { backgrounds: { default: 'dark' } },
};

export const GhostInverseLoading: Story = {
  name: 'Ghost Inverse / Loading',
  args: { hierarchy: 'ghost', variant: 'loading', mode: 'inverse' },
  parameters: { backgrounds: { default: 'dark' } },
};

// ─────────────────────────────────────────────────────────────
//  LINK — Mode: Default
// ─────────────────────────────────────────────────────────────

export const LinkDefault: Story = {
  name: 'Link / Default',
  args: { hierarchy: 'link', variant: 'default' },
};

export const LinkHover: Story = {
  name: 'Link / Hover',
  args: { hierarchy: 'link', variant: 'hover' },
};

export const LinkPressed: Story = {
  name: 'Link / Pressed',
  args: { hierarchy: 'link', variant: 'pressed' },
};

export const LinkFocus: Story = {
  name: 'Link / Focus',
  args: { hierarchy: 'link', variant: 'focus' },
};

export const LinkDisabled: Story = {
  name: 'Link / Disabled',
  args: { hierarchy: 'link', variant: 'disabled' },
};

export const LinkLoading: Story = {
  name: 'Link / Loading',
  args: { hierarchy: 'link', variant: 'loading' },
};

// ─────────────────────────────────────────────────────────────
//  LINK — Mode: Inverse
// ─────────────────────────────────────────────────────────────

export const LinkInverseDefault: Story = {
  name: 'Link Inverse / Default',
  args: { hierarchy: 'link', variant: 'default', mode: 'inverse' },
  parameters: { backgrounds: { default: 'dark' } },
};

export const LinkInverseHover: Story = {
  name: 'Link Inverse / Hover',
  args: { hierarchy: 'link', variant: 'hover', mode: 'inverse' },
  parameters: { backgrounds: { default: 'dark' } },
};

export const LinkInversePressed: Story = {
  name: 'Link Inverse / Pressed',
  args: { hierarchy: 'link', variant: 'pressed', mode: 'inverse' },
  parameters: { backgrounds: { default: 'dark' } },
};

export const LinkInverseFocus: Story = {
  name: 'Link Inverse / Focus',
  args: { hierarchy: 'link', variant: 'focus', mode: 'inverse' },
  parameters: { backgrounds: { default: 'dark' } },
};

export const LinkInverseDisabled: Story = {
  name: 'Link Inverse / Disabled',
  args: { hierarchy: 'link', variant: 'disabled', mode: 'inverse' },
  parameters: { backgrounds: { default: 'dark' } },
};

export const LinkInverseLoading: Story = {
  name: 'Link Inverse / Loading',
  args: { hierarchy: 'link', variant: 'loading', mode: 'inverse' },
  parameters: { backgrounds: { default: 'dark' } },
};

// ─────────────────────────────────────────────────────────────
//  DESTRUCTIVE — Mode: Default
// ─────────────────────────────────────────────────────────────

export const DestructiveDefault: Story = {
  name: 'Destructive / Default',
  args: { hierarchy: 'destructive', variant: 'default' },
};

export const DestructiveHover: Story = {
  name: 'Destructive / Hover',
  args: { hierarchy: 'destructive', variant: 'hover' },
};

export const DestructivePressed: Story = {
  name: 'Destructive / Pressed',
  args: { hierarchy: 'destructive', variant: 'pressed' },
};

export const DestructiveFocus: Story = {
  name: 'Destructive / Focus',
  args: { hierarchy: 'destructive', variant: 'focus' },
};

export const DestructiveDisabled: Story = {
  name: 'Destructive / Disabled',
  args: { hierarchy: 'destructive', variant: 'disabled' },
};

export const DestructiveLoading: Story = {
  name: 'Destructive / Loading',
  args: { hierarchy: 'destructive', variant: 'loading' },
};
