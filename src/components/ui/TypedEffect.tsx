import React, { useState, useEffect, useRef } from 'react';

interface TypedEffectProps {
  strings: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBetween?: number;
}

const TypedEffect: React.FC<TypedEffectProps> = ({ 
  strings, 
  typingSpeed = 100, 
  deletingSpeed = 50, 
  delayBetween = 1500 
}) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!strings.length) return;

    const currentString = strings[currentIndex];
    
    if (isTyping) {
      // Typing effect
      if (displayText.length < currentString.length) {
        timeoutRef.current = setTimeout(() => {
          setDisplayText(currentString.substring(0, displayText.length + 1));
        }, typingSpeed);
      } else {
        // Finished typing, wait before deleting
        timeoutRef.current = setTimeout(() => {
          setIsTyping(false);
        }, delayBetween);
      }
    } else {
      // Deleting effect
      if (displayText.length > 0) {
        timeoutRef.current = setTimeout(() => {
          setDisplayText(displayText.substring(0, displayText.length - 1));
        }, deletingSpeed);
      } else {
        // Finished deleting, move to next string
        setIsTyping(true);
        setCurrentIndex((currentIndex + 1) % strings.length);
      }
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [displayText, currentIndex, isTyping, strings, typingSpeed, deletingSpeed, delayBetween]);

  return (
    <span className="inline-block">
      {displayText}
      <span className="animate-blink">|</span>
    </span>
  );
};

export default TypedEffect;