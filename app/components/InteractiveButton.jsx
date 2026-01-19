"use client";

export default function InteractiveButton({ children }) {
  const handleClick = () => {
    console.log("clicked");
  };

  return (
    <button onClick={handleClick}>
      {children}
    </button>
  );
}
