'use client'

import { useState, useEffect } from "react";


export function useHackerEffect(word: string) {
  const [display, setDisplay] = useState("");

  useEffect(() => {
    let iterations = 0;
    let interval = setInterval(() => {
      if (iterations >= word.length) clearInterval(interval);
      iterations += 1 / 5;

      let currentWord = word
        .split("")
        .map((letter, index) => {
          if (index < iterations || letter === " ") return letter;
          return String.fromCharCode(
            Math.floor(Math.random() * 26) + "A".charCodeAt(0)
          );
        })
        .join("");
      setDisplay(currentWord);
    }, 30);
  }, [word]);

  return display;
}