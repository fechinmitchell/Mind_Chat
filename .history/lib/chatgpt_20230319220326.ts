// lib/chatgpt.ts
import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export async function createNewChat(prompt: string): Promise<string> {
  try {
    const response = await openai.createCompletion({
      engine: 'text-davinci-002',
      prompt: prompt,
      max_tokens: 150,
      n: 1,
      stop: null,
      temperature: 1,
    });

    if (response.choices && response.choices.length > 0) {
      return response.choices[0].text.trim();
    } else {
      throw new Error('No choices returned from OpenAI API');
    }
  } catch (error) {
    console.error('Error creating new chat:', error);
    throw error;
  }
}

export default openai;
