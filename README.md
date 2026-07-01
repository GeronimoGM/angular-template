# Angular Template

Modern Angular starter template focused on scalability, developer experience, accessibility, and clean architecture.

## Stack

- Angular 22
- Tailwind v4
- spartan/ui
- Ng Icons (Tabler icons)
- Prettier
- ESLint
- pnpm

## Included Features

### Angular

- Standalone Components only
- Modern Angular APIs
- Signal-based state management
- Lazy loading ready
- SSR compatible structure

### Tailwind CSS v4

Configured with:

- `prettier-plugin-tailwindcss`
- Tailwind IntelliSense support

### Prettier

Integrated with:

- Tailwind class sorting
- Consistent formatting

### ESLint

As the default linter for the application.

### Developer Experience

Included improvements:

- Path aliases
- Clean folder structure
- Strict TypeScript configuration

## Optional Features

### NgRx

```bash
ng add @ngrx/signals@latest @ngrx/operators@latest
```

### i18n

#### 1. Install dependencies

```bash
ng add @angular/localize ng-extract-i18n-merge
```

#### 2. Add i18n support for client hydration

```ts
provideClientHydration(withI18nSupport()),
```

#### 3. Add extract i18n script

```json
"scripts": {
  "i18n:extract": "ng extract-i18n --output-path src/locale --format=xlf2"
}
```

### Progress Bar

Useful for route transition feedback.

#### 1. Install package

```bash
pnpm add ngx-progressbar
```

#### 2. Configure router progress

Add `provideNgProgressRouter` in `app.config.ts`.

```ts
provideNgProgressRouter({
  startEvents: [GuardsCheckEnd],
  completeEvents: [NavigationEnd],
  minDuration: 250,
}),
```

#### 3. Add component

```html
<ng-progress ngProgressRouter />
```

#### 4. Customize styles

```css
:root {
  --ng-progress-color: var(--color-black);
}

.dark {
  --ng-progress-color: var(--color-white);
}
```

## Recommended VSCode Extensions

- Angular Language Service
- Tailwind CSS IntelliSense
- Prettier
- ESLint
