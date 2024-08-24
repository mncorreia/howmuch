import { vitePlugin as remix } from "@remix-run/dev";
import { installGlobals } from "@remix-run/node";
import { defineConfig } from "vite";
import { vercelPreset } from "@vercel/remix/vite";
import tsconfigPaths from 'vite-tsconfig-paths';
import { RemixVitePWA } from '@vite-pwa/remix'

installGlobals();



const { RemixVitePWAPlugin, RemixPWAPreset } = RemixVitePWA()


export default defineConfig({
  plugins: [remix({ presets: [vercelPreset(), RemixPWAPreset()] }),
  tsconfigPaths(),
  RemixVitePWAPlugin({
    injectRegister: 'auto'
  })
  ],
});
