import React, { useState, useEffect } from 'react';

const CensoredText = ({ children, badWords }) => {
  const matchWords = children.match(/\w+/g) || [];
  const matchBadWords = badWords.join(' ').toLowerCase().match(/\w+/g) || [];
  const [originalWords, setOriginalWords] = useState([]);

  useEffect(() => {
    censorText();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const censorText = () => {
    const censoredText = matchWords.map((word, index) => {
      if (matchBadWords.includes(word.toLowerCase())) {
        return '*'.repeat(word.length);
      } else {
        return word;
      }
    });
    setOriginalWords(censoredText);
  };

  const toggleCensoring = (index) => {
    const newOriginalWords = [...originalWords];
    const originalWord = matchWords[index];
    if (newOriginalWords[index] === originalWord) {
      newOriginalWords[index] = '*'.repeat(originalWord.length);
    } else {
      newOriginalWords[index] = originalWord;
    }
    setOriginalWords(newOriginalWords);
  };

  return (
    <>
      <div>
        {originalWords.map((word, index) => (
          <span
            key={index}
            style={{ cursor: 'pointer' }}
            onClick={() => toggleCensoring(index)}
          >
            {word}
            {index !== originalWords.length - 1 && ' '}
          </span>
        ))}
      </div>
    </>
  );
};

export default CensoredText;
