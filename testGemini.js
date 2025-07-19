import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";

dotenv.config();
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function testAPI() {
    try {
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });
        const result = await model.generateContent("Say hello!");
        console.log(result.response.text());
    } catch (error) {
        console.error("API Error:", error);
    }
}

testAPI();
