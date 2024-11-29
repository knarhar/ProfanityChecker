import getWords from './getWords.js';

const profanityChecker = async (text) => {
    let badWords = await getWords(); // Получаем список слов
    // Очищаем массив от пустых строк и пробелов, удаляем дубликаты
    badWords = [...new Set(badWords.filter((word) => word.trim() !== ''))];

    // Создаем регулярное выражение, которое будет учитывать и знаки препинания
    const pattern = new RegExp(`\\b(${badWords.join('|')})\\b`, 'gi');
    const matches = text.match(pattern); // Ищем совпадения

    return matches ? { containsProfanity: true, words: matches } : { containsProfanity: false, words: [] };
};

export default profanityChecker;
