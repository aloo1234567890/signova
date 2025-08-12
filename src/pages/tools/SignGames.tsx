import { useEffect, useState } from "react";
import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const setSEO = (title: string, description: string) => {
  document.title = title;
  const existing = document.querySelector('meta[name="description"]');
  if (existing) existing.setAttribute('content', description);
};

type Question = {
  prompt: string;
  options: string[];
  answerIndex: number;
};

const questions: Question[] = [
  {
    prompt: "Which gesture represents 'Yes' in ASL?",
    options: [
      "Index and middle finger tap thumb",
      "Make a fist and nod it like your head",
      "Hand from chin forward",
    ],
    answerIndex: 1,
  },
  {
    prompt: "Which is the sign for 'Thank You'?",
    options: [
      "Hand from chin forward",
      "Wave both hands",
      "Tap index on palm",
    ],
    answerIndex: 0,
  },
];

const SignGames = () => {
  useEffect(() => {
    setSEO("ASL Games | Signova", "Play quick ASL games to test your knowledge.");
  }, []);

  const [qIndex, setQIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);

  const q = questions[qIndex];

  const submit = () => {
    if (selected === null) return;
    if (selected === q.answerIndex) setScore((s) => s + 1);
    setSelected(null);
    setQIndex((i) => (i + 1) % questions.length);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-background to-secondary/10 text-foreground">
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-40">
        <div className="container mx-auto px-4 py-6">
          <h1 className="font-serif-display text-3xl md:text-4xl">Sign Games</h1>
          <p className="text-muted-foreground">Quick multiple-choice challenges.</p>
        </div>
      </header>

      <Section className="container mx-auto px-4 py-10">
        <div className="max-w-2xl mx-auto space-y-6">
          <Card className="bg-card/80 border-border p-8 paper-shadow animate-fade-in-up">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-muted-foreground">Score: {score}</span>
              <span className="text-sm text-muted-foreground">Question {qIndex + 1} / {questions.length}</span>
            </div>
            <h2 className="font-serif text-2xl mb-6">{q.prompt}</h2>
            <div className="space-y-3">
              {q.options.map((opt, i) => (
                <button
                  key={i}
                  onClick={() => setSelected(i)}
                  className={`w-full text-left rounded-md border px-4 py-3 transition-elegant ${
                    selected === i ? 'bg-accent/20 border-accent' : 'bg-muted/20 border-border hover:bg-muted/30'
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
            <Button className="mt-6 w-full" onClick={submit}>
              {qIndex === questions.length - 1 ? 'Finish' : 'Next'}
            </Button>
          </Card>
        </div>
      </Section>
    </main>
  );
};

export default SignGames;
