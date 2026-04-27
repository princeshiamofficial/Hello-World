"use client";

export default function Home() {
  const greeting = "Hello, World!";

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-foreground transition-all duration-300 text-center">
        {greeting}
      </h1>
    </main>
  );
}
