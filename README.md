# Profanity Checker

A simple profanity checker that scans input text for bad words and returns a list of detected profanities. This project is built with Node.js, Express, and vanilla JavaScript, and is designed to help identify inappropriate language in a given text.

## Features

- **Profanity detection**: Scans and detects profane words in input text.
- **Real-time results**: The checker provides immediate feedback on whether the text contains profanity.
- **Frontend and backend**: Built with a basic HTML/CSS frontend and a Node.js/Express backend.

## Technologies Used

- **Node.js**: Backend JavaScript runtime.
- **Express**: Web framework for Node.js.
- **Vanilla JavaScript**: Used for the frontend to interact with the backend and display results.
- **Regular expressions**: Used to detect profane words in text.
  
## Installation

### Step 1: Clone the repository

```bash
git clone https://github.com/knarhar/ProfanityChecker.git
cd profanity-checker
```

### Step 2: Install dependencies

```bash
npm install
```

This will install **Express** and any other necessary packages.

### Step 3: Run the server

```bash
node server.js
```

The server will start, and you can visit the app in your browser at:

```
http://localhost:3000
```

## Usage

1. **Open the app in your browser**:
   Go to `http://localhost:3000` after starting the server.
   
2. **Input text**:
   Type or paste text into the text box on the page.

3. **Check for profanity**:
   Click the "Check Text" button to see if the input text contains any profane words.

4. **View the result**:
   The result will be displayed below the button, showing whether any profanities were found. If so, the detected words will be listed.

### Example Request

When you input text like:

```
This is some test text with badword and anotherbadword.
```

The server will respond with:

```json
{
  "containsProfanity": true,
  "words": ["badword", "anotherbadword"]
}
```

## Project Structure

```
/profanity-checker
  /public
    index.html        # Frontend HTML page with the form and input
  /src
    getWords.js       # Function that fetches the list of profane words
    profanityChecker.js # Logic for detecting profanity in text
  server.js           # Express server setup
  package.json        # Project metadata and dependencies
```

## Future Improvements

- **Expand the profanity word list**: Currently, the list is static. Consider integrating with external profanity databases or APIs to improve accuracy.
- **User feedback**: Allow users to submit feedback on false positives/negatives to improve the checker.
- **Support for multiple languages**: Extend the checker to support multiple languages for broader use cases.

