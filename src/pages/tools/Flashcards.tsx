import { useEffect, useState } from "react";
import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const setSEO = (title: string, description: string) => {
  document.title = title;
  const existing = document.querySelector('meta[name="description"]');
  if (existing) existing.setAttribute('content', description);
};

const sampleCards = [
  { term: "Hello", meaning: "Greet someone by moving raised hand outward" },
  { term: "Thank You", meaning: "Hand from chin forward in a small arc" },
  { term: "Yes", meaning: "Make a fist and nod it like your head" },
  { term: "No", meaning: "Index and middle finger tap thumb like a mouth" },
];

const Flashcards = () => {
  useEffect(() => {
    setSEO("ASL Flashcards | Signova", "Practice ASL vocabulary with interactive flashcards.");
  }, []);

  const [index, setIndex] = useState(0);
  const [showBack, setShowBack] = useState(false);

  const current = sampleCards[index];

  return (
    <main className="min-h-screen bg-gradient-to-br from-background to-secondary/10 text-foreground">
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-40">
        <div className="container mx-auto px-4 py-6">
          <h1 className="font-serif-display text-3xl md:text-4xl">ASL Flashcards</h1>
          <p className="text-muted-foreground">Tap to flip. Use Next/Prev to navigate.</p>
        </div>
      </header>

      <Section className="container mx-auto px-4 py-10">
        <div className="max-w-lg mx-auto space-y-6">
          <Card className="bg-card/80 border-border p-10 paper-shadow animate-fade-in-up">
            <button
              className="w-full text-center focus:outline-none"
              onClick={() => setShowBack((s) => !s)}
              aria-label="Flip card"
            >
              <div className="min-h-[140px] flex items-center justify-center">
                <span className="font-serif-display text-3xl">
                  {showBack ? current.meaning : current.term}
                </span>
              </div>
              <p className="text-xs text-muted-foreground mt-4">Click to flip</p>
            </button>
          </Card>

          <div className="flex items-center justify-between">
            <Button
              variant="outline"
              onClick={() => {
                setShowBack(false);
                setIndex((i) => (i - 1 + sampleCards.length) % sampleCards.length);
              }}
            >
              Prev
            </Button>
            <div className="text-sm text-muted-foreground">
              {index + 1} / {sampleCards.length}
            </div>
            <Button
              onClick={() => {
                setShowBack(false);
                setIndex((i) => (i + 1) % sampleCards.length);
              }}
            >
              Next
            </Button>
          </div>
        </div>
      </Section>
    </main>
  );
};

export default Flashcards;
