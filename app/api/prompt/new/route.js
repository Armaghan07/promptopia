import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";

export async function POST(req, res) {
  const { userId, tag, prompt } = await req.json();
  try {
    await connectToDB();
    const newPrompt = new Prompt({ creator: userId, tag, prompt });
    await newPrompt.save();
    return new Response(JSON.stringify(newPrompt), { status: 201 });
  } catch (error) {
    return new Response("failed to create a new prompt!", { status: 500 });
  }
}





