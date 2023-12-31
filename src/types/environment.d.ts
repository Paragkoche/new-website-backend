declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: "development" | "production";
      PORT?: string;
      TOKEN_KEY: string;
    }
  }
}
export {};
