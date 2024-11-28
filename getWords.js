import { ProfanityEngine } from '@coffeeandfun/google-profanity-words';

const getWords = async () => {
    const profanity = new ProfanityEngine({ language: 'en' });
    const allWords = await profanity.all();

    return allWords
};

export default getWords;
