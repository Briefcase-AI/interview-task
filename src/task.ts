import OpenAI from "openai";
import "dotenv/config";

const openAI = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const callOpenAI = async (
  messages: OpenAI.Chat.Completions.ChatCompletionMessageParam[],
) => {
  return openAI.chat.completions.create({
    model: "gpt-4o",
    messages,
    temperature: 0,
  });
};

const extractDataFromImages = async () => {
  console.log("implement me")
};

extractDataFromImages()