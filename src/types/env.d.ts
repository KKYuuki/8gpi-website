namespace NodeJS {
  interface ProcessEnv {
    readonly RESEND_API_KEY: string;
    readonly NEXT_PUBLIC_EMAIL_RECIPIENT: string;
    readonly NODE_ENV: 'development' | 'production' | 'test';
  }
}
