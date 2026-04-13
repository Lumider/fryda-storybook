# @lumider/fryda-ui

FrYDA v3 — Design System UI Component Library for Angular.

## Links

- **Storybook** → https://lumider.github.io/fryda-storybook/
- **npm** → https://www.npmjs.com/package/@lumider/fryda-ui

---

## Installation

```bash
npm install @lumider/fryda-ui
```

### Setup (one time)

Add the design tokens to your project's global stylesheet (`src/styles.css` or `src/styles.scss`):

```css
@import '@lumider/fryda-ui/tokens';
```

This is required once per project. The tokens define colors, spacing, typography, and sizing used by all components.

---

## Usage

Import the components you need directly in your Angular standalone component:

```typescript
import { ButtonComponent, IconComponent } from '@lumider/fryda-ui';

@Component({
  standalone: true,
  imports: [ButtonComponent, IconComponent],
  template: `
    <app-button label="Guardar" hierarchy="primary" size="medium" />
    <app-icon name="check" size="m" />
  `,
})
export class MyComponent {}
```

---

## Components

### Button `<app-button>`

```html
<app-button
  label="Guardar"
  hierarchy="primary"
  size="medium"
/>
```

| Input | Type | Default |
|-------|------|---------|
| `label` | `string` | `''` |
| `hierarchy` | `primary` \| `secondary` \| `ghost` \| `link` \| `destructive` | `primary` |
| `variant` | `default` \| `hover` \| `pressed` \| `focus` \| `disabled` \| `loading` | `default` |
| `size` | `small` \| `medium` \| `large` | `medium` |
| `mode` | `default` \| `inverse` | `default` |

---

### Button Icon `<app-button-icon>`

```html
<app-button-icon
  hierarchy="primary"
  icon="close"
  ariaLabel="Cerrar"
/>
```

| Input | Type | Default |
|-------|------|---------|
| `hierarchy` | `primary` \| `secondary` \| `ghost` \| `link` \| `destructive` | `primary` |
| `icon` | `arrow` \| `close` | `close` |
| `ariaLabel` | `string` | `''` |
| `variant` | `default` \| `hover` \| `pressed` \| `focus` \| `disabled` \| `loading` | `default` |
| `mode` | `default` \| `inverse` | `default` |

---

### Checkbox `<app-checkbox>`

```html
<app-checkbox label="Acepto términos" value="unselected" />
```

| Input | Type | Default |
|-------|------|---------|
| `value` | `unselected` \| `selected` \| `indeterminate` | `unselected` |
| `state` | `default` \| `hover` \| `pressed` \| `focus` \| `disabled` | `default` |
| `label` | `string` | `''` |

| Output | Type |
|--------|------|
| `valueChange` | `EventEmitter<'unselected' \| 'selected' \| 'indeterminate'>` |

---

### Radio Button `<app-radio-button>`

```html
<app-radio-button name="grupo" label="Opción A" [checked]="true" />
<app-radio-button name="grupo" label="Opción B" [checked]="false" />
```

| Input | Type | Default |
|-------|------|---------|
| `name` | `string` | `''` |
| `label` | `string` | `''` |
| `checked` | `boolean` | `false` |
| `state` | `default` \| `hover` \| `pressed` \| `focus` \| `disabled` | `default` |

| Output | Type |
|--------|------|
| `checkedChange` | `EventEmitter<boolean>` |

---

### Icon `<app-icon>`

```html
<app-icon name="check" size="m" />
<app-icon name="settings" size="l" [strokeWidth]="1.5" />
```

| Input | Type | Default |
|-------|------|---------|
| `name` | `IconName` (191 opciones) | `check` |
| `size` | `s` \| `m` \| `l` | `m` |
| `strokeWidth` | `number` | `2` |

Tamaños: `s` = 16px · `m` = 24px · `l` = 32px

El color se hereda del CSS `color` del elemento padre (`currentColor`).

---

### Tooltip `<app-tooltip>`

```html
<app-tooltip
  side="bottom"
  align="center"
  title="Información"
  description="Texto del tooltip."
  [showTitle]="true"
  [showButtonGroup]="true"
  primaryLabel="Aceptar"
/>
```

| Input | Type | Default |
|-------|------|---------|
| `side` | `top` \| `right` \| `bottom` \| `left` | `bottom` |
| `align` | `start` \| `center` \| `end` | `center` |
| `title` | `string` | `''` |
| `description` | `string` | `''` |
| `showTitle` | `boolean` | `false` |
| `showButtonGroup` | `boolean` | `false` |
| `showButtonSecondary` | `boolean` | `false` |
| `showClose` | `boolean` | `false` |
| `primaryLabel` | `string` | `''` |
| `secondaryLabel` | `string` | `''` |

| Output | Type |
|--------|------|
| `closed` | `EventEmitter<void>` |
| `primaryClick` | `EventEmitter<void>` |
| `secondaryClick` | `EventEmitter<void>` |

---

### Banner `<app-banner>`

```html
<app-banner intent="success" text="Cambios guardados correctamente." />
```

| Input | Type | Default |
|-------|------|---------|
| `intent` | `info` \| `success` \| `warning` \| `error` \| `neutral` | `info` |
| `text` | `string` | `''` |

---

## Peer Dependencies

```json
{
  "@angular/common": "^21.2.0",
  "@angular/core": "^21.2.0"
}
```
