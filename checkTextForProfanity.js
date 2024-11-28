import getWords from './getWords.js';

const checkTextForProfanity = async (text) => {
    let badWords = await getWords(); // Получаем список слов
    // Очищаем массив от пустых строк и пробелов
    badWords = badWords.filter((word) => word.trim() !== '');
    
    const pattern = new RegExp(`\\b(${badWords.join('|')})\\b`, 'gi');
    const matches = text.match(pattern); // Ищем совпадения

    return matches ? { containsProfanity: true, words: matches } : { containsProfanity: false, words: [] };
};

const testText = "This is some example text with badword and fuck anotherbadword.";
checkTextForProfanity(testText).then((result) => {
    console.log(`Contains profanity: ${result.containsProfanity}`); // true или false
    console.log(`Profane words: ${result.words.join(', ')}`); // Список слов
});
