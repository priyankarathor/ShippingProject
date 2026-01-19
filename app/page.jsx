export default function Page() {
  const handleClick = () => {
    console.log("clicked");
  };

  return (
    <p onClick={handleClick}>
      Click me
    </p>
  );
}
