import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Trophy, Star, Zap } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

interface UserBadge {
  id: string;
  badge_id: string;
  earned_at: string;
  badges: {
    name: string;
    description: string;
    icon_name: string;
  };
}

const getIconComponent = (iconName: string) => {
  switch (iconName) {
    case 'trophy': return Trophy;
    case 'star': return Star;
    case 'zap': return Zap;
    default: return Award;
  }
};

export const BadgeShowcaseSection = () => {
  const [userBadges, setUserBadges] = useState<UserBadge[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Mock data until types are updated
    const mockBadges: UserBadge[] = [
      {
        id: '1',
        badge_id: '1',
        earned_at: new Date().toISOString(),
        badges: {
          name: 'First Steps',
          description: 'Completed first ASL lesson',
          icon_name: 'star'
        }
      }
    ];
    
    setTimeout(() => {
      setUserBadges(mockBadges);
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <Card className="bg-card/50 border-border">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Award className="h-5 w-5 text-purple-400" />
          <span>Badge Showcase</span>
          <Badge variant="secondary" className="bg-yellow-500/20 text-yellow-300">
            {userBadges.length}
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        {loading ? (
          <div className="grid grid-cols-2 gap-3">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="animate-pulse">
                <div className="h-16 bg-muted rounded-lg"></div>
              </div>
            ))}
          </div>
        ) : userBadges.length === 0 ? (
          <div className="text-center py-8">
            <Award className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground">No badges earned yet</p>
            <p className="text-sm text-muted-foreground mt-2">Complete learning modules to earn badges</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-3 max-h-80 overflow-y-auto">
            {userBadges.map((userBadge) => {
              const IconComponent = getIconComponent(userBadge.badges.icon_name);
              return (
                <div key={userBadge.id} className="p-3 rounded-lg bg-muted/20 border border-border hover:bg-muted/30 transition-colors">
                  <div className="flex items-center space-x-2 mb-2">
                    <IconComponent className="h-5 w-5 text-yellow-400" />
                    <span className="font-medium text-foreground text-sm">{userBadge.badges.name}</span>
                  </div>
                  <p className="text-xs text-muted-foreground mb-2">{userBadge.badges.description}</p>
                  <span className="text-xs text-muted-foreground">
                    Earned {new Date(userBadge.earned_at).toLocaleDateString()}
                  </span>
                </div>
              );
            })}
          </div>
        )}
      </CardContent>
    </Card>
  );
};