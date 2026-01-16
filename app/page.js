export default function Home() {
  async function createUser() {
    await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: "Priyanka",
        email: "priyanka@gmail.com",
      }),
    });
  }

  return (
    <main style={{ padding: 40 }}>
      <h1>Next.js MongoDB Test</h1>
      <button onClick={createUser}>Create User</button>
    </main>
  );
}
