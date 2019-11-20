export interface Env {
  STORYBOOK: string;
  API: string;
  DB: string;
  apiKey: string;
  authDomain: string;
  databaseURL: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
}
export const env: Partial<Env>;
