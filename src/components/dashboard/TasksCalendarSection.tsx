import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Calendar, CheckCircle, Clock, AlertCircle } from "lucide-react";

interface Task {
  id: string;
  title: string;
  description: string;
  priority: 'low' | 'medium' | 'high';
  status: 'pending' | 'in_progress' | 'completed';
  due_date: string;
  assigned_to: string;
}

export const TasksCalendarSection = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Mock tasks data - replace with Supabase query
    const mockTasks: Task[] = [
      {
        id: '1',
        title: 'Review Learning Module Scripts',
        description: 'Check accuracy of new ASL video scripts',
        priority: 'high',
        status: 'pending',
        due_date: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000).toISOString(),
        assigned_to: 'Ayank'
      },
      {
        id: '2',
        title: 'Update Member Database',
        description: 'Sync recent member approvals with system',
        priority: 'medium',
        status: 'in_progress',
        due_date: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(),
        assigned_to: 'Bhavyansh'
      },
      {
        id: '3',
        title: 'Prepare Monthly Report',
        description: 'Compile team progress and statistics',
        priority: 'high',
        status: 'pending',
        due_date: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
        assigned_to: 'Abudaya'
      },
      {
        id: '4',
        title: 'System Security Audit',
        description: 'Quarterly security check and updates',
        priority: 'high',
        status: 'completed',
        due_date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
        assigned_to: 'Dhawal'
      }
    ];

    setTimeout(() => {
      setTasks(mockTasks);
      setLoading(false);
    }, 500);
  }, []);

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-destructive/20 text-destructive border-destructive/30';
      case 'medium': return 'bg-accent/20 text-accent border-accent/30';
      case 'low': return 'bg-muted/20 text-muted-foreground border-muted/30';
      default: return 'bg-muted/20 text-muted-foreground border-muted/30';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return <CheckCircle className="h-3 w-3 text-green-500" />;
      case 'in_progress': return <Clock className="h-3 w-3 text-accent" />;
      case 'pending': return <AlertCircle className="h-3 w-3 text-muted-foreground" />;
      default: return <Clock className="h-3 w-3" />;
    }
  };

  const formatDueDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInDays = Math.ceil((date.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
    
    if (diffInDays < 0) return `${Math.abs(diffInDays)} days overdue`;
    if (diffInDays === 0) return 'Due today';
    if (diffInDays === 1) return 'Due tomorrow';
    return `Due in ${diffInDays} days`;
  };

  const pendingTasks = tasks.filter(task => task.status !== 'completed').length;

  return (
    <Card className="bg-card/90 backdrop-blur-sm border border-accent/20 academic-shadow">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Calendar className="h-5 w-5 text-accent" />
          <span>Tasks & Calendar</span>
          <Badge variant="secondary" className="bg-accent/20 text-accent">
            {pendingTasks} pending
          </Badge>
        </CardTitle>
      </CardHeader>
      
      <CardContent>
        {loading ? (
          <div className="space-y-3">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="animate-shimmer h-16 rounded-lg"></div>
            ))}
          </div>
        ) : (
          <ScrollArea className="h-80">
            <div className="space-y-3">
              {tasks
                .sort((a, b) => new Date(a.due_date).getTime() - new Date(b.due_date).getTime())
                .map((task) => (
                <div 
                  key={task.id}
                  className={`group p-4 rounded-lg transition-colors border ${
                    task.status === 'completed' 
                      ? 'bg-muted/10 hover:bg-muted/20 border-border/30 opacity-70' 
                      : 'bg-muted/20 hover:bg-muted/30 border-border/50 hover:border-accent/30'
                  }`}
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      {getStatusIcon(task.status)}
                      <h4 className={`font-serif font-medium text-sm ${
                        task.status === 'completed' ? 'line-through text-muted-foreground' : 'text-foreground group-hover:text-accent'
                      } transition-colors`}>
                        {task.title}
                      </h4>
                    </div>
                    <Badge 
                      variant="outline" 
                      className={`text-xs ${getPriorityColor(task.priority)}`}
                    >
                      {task.priority}
                    </Badge>
                  </div>
                  
                  <p className="font-sans-body text-xs text-muted-foreground leading-relaxed mb-3">
                    {task.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs text-muted-foreground/70">
                    <span>Assigned to {task.assigned_to}</span>
                    <span className={task.status !== 'completed' && new Date(task.due_date) < new Date() ? 'text-destructive font-medium' : ''}>
                      {formatDueDate(task.due_date)}
                    </span>
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