// app/page.jsx  (Server Component by default)
import Button from "@/components/InteractiveButton";

export default function Page() {
  const handleClick = () => {
    console.log("clicked");
  };

  return (
    <Button onClick={handleClick}>
      Click me
    </Button>
  );
}
