import { useEffect } from "react";
import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const setSEO = (title: string, description: string) => {
  document.title = title;
  const existing = document.querySelector('meta[name="description"]');
  if (existing) existing.setAttribute('content', description);
};

const ASLVideos = () => {
  useEffect(() => {
    setSEO("ASL Videos | Signova", "Watch curated ASL video lessons by Signova.");
  }, []);

  const videos = [
    { title: "ASL Basics: Alphabet", url: "https://www.youtube.com/watch?v=3S8-bbP8U6s" },
    { title: "ASL Greetings", url: "https://www.youtube.com/watch?v=jmqK35hmkEY" },
    { title: "Common Phrases", url: "https://www.youtube.com/watch?v=bzR3w1u5s7c" },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-background to-secondary/10 text-foreground">
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-40">
        <div className="container mx-auto px-4 py-6">
          <h1 className="font-serif-display text-3xl md:text-4xl">ASL Videos</h1>
          <p className="text-muted-foreground">Curated lessons to build strong foundations.</p>
        </div>
      </header>

      <Section className="container mx-auto px-4 py-10">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {videos.map((v) => (
            <Card key={v.title} className="bg-card/80 border-border p-6 paper-shadow scroll-fade in-view">
              <h2 className="font-serif text-xl mb-3 text-foreground">{v.title}</h2>
              <p className="text-sm text-muted-foreground mb-4">External resource (YouTube)</p>
              <Button asChild className="w-full">
                <a href={v.url} target="_blank" rel="noreferrer" aria-label={`Open ${v.title}`}>
                  Watch Lesson
                </a>
              </Button>
            </Card>
          ))}
        </div>
      </Section>
    </main>
  );
};

export default ASLVideos;
