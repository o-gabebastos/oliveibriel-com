import { useEffect, useRef, useState } from "react";

type Props = {
  prefix: string;
  words: string[];
  typeMs?: number;
  deleteMs?: number;
  holdMs?: number;
};

// Typewriter line — echoes the rotating hero on ntechcolab.com.
export default function Typewriter({
  prefix,
  words,
  typeMs = 75,
  deleteMs = 38,
  holdMs = 1400,
}: Props) {
  const [text, setText] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const reduced = useRef(false);

  useEffect(() => {
    reduced.current =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced.current) setText(words[0] ?? "");
  }, [words]);

  useEffect(() => {
    if (reduced.current || words.length === 0) return;
    const word = words[wordIdx % words.length];
    let delay: number;
    if (!deleting && text === word) {
      delay = holdMs;
    } else if (deleting && text === "") {
      delay = 280;
    } else {
      delay = deleting ? deleteMs : typeMs;
    }
    const t = setTimeout(() => {
      if (!deleting && text === word) {
        setDeleting(true);
      } else if (deleting && text === "") {
        setDeleting(false);
        setWordIdx((i) => (i + 1) % words.length);
      } else {
        const next = deleting
          ? word.slice(0, text.length - 1)
          : word.slice(0, text.length + 1);
        setText(next);
      }
    }, delay);
    return () => clearTimeout(t);
  }, [text, deleting, wordIdx, words, typeMs, deleteMs, holdMs]);

  return (
    <p className="mt-6 text-2xl md:text-4xl font-extrabold tracking-tight display">
      <span className="text-[var(--color-fg)]">{prefix} </span>
      <span className="text-[var(--color-accent)]">{text}</span>
      <span
        aria-hidden="true"
        className="inline-block w-[2px] md:w-[3px] h-[1em] -mb-[0.12em] ml-0.5 bg-[var(--color-accent)] animate-pulse"
      />
    </p>
  );
}
