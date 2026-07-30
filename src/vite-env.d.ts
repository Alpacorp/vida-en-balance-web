/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Public site URL. Injected by the pipeline as a build arg. */
  readonly VITE_BASE_URL: string;
  readonly VITE_APP_MODE?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
