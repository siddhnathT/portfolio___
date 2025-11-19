// The original implementation used the `@google/genai` package which may not
// be installed in every environment (and can be Node-only). To allow the
// frontend dev server to run without that package, this module provides a
// safe fallback implementation which returns a helpful message when the AI
// service is not available.

// SYSTEM_INSTRUCTION is reserved for future AI integration when a real Gemini client is available.
// For now, the AI service uses a fallback message without needing this constant.
// const SYSTEM_INSTRUCTION = `...`;

export const sendMessageToGemini = async (_message: string): Promise<string> => {
  // Provide a clear fallback when the real AI client isn't available.
  return "AI service not configured (package not installed or API key missing). Please contact Siddhnath directly.";
};
