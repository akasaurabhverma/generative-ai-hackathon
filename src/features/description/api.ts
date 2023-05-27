// import type {AxiosPromise, AxiosResponse} from 'axios';
import {Configuration, OpenAIApi} from 'openai';

const apiKey = import.meta.env.VITE_OPENAI_SECURITY_KEY;
const organization = import.meta.env.VITE_OPENAI_ORG_ID;

export interface Product {
  heading: string;
  description: string;
  key_points: string[];
}

export async function handleGetDescription(
  product: string
): Promise<Product | undefined> {
  const configuration = new Configuration({apiKey});
  const openai = new OpenAIApi(configuration);
  try {
    const response = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      temperature: 0.5,
      messages: [{role: 'assistant', content: promptFor(product)}],
    });

    console.log('Response: ', response);

    const result: Product = JSON.parse(
      response.data.choices.at(0)?.message?.content ?? '{}'
    ) as Product;

    return result;
  } catch (error: any) {
    console.log(error);
  }
}

function promptFor(product: string): string {
  return `Generate catchy heading, key points, and descriptions about the product "${product}" for an E-commerce platform. Return it as a JSON object.
  Make sure the JSON result follows the format: 
  interface product {
    heading: string;
    description: string;
    keyPoints: string[];
  }`;
}
