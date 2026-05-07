# Angular Template

Modern Angular starter template focused on scalability, developer experience, accessibility, and clean architecture.

## Stack

- Angular 21+
- Standalone Components
- Tailwind CSS v4
- Tailwind Animations
- NgRx Signals
- ESLint + Prettier
- pnpm

# Setup

## 1. Rename the project

Update the project name in:

### `package.json`

```json
{
  "name": "my-project"
}
```

### `angular.json`

Replace `angular-starter` with your project name.

## 2. Install dependencies

```bash
pnpm install
```

## 3. Start development server

```bash
pnpm start
```

# Included Features

## Angular

- Standalone Components only
- Modern Angular APIs
- Signal-based state management
- Lazy loading ready
- SSR compatible structure

## NgRx

Included packages:

- `@ngrx/signals`
- `@ngrx/operators`

Recommended for:

- Local signal stores
- Reactive derived state
- Predictable state updates

## Tailwind CSS v4

Configured with:

- `prettier-plugin-tailwindcss`
- `tailwind-animations`
- Tailwind IntelliSense support
- Angular class binding autocomplete support
- Identity function for proper class sorting and formatting (`tw`)

## Code Quality

### ESLint

Preconfigured for:

- Angular
- TypeScript
- Accessibility
- Best practices

### Prettier

Integrated with:

- Tailwind class sorting
- Consistent formatting

## Developer Experience

Included improvements:

- Path aliases
- Clean folder structure
- Strict TypeScript configuration

# Optional Features

## Icons

Recommended package:

```bash
pnpm add @ng-icons/core @ng-icons/tabler-icons
```

Useful for:

- Tree-shakeable icons
- Better bundle size
- Easy icon management

## Progress Bar

Useful for route transition feedback.

### 1. Install package

```bash
pnpm add ngx-progressbar
```

### 2. Configure router progress

Add `provideNgProgressRouter` in `app.config.ts`.

```ts
provideNgProgressRouter({
  startEvents: [GuardsCheckEnd],
  completeEvents: [NavigationEnd],
  minDuration: 250,
}),
```

### 3. Add component

```html
<ng-progress ngProgressRouter />
```

### 4. Customize styles

```css
:root {
  --ng-progress-color: var(--color-black);
}

.dark {
  --ng-progress-color: var(--color-white);
}
```

# Recommended VSCode Extensions

- Angular Language Service
- ESLint
- Prettier
- Tailwind CSS IntelliSense
