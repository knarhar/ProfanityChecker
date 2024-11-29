import express from 'express';
import profanityChecker from './src/profanityChecker.js';

const app = express();
const port = 3000;

app.use(express.json()); // Для парсинга JSON в теле запроса

// Эндпоинт для проверки текста на нецензурную лексику
app.post('/check-profanity', async (req, res) => {
    const { text } = req.body; // Получаем текст из запроса

    if (!text) {
        return res.status(400).json({ error: 'Text is required' });
    }

    try {
        const result = await profanityChecker(text);
        res.json(result); // Отправляем результат обратно
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Статические файлы (HTML, CSS, JS) для фронтенда
app.use(express.static('public'));

// Запуск сервера
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
