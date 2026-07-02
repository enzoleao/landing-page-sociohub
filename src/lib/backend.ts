type BackendErrorPayload = {
  message?: string | string[];
  messages?: Record<string, string[]>;
  error?: string;
};

const backendApiUrl = process.env.API_URL ?? process.env.BACKEND_API_URL;

export const resolveBackendUrl = (path: string) => {
  if (!backendApiUrl) {
    throw new Error("Integração com o backend não configurada. Defina API_URL no ambiente.");
  }

  return new URL(path, backendApiUrl).toString();
};

export const extractBackendErrorMessage = (payload: unknown, fallback: string) => {
  if (!payload || typeof payload !== "object") {
    return fallback;
  }

  const candidate = payload as BackendErrorPayload;

  if (typeof candidate.message === "string" && candidate.message.trim()) {
    return candidate.message;
  }

  if (Array.isArray(candidate.message) && candidate.message.length > 0) {
    return candidate.message[0];
  }

  if (candidate.messages && typeof candidate.messages === "object") {
    for (const messages of Object.values(candidate.messages)) {
      if (Array.isArray(messages) && messages.length > 0 && typeof messages[0] === "string") {
        return messages[0];
      }
    }
  }

  return fallback;
};
