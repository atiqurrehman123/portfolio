"use client";

import { useEffect, useState } from "react";

interface TypewriterProps {
  text: string;
  delay?: number;
  onComplete: () => void;
  isTyping: boolean;
  cursorHeightClass?: string;
}

export const Typewriter: React.FC<TypewriterProps> = ({
  text,
  delay = 50,
  onComplete,
  isTyping,
  cursorHeightClass = "h-6",
}) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    if (isTyping) {
      setDisplayedText("");
    }
  }, [isTyping, text]);

  useEffect(() => {
    if (isTyping && displayedText.length < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(text.substring(0, displayedText.length + 1));
      }, delay);
      return () => clearTimeout(timeout);
    }

    if (isTyping && displayedText.length === text.length) {
      const completeTimeout = setTimeout(onComplete, 200);
      return () => clearTimeout(completeTimeout);
    }

    if (!isTyping && displayedText !== text) {
      setDisplayedText(text);
    }
  }, [displayedText, text, delay, isTyping, onComplete]);

  const cursorClass = isTyping ? "animate-pulse" : "opacity-0";
  const shouldShowCursor = isTyping && displayedText.length < text.length;

  return (
    <span className="relative inline-flex items-center">
      {displayedText}
      {shouldShowCursor && (
        <span
          className={`inline-block w-0.5 ${cursorHeightClass} bg-cyan-400 ml-1 absolute top-1/2 transform -translate-y-1/2 ${cursorClass}`}
        />
      )}
    </span>
  );
};


