# @aaos/deepmerge

A small, type-safe deep merge utility for JavaScript and TypeScript projects.  

Safely combines multiple objects, handling `null` and `undefined` values gracefully.

## Features

- Handles `undefined` and `null` inputs without errors  
- Deeply merges nested objects (not just shallow copies)  
- Supports merging multiple input objects  
- Fully unit-tested

## Installation

```bash
pnpm add @utils/deepmerge
# or
npm install @utils/deepmerge
# or
yarn add @utils/deepmerge
```

## Usage

```typescript
import { deepmerge } from '@utils/deepmerge';

// Basic merge
deepmerge({ foo: 'bar' }, { baz: 'qux' });
// → { foo: 'bar', baz: 'qux' }

// Deep merge
deepmerge({ foo: { bar: 'baz' } }, { foo: { baz: 'bar' } });
// → { foo: { bar: 'baz', baz: 'bar' } }

// Multiple merges
deepmerge(
  { foo: { bar: 'baz' } },
  { foo: { baz: 'bar' } },
  { baz: 'foo' },
);
// → { foo: { bar: 'baz', baz: 'bar' }, baz: 'foo' }
```
