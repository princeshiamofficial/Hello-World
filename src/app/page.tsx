"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  const [name, setName] = useState("");

  const greeting = name ? `Hello, ${name}!` : "Hello, World!";

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4">
      <Card className="w-full max-w-md overflow-hidden rounded-lg">
        <CardHeader className="text-center bg-card border-b">
          <CardTitle className="text-2xl sm:text-3xl font-bold text-primary tracking-tight py-4">
            Hello Canvas
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-center gap-8 p-8 sm:p-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-foreground transition-all duration-300 text-center">
            {greeting}
          </h1>
          <div className="w-full max-w-xs">
            <label htmlFor="name-input" className="sr-only">What's your name?</label>
            <Input
              id="name-input"
              type="text"
              placeholder="What's your name?"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full text-center text-lg h-12 rounded-lg focus:ring-2 focus:ring-accent transition-all duration-300"
              aria-label="Your name"
            />
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
