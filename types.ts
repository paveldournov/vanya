
export interface Actor {
  name: string;
  role: string;
  imageUrl: string;
}

export interface Performance {
  date: string;
  day: string;
  time: string;
  url: string;
}

export interface ChatMessage {
  sender: 'user' | 'bot';
  text: string;
}
