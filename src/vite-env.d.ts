/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** URL pública del sitio. La inyecta el pipeline como build-arg. */
  readonly VITE_BASE_URL: string;
  readonly VITE_APP_MODE?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
