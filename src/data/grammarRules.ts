import type {IGrammarRule} from "../types/grammar.ts";

export const grammarRules: IGrammarRule[] = [
  // Добавь это в массив grammarRules в файле src/data/grammarRules.ts

  {
    id: 'present-continuous',
    title: 'Present Continuous',
    level: 'A1',
    category: 'Tenses',
    shortDescription: {
      ua: 'Дія, що відбувається прямо зараз.',
      ru: 'Действие, которое происходит прямо сейчас.'
    },
    fullContent: {
      ua: {
        explanation: 'Використовується для опису дій, які тривають у момент мовлення або в теперішній період часу.',
        formula: 'Subject + am/is/are + Verb-ing',
        usage: [
          'Дія в момент мовлення',
          'Тимчасові ситуації',
          'Плани на найближче майбутнє'
        ]
      },
      ru: {
        explanation: 'Используется для описания действий, которые длятся в момент речи или в текущий период времени.',
        formula: 'Subject + am/is/are + Verb-ing',
        usage: [
          'Действие в момент речи',
          'Временные ситуации',
          'Планы на ближайшее будущее'
        ]
      }
    },
    examples: [
      { en: 'I am working right now.', translation: 'Я працюю прямо зараз.' },
      { en: 'They are playing football in the park.', translation: 'Вони грають у футбол у парку.' }
    ]
  },
  {
    id: 'past-simple',
    title: 'Past Simple',
    level: 'A2',
    category: 'Tenses',
    shortDescription: {
      ua: 'Завершена дія в минулому.',
      ru: 'Завершенное действие в прошлом.'
    },
    fullContent: {
      ua: {
        explanation: 'Використовується для дій, які почалися і закінчилися в конкретний час у минулому.',
        formula: 'Subject + Verb-ed (або 2-га форма для неправильних дієслів)',
        usage: [
          'Поодинокі дії в минулому',
          'Послідовність дій у минулому',
          'Звички, яких більше немає'
        ]
      },
      ru: {
        explanation: 'Используется для действий, которые начались и закончились в конкретное время в прошлом.',
        formula: 'Subject + Verb-ed (или 2-я форма для неправильных глаголов)',
        usage: [
          'Одиночные действия в прошлом',
          'Последовательность действий в прошлом',
          'Привычки, которых больше нет'
        ]
      }
    },
    examples: [
      { en: 'I watched a movie yesterday.', translation: 'Я дивився фільм учора.' },
      { en: 'She went to London last year.', translation: 'Вона поїхала до Лондона минулого року.' }
    ]
  },
  {
    id: 'modal-can',
    title: 'Modal Verb "Can"',
    level: 'A1',
    category: 'Modals',
    shortDescription: {
      ua: 'Вміння та можливості.',
      ru: 'Умения и возможности.'
    },
    fullContent: {
      ua: {
        explanation: 'Дієслово "can" не змінюється за особами (не додаємо -s) і після нього завжди йде дієслово без "to".',
        formula: 'Subject + can + Verb',
        usage: [
          'Фізична здатність/вміння',
          'Дозвіл щось зробити',
          'Можливість або ймовірність'
        ]
      },
      ru: {
        explanation: 'Глагол "can" не меняется по лицам (не добавляем -s) и после него всегда идет глагол без "to".',
        formula: 'Subject + can + Verb',
        usage: [
          'Физическая способность/умение',
          'Разрешение что-то сделать',
          'Возможность или вероятность'
        ]
      }
    },
    examples: [
      { en: 'I can swim very fast.', translation: 'Я вмію плавати дуже швидко.' },
      { en: 'Can I help you?', translation: 'Я можу вам допомогти?' }
    ]
  },
  {
    id: 'articles-a-an-the',
    title: 'Articles (a, an, the)',
    level: 'A1',
    category: 'Articles',
    shortDescription: {
      ua: 'Визначеність та невизначеність.',
      ru: 'Определенность и неопределенность.'
    },
    fullContent: {
      ua: {
        explanation: 'Артиклі ставляться перед іменниками. A/An — для чогось нового, The — для чогось відомого.',
        formula: 'a/an + однина; the + будь-яке число',
        usage: [
          'A/An: згадуємо вперше',
          'The: співрозмовник знає про що мова',
          'The: унікальні об’єкти (the Sun)'
        ]
      },
      ru: {
        explanation: 'Артикли ставятся перед существительными. A/An — для чего-то нового, The — для чего-то известного.',
        formula: 'a/an + единственное число; the + любое число',
        usage: [
          'A/An: упоминаем впервые',
          'The: собеседник знает о чем речь',
          'The: уникальные объекты (the Sun)'
        ]
      }
    },
    examples: [
      { en: 'I have a cat. The cat is black.', translation: 'У мене є кіт. Кіт чорний.' },
      { en: 'She is an architect.', translation: 'Вона архітектор.' }
    ]
  }
];