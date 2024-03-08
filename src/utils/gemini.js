import { GoogleGenerativeAI } from "@google/generative-ai";
import { GEMINI_KEY } from "./constants";

const genAI = new GoogleGenerativeAI(GEMINI_KEY);
const gemini = genAI.getGenerativeModel({ model: "gemini-pro" });
export default gemini;
