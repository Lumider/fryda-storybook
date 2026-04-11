import type { Meta, StoryObj } from '@storybook/angular';
import { expect, within } from '@storybook/test';
import { BannerComponent } from './banner';

// ─────────────────────────────────────────────────────────────
//  META
// ─────────────────────────────────────────────────────────────

const meta: Meta<BannerComponent> = {
  title: 'Components/Banner',
  component: BannerComponent,
  tags: ['autodocs'],
  argTypes: {
    intent: {
      control: 'select',
      options: ['warning', 'neutral', 'error', 'info', 'success'],
      description: 'Intención semántica del banner',
      table: {
        defaultValue: { summary: 'warning' },
        type: {
          summary: "'warning' | 'neutral' | 'error' | 'info' | 'success'",
        },
      },
    },
    text: {
      control: 'text',
      description: 'Mensaje visible del banner',
      table: { defaultValue: { summary: 'Text' } },
    },
  },
  args: {
    intent: 'warning',
    text: 'Text',
  },
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
**Banner** es un componente de feedback inline que comunica mensajes contextuales al usuario.

Usa el borde izquierdo de color como indicador semántico de la intención.

| Intent | Uso |
|--------|-----|
| \`warning\` | Advertencia — acción recomendada pero no bloqueante |
| \`neutral\` | Información general sin carga semántica |
| \`error\` | Error o fallo crítico que requiere atención |
| \`info\` | Información útil o contexto adicional |
| \`success\` | Confirmación de acción completada correctamente |
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<BannerComponent>;

// ─────────────────────────────────────────────────────────────
//  PLAYGROUND
// ─────────────────────────────────────────────────────────────

export const Playground: Story = {
  name: '⚡ Playground',
  args: { intent: 'warning', text: 'Usa los controles para explorar cada intent.' },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);
    const banner = canvas.getByRole('alert');

    await step('Banner renderizado correctamente', async () => {
      await expect(banner).toBeInTheDocument();
    });

    await step('Contiene el texto esperado', async () => {
      await expect(banner).toHaveTextContent('Usa los controles para explorar cada intent.');
    });
  },
};

// ─────────────────────────────────────────────────────────────
//  WARNING
// ─────────────────────────────────────────────────────────────

export const Warning: Story = {
  name: 'Warning',
  args: {
    intent: 'warning',
    text: 'Revisa esta información antes de continuar.',
  },
  parameters: {
    docs: {
      description: {
        story: 'Advertencia — acción recomendada pero no bloqueante. Borde y texto en naranja.',
      },
    },
  },
  play: async ({ canvasElement, step }) => {
    const banner = within(canvasElement).getByRole('alert');
    await step('Banner Warning visible', async () => {
      await expect(banner).toBeInTheDocument();
      await expect(banner).toHaveTextContent('Revisa esta información antes de continuar.');
    });
  },
};

// ─────────────────────────────────────────────────────────────
//  NEUTRAL
// ─────────────────────────────────────────────────────────────

export const Neutral: Story = {
  name: 'Neutral',
  args: {
    intent: 'neutral',
    text: 'Este campo es opcional pero recomendado.',
  },
  parameters: {
    docs: {
      description: {
        story: 'Información general sin carga semántica. Borde y texto en gris oscuro.',
      },
    },
  },
  play: async ({ canvasElement, step }) => {
    const banner = within(canvasElement).getByRole('alert');
    await step('Banner Neutral visible', async () => {
      await expect(banner).toBeInTheDocument();
    });
  },
};

// ─────────────────────────────────────────────────────────────
//  ERROR
// ─────────────────────────────────────────────────────────────

export const Error: Story = {
  name: 'Error',
  args: {
    intent: 'error',
    text: 'Ocurrió un error. Por favor intenta de nuevo.',
  },
  parameters: {
    docs: {
      description: {
        story: 'Error o fallo crítico que requiere atención inmediata. Borde y texto en rojo.',
      },
    },
  },
  play: async ({ canvasElement, step }) => {
    const banner = within(canvasElement).getByRole('alert');
    await step('Banner Error visible', async () => {
      await expect(banner).toBeInTheDocument();
      await expect(banner).toHaveTextContent('Ocurrió un error. Por favor intenta de nuevo.');
    });
  },
};

// ─────────────────────────────────────────────────────────────
//  INFO
// ─────────────────────────────────────────────────────────────

export const Info: Story = {
  name: 'Info',
  args: {
    intent: 'info',
    text: 'Tu sesión expirará en 15 minutos.',
  },
  parameters: {
    docs: {
      description: {
        story: 'Información útil o contexto adicional. Borde y texto en azul.',
      },
    },
  },
  play: async ({ canvasElement, step }) => {
    const banner = within(canvasElement).getByRole('alert');
    await step('Banner Info visible', async () => {
      await expect(banner).toBeInTheDocument();
    });
  },
};

// ─────────────────────────────────────────────────────────────
//  SUCCESS
// ─────────────────────────────────────────────────────────────

export const Success: Story = {
  name: 'Success',
  args: {
    intent: 'success',
    text: 'Los cambios se guardaron correctamente.',
  },
  parameters: {
    docs: {
      description: {
        story: 'Confirmación de acción completada. Borde y texto en verde/teal.',
      },
    },
  },
  play: async ({ canvasElement, step }) => {
    const banner = within(canvasElement).getByRole('alert');
    await step('Banner Success visible', async () => {
      await expect(banner).toBeInTheDocument();
      await expect(banner).toHaveTextContent('Los cambios se guardaron correctamente.');
    });
  },
};

// ─────────────────────────────────────────────────────────────
//  ALL INTENTS — Vista comparativa
// ─────────────────────────────────────────────────────────────

export const AllIntents: Story = {
  name: '📋 Todos los intents',
  render: () => ({
    template: `
      <div style="display: flex; flex-direction: column; gap: 12px; max-width: 400px;">
        <app-banner intent="warning" text="Warning — Revisa esta información antes de continuar." />
        <app-banner intent="neutral" text="Neutral — Este campo es opcional pero recomendado." />
        <app-banner intent="error"   text="Error — Ocurrió un error. Por favor intenta de nuevo." />
        <app-banner intent="info"    text="Info — Tu sesión expirará en 15 minutos." />
        <app-banner intent="success" text="Success — Los cambios se guardaron correctamente." />
      </div>
    `,
    moduleMetadata: { imports: [BannerComponent] },
  }),
  parameters: {
    docs: {
      description: {
        story: 'Vista comparativa de todos los intents juntos.',
      },
    },
  },
};
