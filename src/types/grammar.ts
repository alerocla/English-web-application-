export interface IGrammarRule {
  id: string;
  title: string;
  level: 'A1' | 'A2' | 'B1' | 'B2';
  category: string;
  shortDescription: {
    ua: string;
    ru: string;
  };
  fullContent: {
    ua: {
      explanation: string;
      formula: string;
      usage: string[];
    };
    ru: {
      explanation: string;
      formula: string;
      usage: string[];
    };
  };
  examples: { en: string; translation: string }[];
}
