import { useAuth } from "@/hooks/useAuth";
import { useUserRole } from "@/hooks/useUserRole";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { LogOut, Shield, Crown, Star, Users, VolumeX } from "lucide-react";
import signovaLogo from "@/assets/signova-logo-curved.png";

const getRoleIcon = (role: string | null) => {
  switch (role) {
    case 'founder': return <Crown className="h-4 w-4" />;
    case 'co_founder': return <Shield className="h-4 w-4" />;
    case 'senior_member': return <Star className="h-4 w-4" />;
    case 'member': return <Users className="h-4 w-4" />;
    case 'muted': return <VolumeX className="h-4 w-4" />;
    default: return <Users className="h-4 w-4" />;
  }
};

const getRoleColor = (role: string | null) => {
  switch (role) {
    case 'founder': return 'bg-gradient-to-r from-accent to-primary';
    case 'co_founder': return 'bg-gradient-to-r from-accent/90 to-primary';
    case 'senior_member': return 'bg-primary';
    case 'member': return 'bg-secondary';
    case 'muted': return 'bg-muted';
    default: return 'bg-secondary';
  }
};

export const DashboardHeader = () => {
  const { user, logout } = useAuth();
  const { role } = useUserRole();

  const handleLogout = async () => {
    await logout();
  };

  return (
    <header className="animate-fade-in border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <img src={signovaLogo} alt="Signova" className="h-8 w-auto" />
          <div className="flex flex-col">
            <span className="text-lg font-bold text-foreground">SIGNOVA HQ</span>
            <span className="text-xs text-muted-foreground">Digital Operations Center</span>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="flex flex-col items-end">
            <span className="text-sm text-foreground">{user?.email}</span>
            <Badge className={`${getRoleColor(role)} text-primary-foreground border-0`}>
              {getRoleIcon(role)}
              <span className="ml-1 capitalize">{role?.replace('_', ' ')}</span>
            </Badge>
          </div>
          
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={handleLogout}
            className="text-muted-foreground hover:text-foreground"
          >
            <LogOut className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  );
};