import { useEffect, useState } from "react";
import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const setSEO = (title: string, description: string) => {
  document.title = title;
  const existing = document.querySelector('meta[name="description"]');
  if (existing) existing.setAttribute('content', description);
};

type QuizQ = {
  question: string;
  choices: string[];
  answer: number;
};

const qs: QuizQ[] = [
  { question: "ASL uses which primary communication mode?", choices: ["Spoken words", "Sign and facial expressions", "Whistling"], answer: 1 },
  { question: "The sign for 'No' is:", choices: ["Fist nod", "Index and middle tap thumb", "Hand from chin"], answer: 1 },
  { question: "Facial expressions in ASL are:", choices: ["Optional", "Grammar markers", "Rude"], answer: 1 },
];

const ProgressQuiz = () => {
  useEffect(() => {
    setSEO("ASL Progress Quiz | Signova", "Take a quick ASL knowledge quiz and see your score.");
  }, []);

  const [answers, setAnswers] = useState<number[]>(Array(qs.length).fill(-1));
  const [score, setScore] = useState<number | null>(null);

  const submit = () => {
    let s = 0;
    answers.forEach((a, i) => { if (a === qs[i].answer) s++; });
    setScore(s);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-background to-secondary/10 text-foreground">
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-40">
        <div className="container mx-auto px-4 py-6">
          <h1 className="font-serif-display text-3xl md:text-4xl">Progress Quiz</h1>
          <p className="text-muted-foreground">Assess your understanding and track improvement.</p>
        </div>
      </header>

      <Section className="container mx-auto px-4 py-10">
        <div className="max-w-3xl mx-auto space-y-8">
          <Card className="bg-card/80 border-border p-8 paper-shadow animate-fade-in-up">
            {qs.map((q, qi) => (
              <div key={qi} className="mb-6">
                <h2 className="font-serif text-xl mb-3">{qi + 1}. {q.question}</h2>
                <div className="space-y-2">
                  {q.choices.map((c, ci) => (
                    <label key={ci} className="flex items-center space-x-3">
                      <input
                        type="radio"
                        name={`q-${qi}`}
                        className="accent-[hsl(var(--accent))]"
                        checked={answers[qi] === ci}
                        onChange={() => {
                          const next = [...answers];
                          next[qi] = ci;
                          setAnswers(next);
                        }}
                      />
                      <span className="text-foreground">{c}</span>
                    </label>
                  ))}
                </div>
              </div>
            ))}
            <Button className="w-full mt-4" onClick={submit}>Submit</Button>
            {score !== null && (
              <div className="mt-6 text-center">
                <p className="text-lg">Score: {score} / {qs.length}</p>
                <p className="text-sm text-muted-foreground">Great work—keep practicing daily!</p>
              </div>
            )}
          </Card>
        </div>
      </Section>
    </main>
  );
};

export default ProgressQuiz;
