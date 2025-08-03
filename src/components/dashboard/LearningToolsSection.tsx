import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlayCircle, BookOpen, Gamepad2, Video } from "lucide-react";

export const LearningToolsSection = () => {
  const tools = [
    {
      title: "ASL Videos",
      description: "Learn basic sign language",
      icon: Video,
      action: "Watch Now",
      color: "bg-blue-600"
    },
    {
      title: "Flashcards",
      description: "Practice vocabulary",
      icon: BookOpen,
      action: "Study",
      color: "bg-green-600"
    },
    {
      title: "Sign Games",
      description: "Interactive challenges",
      icon: Gamepad2,
      action: "Play",
      color: "bg-purple-600"
    },
    {
      title: "Progress Quiz",
      description: "Test your knowledge",
      icon: PlayCircle,
      action: "Start Quiz",
      color: "bg-orange-600"
    }
  ];

  return (
    <Card className="bg-card/50 border-border">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <BookOpen className="h-5 w-5 text-purple-400" />
          <span>Learning Tools</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-3">
          {tools.map((tool, index) => {
            const IconComponent = tool.icon;
            return (
              <div key={index} className="p-4 rounded-lg bg-muted/20 border border-border hover:bg-muted/30 transition-colors group">
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className={`p-3 rounded-full ${tool.color}`}>
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">{tool.title}</h4>
                    <p className="text-xs text-muted-foreground">{tool.description}</p>
                  </div>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="w-full opacity-70 group-hover:opacity-100 transition-opacity"
                  >
                    {tool.action}
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="mt-6 p-4 rounded-lg bg-purple-500/10 border border-purple-500/20">
          <div className="flex items-center space-x-2 mb-2">
            <PlayCircle className="h-4 w-4 text-purple-400" />
            <span className="text-sm font-medium text-purple-300">Next Module</span>
          </div>
          <p className="text-sm text-foreground">Basic Greetings in ASL</p>
          <p className="text-xs text-muted-foreground">Complete previous modules to unlock</p>
        </div>
      </CardContent>
    </Card>
  );
};