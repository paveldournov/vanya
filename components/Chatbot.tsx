
import React, { useState, useRef, useEffect, useCallback } from 'react';
import { ChatMessage } from '../types';
import { getGeminiResponse } from '../services/geminiService';
import { SendIcon } from './icons';

const Chatbot: React.FC<{ id: string }> = ({ id }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { sender: 'bot', text: 'Здравствуйте! Я — Иван Петрович Войницкий, более известный как дядя Ваня. Спрашивайте, если что-то гложет вашу душу... Постараюсь ответить, как смогу.' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = useCallback(async () => {
    if (input.trim() === '' || isLoading) return;

    const userMessage: ChatMessage = { sender: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const botResponseText = await getGeminiResponse(input);
      const botMessage: ChatMessage = { sender: 'bot', text: botResponseText };
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error("Error getting response from Gemini:", error);
      const errorMessage: ChatMessage = { sender: 'bot', text: 'Простите, голова сегодня занята другим... Не могу ясно мыслить.' };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  }, [input, isLoading]);

  return (
    <section id={id} className="scroll-mt-20">
      <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8 text-center text-amber-300">Поговорите с дядей Ваней</h2>
      <div className="max-w-2xl mx-auto bg-gray-800/50 rounded-lg shadow-2xl flex flex-col h-[500px]">
        <div className="flex-1 p-4 overflow-y-auto">
          <div className="space-y-4">
            {messages.map((msg, index) => (
              <div key={index} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-xs md:max-w-md p-3 rounded-lg ${msg.sender === 'user' ? 'bg-amber-600 text-white' : 'bg-gray-700 text-gray-200'}`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-gray-700 text-gray-200 p-3 rounded-lg">
                  <span className="animate-pulse">...</span>
                </div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>
        </div>
        <div className="p-4 border-t border-gray-700">
          <div className="flex items-center space-x-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Спросите что-нибудь..."
              className="flex-1 bg-gray-700 text-white placeholder-gray-400 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
              disabled={isLoading}
            />
            <button
              onClick={handleSend}
              disabled={isLoading}
              className="bg-amber-500 hover:bg-amber-600 text-gray-900 font-bold p-2 rounded-md disabled:bg-gray-600 disabled:cursor-not-allowed transition-colors"
            >
              <SendIcon />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Chatbot;
