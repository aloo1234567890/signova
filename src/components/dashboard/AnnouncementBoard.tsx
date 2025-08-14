import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Megaphone, Clock, AlertTriangle } from "lucide-react";

interface Announcement {
  id: string;
  title: string;
  content: string;
  priority: 'low' | 'normal' | 'high' | 'urgent';
  created_at: string;
  expires_at?: string;
  author: string;
}

export const AnnouncementBoard = () => {
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Mock announcements data - replace with Supabase query
    const mockAnnouncements: Announcement[] = [
      {
        id: '1',
        title: 'New Learning Module Released',
        content: 'Advanced finger-spelling techniques now available in the learning section.',
        priority: 'high',
        created_at: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
        author: 'Ayank'
      },
      {
        id: '2', 
        title: 'Team Meeting Tomorrow',
        content: 'Monthly progress review at 3 PM. All senior members must attend.',
        priority: 'urgent',
        created_at: new Date(Date.now() - 6 * 60 * 60 * 1000).toISOString(),
        expires_at: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(),
        author: 'Bhavyansh'
      },
      {
        id: '3',
        title: 'System Maintenance',
        content: 'Scheduled maintenance this weekend. Expect minor disruptions.',
        priority: 'normal',
        created_at: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
        author: 'Ayank'
      }
    ];

    setTimeout(() => {
      setAnnouncements(mockAnnouncements);
      setLoading(false);
    }, 500);
  }, []);

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'urgent': return 'bg-destructive/20 text-destructive border-destructive/30';
      case 'high': return 'bg-accent/20 text-accent border-accent/30';
      case 'normal': return 'bg-primary/20 text-primary border-primary/30';
      default: return 'bg-muted/20 text-muted-foreground border-muted/30';
    }
  };

  const getPriorityIcon = (priority: string) => {
    switch (priority) {
      case 'urgent': return <AlertTriangle className="h-3 w-3" />;
      case 'high': return <Megaphone className="h-3 w-3" />;
      default: return <Clock className="h-3 w-3" />;
    }
  };

  const formatTimeAgo = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));
    
    if (diffInHours < 1) return 'Just now';
    if (diffInHours < 24) return `${diffInHours}h ago`;
    return `${Math.floor(diffInHours / 24)}d ago`;
  };

  return (
    <Card className="bg-card/90 backdrop-blur-sm border border-accent/20 academic-shadow">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Megaphone className="h-5 w-5 text-accent" />
          <span>Announcements</span>
          <Badge variant="secondary" className="bg-accent/20 text-accent">
            {announcements.length}
          </Badge>
        </CardTitle>
      </CardHeader>
      
      <CardContent>
        {loading ? (
          <div className="space-y-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="animate-shimmer h-16 rounded-lg"></div>
            ))}
          </div>
        ) : (
          <ScrollArea className="h-80">
            <div className="space-y-3">
              {announcements.map((announcement) => (
                <div 
                  key={announcement.id}
                  className="group p-4 rounded-lg bg-muted/20 hover:bg-muted/30 transition-colors border border-border/50 hover:border-accent/30"
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <h4 className="font-serif font-medium text-foreground text-sm group-hover:text-accent transition-colors">
                        {announcement.title}
                      </h4>
                      <Badge 
                        variant="outline" 
                        className={`text-xs ${getPriorityColor(announcement.priority)} flex items-center space-x-1`}
                      >
                        {getPriorityIcon(announcement.priority)}
                        <span className="capitalize">{announcement.priority}</span>
                      </Badge>
                    </div>
                  </div>
                  
                  <p className="font-sans-body text-xs text-muted-foreground leading-relaxed mb-3">
                    {announcement.content}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs text-muted-foreground/70">
                    <span>By {announcement.author}</span>
                    <span>{formatTimeAgo(announcement.created_at)}</span>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        )}
      </CardContent>
    </Card>
  );
};