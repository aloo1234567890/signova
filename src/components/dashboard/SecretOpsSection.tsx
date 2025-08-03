import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Eye, Plus, Calendar } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface SecretOp {
  id: string;
  title: string;
  content: string;
  created_at: string;
  created_by: string;
}

interface SecretOpsSectionProps {
  userRole: string | null;
}

export const SecretOpsSection = ({ userRole }: SecretOpsSectionProps) => {
  const [ops, setOps] = useState<SecretOp[]>([]);
  const [loading, setLoading] = useState(true);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newOpTitle, setNewOpTitle] = useState("");
  const [newOpContent, setNewOpContent] = useState("");
  const { toast } = useToast();

  const canAddOps = userRole === 'founder' || userRole === 'co_founder';

  useEffect(() => {
    // Mock data until types are updated
    const mockOps: SecretOp[] = [
      {
        id: '1',
        title: 'Initial Setup Complete',
        content: 'Dashboard infrastructure deployed successfully. All systems operational.',
        created_at: new Date().toISOString(),
        created_by: 'system'
      }
    ];
    
    setTimeout(() => {
      setOps(mockOps);
      setLoading(false);
    }, 1000);
  }, []);

  const handleAddOp = async () => {
    if (!newOpTitle.trim() || !newOpContent.trim()) return;

    // Mock add for now
    const newOp: SecretOp = {
      id: Date.now().toString(),
      title: newOpTitle,
      content: newOpContent,
      created_at: new Date().toISOString(),
      created_by: 'user'
    };

    setOps(prev => [newOp, ...prev]);
    setNewOpTitle("");
    setNewOpContent("");
    setShowAddForm(false);
    toast({
      title: "Success",
      description: "Secret operation logged successfully",
    });
  };

  return (
    <Card className="bg-card/50 border-border">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center space-x-2">
            <Eye className="h-5 w-5 text-purple-400" />
            <span>Secret Ops</span>
            <Badge variant="secondary" className="bg-red-500/20 text-red-300">
              CLASSIFIED
            </Badge>
          </CardTitle>
          {canAddOps && (
            <Button
              size="sm"
              onClick={() => setShowAddForm(!showAddForm)}
              className="bg-purple-600 hover:bg-purple-700"
            >
              <Plus className="h-3 w-3 mr-1" />
              Log Op
            </Button>
          )}
        </div>
      </CardHeader>
      <CardContent>
        {showAddForm && (
          <div className="mb-6 p-4 rounded-lg bg-muted/20 border border-border">
            <input
              type="text"
              placeholder="Operation title..."
              value={newOpTitle}
              onChange={(e) => setNewOpTitle(e.target.value)}
              className="w-full p-2 mb-3 bg-background border border-border rounded text-foreground"
            />
            <Textarea
              placeholder="Operation details..."
              value={newOpContent}
              onChange={(e) => setNewOpContent(e.target.value)}
              className="mb-3"
              rows={3}
            />
            <div className="flex space-x-2">
              <Button size="sm" onClick={handleAddOp}>
                Save Op
              </Button>
              <Button size="sm" variant="ghost" onClick={() => setShowAddForm(false)}>
                Cancel
              </Button>
            </div>
          </div>
        )}

        {loading ? (
          <div className="space-y-3">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="animate-pulse">
                <div className="h-4 bg-muted rounded w-3/4 mb-2"></div>
                <div className="h-3 bg-muted rounded w-1/2"></div>
              </div>
            ))}
          </div>
        ) : ops.length === 0 ? (
          <div className="text-center py-8">
            <Eye className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground">No operations logged</p>
          </div>
        ) : (
          <div className="space-y-4 max-h-96 overflow-y-auto">
            {ops.map((op) => (
              <div key={op.id} className="p-4 rounded-lg bg-muted/20 border border-border">
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-medium text-foreground">{op.title}</h4>
                  <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                    <Calendar className="h-3 w-3" />
                    <span>{new Date(op.created_at).toLocaleDateString()}</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">{op.content}</p>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};