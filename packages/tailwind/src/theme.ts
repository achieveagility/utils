import { deepmerge } from '@aaos/deepmerge';
import { defaultTheme } from './dist/default-theme.js';

const aaTheme = {
  fontSize: {
    '4xs': ['0.25rem', { lineHeight: '0.25rem' }],
    '3xs': ['0.5rem', { lineHeight: '0.75rem' }],
    '2xs': ['0.625rem', { lineHeight: '0.875rem' }],
    xs: ['0.75rem', { lineHeight: '1rem' }],
    md: ['1rem', { lineHeight: '1.5rem' }],
    lg: ['1.25rem', { lineHeight: '1.75rem' }],
    xl: ['1.5rem', { lineHeight: '2rem' }],
    '2xl': ['1.75rem', { lineHeight: '2.25rem' }],
    '3xl': ['2rem', { lineHeight: '2.5rem' }],
    '4xl': ['2.25rem', { lineHeight: '2.75rem' }],
  },
  spacing: {
    '3xs': '1px',
    '2xs': '2px',
    xs: '4px',
    sm: '8px',
    md: '10px',
    lg: '16px',
    xl: '20px',
    '2xl': '30px',
    '3xl': '40px',
    '4xl': '50px',
    '5xl': '60px',
  },
  borderWidth: {
    DEFAULT: '1px',
    0: '0px',
    xs: '1px',
    sm: '2px',
    md: '4px',
    lg: '8px',
    xl: '10px',
  },
  extend: {
    maxWidth: {
      '2xl': '40rem',
      '3xl': '50rem',
    },
    typography: (theme: (value: string) => void) => ({
      DEFAULT: {
        css: {
          h1: {
            color: theme('text-blue-600'),
          },
          a: {
            textDecoration: 'none',
          },
        },
      },
    }),
  },
};

export function createTheme<
  T extends Record<string, unknown> = Record<string, unknown>,
>(theme?: Record<string, unknown>) {
  return deepmerge<T>(defaultTheme, aaTheme, theme);
}
