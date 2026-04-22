export interface IWord {
  id: string;
  en: string;
  definition: string;
  transcription?: string;
  audio?: string;
  status: 'new' | 'learning' | 'learned';
  category: string;
  createdAt: string;
}