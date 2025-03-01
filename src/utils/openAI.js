import OpenAI from 'openai';
import { OPENAPI_KEY } from './constants';

const client = new OpenAI({
  apiKey: OPENAPI_KEY,
  dangerouslyAllowBrowser: true // This is the default and can be omitted
});
export default client;