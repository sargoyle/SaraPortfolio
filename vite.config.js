import fs from 'node:fs';
import path from 'node:path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

function getLabRouteInputs() {
  const labDirectory = path.resolve('lab');
  if (!fs.existsSync(labDirectory)) return {};

  return Object.fromEntries(
    fs.readdirSync(labDirectory, { withFileTypes: true })
      .filter((entry) => entry.isDirectory())
      .map((entry) => {
        const inputPath = path.join(labDirectory, entry.name, 'index.html');
        return [`lab-${entry.name}`, inputPath];
      })
      .filter(([, inputPath]) => fs.existsSync(inputPath))
  );
}

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        tuckedAway: 'tucked-away.html',
        ...getLabRouteInputs(),
      },
    },
  },
  plugins: [react()],
});
