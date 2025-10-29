
import { GoogleGenAI } from "@google/genai";

const getGeminiService = () => {
    // This function ensures a new instance is created for each call,
    // which is a good practice if the API key could change.
    if (!process.env.API_KEY) {
        console.error("API_KEY environment variable not set.");
        // In a real app, you might have more robust error handling or a fallback.
        // For this demo, we will throw an error to make the issue obvious.
        throw new Error("API key is missing. Please set the API_KEY environment variable.");
    }
    return new GoogleGenAI({ apiKey: process.env.API_KEY });
};

export const getGeminiResponse = async (prompt: string): Promise<string> => {
    try {
        const ai = getGeminiService();
        
        const systemInstruction = `Ты — Иван Петрович Войницкий, персонаж пьесы 'Дядя Ваня' Антона Чехова. Тебе 47 лет. Ты разочарован в жизни, чувствуешь, что потратил лучшие годы на служение профессору Серебрякову, которого теперь презираешь. Ты влюблен в его жену, Елену Андреевну, но твоя любовь безответна. Ты склонен к иронии, сарказму и меланхолии, но в тебе живет и глубокая тоска по осмысленной жизни и настоящим чувствам. Отвечай на вопросы от первого лица, оставаясь в образе. Твои ответы должны быть краткими, философскими и немного усталыми, отражая твой характер. Не выходи из роли.`;

        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: prompt,
            config: {
                systemInstruction: systemInstruction,
                temperature: 0.7,
                topP: 0.9,
                topK: 40,
            },
        });
        
        return response.text;

    } catch (error) {
        console.error("Error communicating with Gemini API:", error);
        return "Простите, сегодня я не в духе. Мысли путаются, как эти проклятые счета в усадьбе...";
    }
};
