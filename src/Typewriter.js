import React, { useEffect, useState } from "react";
import "./Typewriter.css";

const TypewriterText = ({ textArray, typingSpeed, pauseDuration }) => {
  const [displayText, setDisplayText] = useState("");
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (currentCharIndex < textArray[currentTextIndex].length) {
        setDisplayText(
          (prevText) => prevText + textArray[currentTextIndex][currentCharIndex]
        );
        setCurrentCharIndex((prevIndex) => {
          return prevIndex + 1;
        });
      } else {
        clearInterval(timer);
        setTimeout(() => {
          setCurrentCharIndex(0);
          setCurrentTextIndex((prevIndex) => {
            if (prevIndex < textArray.length - 1) {
              return prevIndex + 1;
            } else {
              return 0;
            }
          });
          setDisplayText("");
        }, pauseDuration);
      }
    }, typingSpeed);

    return () => clearInterval(timer);
  }, [
    currentCharIndex,
    currentTextIndex,
    textArray,
    typingSpeed,
    pauseDuration,
  ]);

  return (
    <span className="typewriter-text" style={{ color: "#f31559" }}>
      {displayText}
    </span>
  );
};

export default TypewriterText;
