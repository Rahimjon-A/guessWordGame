type hangManType = {
  wordToGuess: string;
  reveal?: boolean;
  guessedWord: string[];
};

const HangManWord = ({ wordToGuess, guessedWord, reveal = false }: hangManType) => {
  return (
    <div
      style={{
        fontSize: '6rem',
        display: 'flex',
        gap: '.25em',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontFamily: 'monospace',
      }}
    >
      {wordToGuess.split('').map((letter, index) => (
        <span key={index} style={{ borderBottom: '.1em solid black' }}>
          <span
            style={{
              visibility: guessedWord.includes(letter) || reveal ? 'visible' : 'hidden',
              color: !guessedWord.includes(letter) && reveal ? 'red' : 'black',
            }}
          >
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
};

export default HangManWord;
