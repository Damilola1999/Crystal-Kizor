export const Arrow = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export function AnimatedWords({
  text,
  startDelay = 0,
  step = 0.07,
  className = "",
}: {
  text: string;
  startDelay?: number;
  step?: number;
  className?: string;
}) {
  return (
    <>
      {text.split(" ").map((word, i) => (
        <span className={`word-mask ${className}`} key={`${word}-${i}`}>
          <span className="word" style={{ animationDelay: `${startDelay + i * step}s` }}>
            {word}
          </span>
          {"\u00A0"}
        </span>
      ))}
    </>
  );
}