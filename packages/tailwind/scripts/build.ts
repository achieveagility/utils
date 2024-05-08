import { outputFile } from 'fs-extra';
import tailwindDefaultTheme from 'tailwindcss/defaultTheme';

async function main() {
  const lines = [
    `export const defaultTheme = ${JSON.stringify(tailwindDefaultTheme, null, 2)}`,
    '',
  ];

  await outputFile('src/dist/default-theme.ts', lines.join('\n'));
}

await main();
