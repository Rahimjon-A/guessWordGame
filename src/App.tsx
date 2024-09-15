import { useCallback, useEffect, useState } from 'react';
import words from './wordList.json';
import HangManPic from './components/HangManPic';
import HangManWord from './components/HangManWord';
import Keyboard from './components/Keyboard';

const getWord = () => {
  return words[Math.floor(Math.random() * words.length)];
};

const App = () => {
  const [wordToGuess, setWordToGuess] = useState(getWord);

  const [guessedWord, setGuessedWord] = useState<string[]>([]);

  const incorrectLetters = guessedWord.filter((letter) => !wordToGuess.includes(letter));

  const isLoser = incorrectLetters.length >= 6;
  const isWinner = wordToGuess.split('').every((letter) => guessedWord.includes(letter));

  const addGuessedLetter = useCallback(
    (letter: string) => {
      if (guessedWord.includes(letter) || isLoser || isWinner) return;

      setGuessedWord((currentLetterrs) => [...currentLetterrs, letter]);
    },
    [guessedWord, isLoser, isWinner]
  );

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;

      if (!key.match(/^[a-z]$/)) return;

      e.preventDefault();
      addGuessedLetter(key);
    };

    document.addEventListener('keypress', handler);

    return () => {
      document.removeEventListener('keypress', handler);
    };
  }, [guessedWord]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;

      if (key !== 'Enter') return;

      e.preventDefault();
      setGuessedWord([]);
      setWordToGuess(getWord());
    };

    document.addEventListener('keypress', handler);

    return () => {
      document.removeEventListener('keypress', handler);
    };
  }, []);

  return (
    <div
      style={{
        maxWidth: '800px',
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem',
        margin: '0 auto',
        alignItems: 'center',
      }}
    >
      <div style={{ fontSize: '2rem', textAlign: 'center' }}>
        {isLoser && 'Nice Try - Refresh the page to try again'}
        {isWinner && 'Winner!!! - Refresh the page to try again'}
      </div>
      <HangManPic numberOfGuesses={incorrectLetters.length} />
      <HangManWord reveal={isLoser} wordToGuess={wordToGuess} guessedWord={guessedWord} />
      <div style={{ alignSelf: 'stretch' }}>
        <Keyboard
          activeLetters={guessedWord.filter((letter) => wordToGuess.includes(letter))}
          inactiveLetters={incorrectLetters}
          addGuessedLetter={addGuessedLetter}
          disabled={isLoser || isWinner}
        />
      </div>
      <button
        onClick={() => {
          setGuessedWord([]);
          setWordToGuess(getWord());
        }}
        style={{
          backgroundColor: '#80d4ff',
          padding: '.5rem',
          fontSize: '2rem',
          color: 'white',
          borderRadius: '10px',
          border: 'none',
          cursor: 'pointer',
        }}
      >
        New Game
      </button>
    </div>
  );
};

export default App;
