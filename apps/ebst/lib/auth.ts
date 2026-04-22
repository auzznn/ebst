import { auth as authInstance } from "@ebst/auth";

// Re-export the shared auth instance for use across the app
// This serves as the single source of truth for the frontend
export const auth = authInstance;
