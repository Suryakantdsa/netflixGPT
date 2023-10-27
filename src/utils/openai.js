import OpenAI from 'openai';
// import dotenv from 'dotenv';

// dotenv.config(); // Load environment variables from .env

const openaiKey = import.meta.env.VITE_OPENAI_KEY;

const openai = new OpenAI({
  apiKey: openaiKey,
  dangerouslyAllowBrowser: true
});

export default openai;
