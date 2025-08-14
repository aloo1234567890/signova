import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";
import { Users, MessageSquare, Target, TrendingUp } from "lucide-react";

interface DashboardStats {
  totalMembers: number;
  pendingInquiries: number;
  activeProjects: number;
  learningProgress: number;
}

export const StatsSection = () => {
  const [stats, setStats] = useState<DashboardStats>({
    totalMembers: 0,
    pendingInquiries: 0,
    activeProjects: 0,
    learningProgress: 0
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        // Fetch member count
        const { count: memberCount } = await supabase
          .from('profiles')
          .select('*', { count: 'exact', head: true });

        // Mock data for other stats (can be replaced with real queries)
        const mockStats = {
          totalMembers: memberCount || 6,
          pendingInquiries: 3,
          activeProjects: 8,
          learningProgress: 95
        };

        setStats(mockStats);
      } catch (error) {
        console.error('Error fetching stats:', error);
        // Fallback to mock data
        setStats({
          totalMembers: 6,
          pendingInquiries: 3,
          activeProjects: 8,
          learningProgress: 95
        });
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  const StatCard = ({ 
    title, 
    value, 
    icon: Icon, 
    description,
    gradient 
  }: { 
    title: string; 
    value: number | string; 
    icon: any; 
    description: string;
    gradient: string;
  }) => (
    <Card className="group relative overflow-hidden bg-card/90 backdrop-blur-sm border border-accent/20 hover:border-accent/40 academic-shadow hover-lift transition-elegant">
      <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${gradient}`}></div>
      
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="font-serif-display text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        <Icon className="h-4 w-4 text-accent group-hover:scale-110 transition-transform duration-300" />
      </CardHeader>
      
      <CardContent>
        <div className="font-serif-display text-3xl font-bold text-foreground mb-1 group-hover:text-accent transition-colors">
          {loading ? "..." : value}
        </div>
        <p className="font-sans-body text-xs text-muted-foreground">
          {description}
        </p>
      </CardContent>
    </Card>
  );

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <StatCard 
        title="Total Members"
        value={stats.totalMembers}
        icon={Users}
        description="Active community members"
        gradient="from-accent to-primary"
      />
      
      <StatCard 
        title="Pending Inquiries" 
        value={stats.pendingInquiries}
        icon={MessageSquare}
        description="Awaiting review"
        gradient="from-primary to-accent"
      />
      
      <StatCard 
        title="Active Projects"
        value={stats.activeProjects}
        icon={Target}
        description="Ongoing initiatives"
        gradient="from-accent/80 to-primary/80"
      />
      
      <StatCard 
        title="Learning Progress"
        value={`${stats.learningProgress}%`}
        icon={TrendingUp}
        description="Average completion rate"
        gradient="from-primary/80 to-accent/80"
      />
    </div>
  );
};