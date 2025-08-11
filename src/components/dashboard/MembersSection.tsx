import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Crown, Shield, Star, VolumeX } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

interface Member {
  id: string;
  email: string;
  first_name: string | null;
  last_name: string | null;
  role: string;
  created_at: string;
}

interface MembersSectionProps {
  userRole: string | null;
}

const getRoleIcon = (role: string) => {
  switch (role) {
    case 'founder': return <Crown className="h-3 w-3" />;
    case 'co_founder': return <Shield className="h-3 w-3" />;
    case 'senior_member': return <Star className="h-3 w-3" />;
    case 'member': return <Users className="h-3 w-3" />;
    case 'muted': return <VolumeX className="h-3 w-3" />;
    default: return <Users className="h-3 w-3" />;
  }
};

const getRoleColor = (role: string) => {
  switch (role) {
    case 'founder': return 'bg-accent';
    case 'co_founder': return 'bg-accent/90';
    case 'senior_member': return 'bg-primary';
    case 'member': return 'bg-secondary';
    case 'muted': return 'bg-muted';
    default: return 'bg-secondary';
  }
};

export const MembersSection = ({ userRole }: MembersSectionProps) => {
  const [members, setMembers] = useState<Member[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMembers = async () => {
      const mockMembers: Member[] = [
        {
          id: '1', email: 'ayank@signova', first_name: 'Ayank', last_name: null,
          role: 'founder', created_at: new Date().toISOString()
        },
        {
          id: '2', email: 'bhavyansh@signova', first_name: 'Bhavyansh', last_name: null,
          role: 'member', created_at: new Date().toISOString()
        }
      ];

      try {
        const { data, error } = await supabase
          .from('profiles')
          .select(`
            id,
            email,
            first_name,
            last_name,
            created_at,
            user_roles!inner(role)
          `)
          .order('created_at', { ascending: false });

        if (error) {
          console.error('Error fetching members:', error);
          setMembers(mockMembers);
          return;
        }

        const formattedMembers = (data || []).map((member: any) => ({
          id: member.id,
          email: member.email || '',
          first_name: member.first_name,
          last_name: member.last_name,
          role: (member.user_roles as any)?.[0]?.role || 'member',
          created_at: member.created_at
        }));

        setMembers(formattedMembers.length ? formattedMembers : mockMembers);
      } catch (error) {
        console.error('Error fetching members:', error);
        setMembers(mockMembers);
      } finally {
        setLoading(false);
      }
    };

    fetchMembers();
  }, []);

  return (
    <Card className="bg-card/50 border-border">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Users className="h-5 w-5 text-accent" />
          <span>Active Members</span>
          <Badge variant="secondary" className="bg-accent/20 text-accent">
            {members.length}
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        {loading ? (
          <div className="space-y-3">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="animate-pulse">
                <div className="h-4 bg-muted rounded w-3/4 mb-2"></div>
                <div className="h-3 bg-muted rounded w-1/2"></div>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-3 max-h-96 overflow-y-auto">
            {members.map((member) => (
              <div key={member.id} className="flex items-center justify-between p-3 rounded-lg bg-muted/20 hover:bg-muted/30 transition-colors">
                <div className="flex flex-col">
                  <span className="font-medium text-foreground">
                    {member.first_name && member.last_name 
                      ? `${member.first_name} ${member.last_name}`
                      : member.email
                    }
                  </span>
                  <span className="text-xs text-muted-foreground">
                    Joined {new Date(member.created_at).toLocaleDateString()}
                  </span>
                </div>
                <Badge className={`${getRoleColor(member.role)} text-primary-foreground border-0`}>
                  {getRoleIcon(member.role)}
                  <span className="ml-1 capitalize">{member.role.replace('_', ' ')}</span>
                </Badge>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};