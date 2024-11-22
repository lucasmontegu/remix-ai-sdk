import type { ActionFunctionArgs } from '@vercel/remix';
import { createOpenAI } from '@ai-sdk/openai';
import { streamText } from 'ai';
export const config = { runtime: 'edge' };

/* const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
}); */

const openai = createOpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function action({ request }: ActionFunctionArgs) {
  const { messages } = await request.json();

  const model = openai(process.env.OPENAI_MODEL as string);
  
  const result = streamText({
    model,
    system: 'You are a helpful assistant.',
    messages,
  });

  return result.toDataStreamResponse();
}
