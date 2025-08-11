import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { UserPlus, Check, X, Clock } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface Inquiry {
  id: string;
  name: string;
  email: string;
  message: string;
  status: 'pending' | 'approved' | 'rejected';
  created_at: string;
}

interface PendingInquiriesSectionProps {
  userRole: string | null;
}

export const PendingInquiriesSection = ({ userRole }: PendingInquiriesSectionProps) => {
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  const canApprove = userRole === 'founder';

  useEffect(() => {
    // Mock data until types are updated
    const mockInquiries: Inquiry[] = [
      {
        id: '1',
        name: 'John Doe',
        email: 'john@example.com',
        message: 'I am interested in learning ASL and joining your community.',
        status: 'pending',
        created_at: new Date().toISOString()
      }
    ];
    
    setTimeout(() => {
      setInquiries(mockInquiries);
      setLoading(false);
    }, 1000);
  }, []);

  const handleApprove = async (inquiryId: string) => {
    // Mock approval for now
    setInquiries(prev => prev.filter(inquiry => inquiry.id !== inquiryId));
    toast({
      title: "Approved",
      description: "Inquiry has been approved successfully",
    });
  };

  const handleReject = async (inquiryId: string) => {
    // Mock rejection for now
    setInquiries(prev => prev.filter(inquiry => inquiry.id !== inquiryId));
    toast({
      title: "Rejected",
      description: "Inquiry has been rejected",
    });
  };

  return (
    <Card className="bg-card/50 border-border">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <UserPlus className="h-5 w-5 text-accent" />
          <span>Pending Inquiries</span>
          <Badge variant="secondary" className="bg-accent/20 text-accent">
            {inquiries.length}
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        {loading ? (
          <div className="space-y-3">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="animate-pulse">
                <div className="h-4 bg-muted rounded w-3/4 mb-2"></div>
                <div className="h-3 bg-muted rounded w-1/2"></div>
              </div>
            ))}
          </div>
        ) : inquiries.length === 0 ? (
          <div className="text-center py-8">
            <Clock className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground">No pending inquiries</p>
          </div>
        ) : (
          <div className="space-y-4 max-h-96 overflow-y-auto">
            {inquiries.map((inquiry) => (
              <div key={inquiry.id} className="p-4 rounded-lg bg-muted/20 border border-border">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h4 className="font-medium text-foreground">{inquiry.name}</h4>
                    <p className="text-sm text-muted-foreground">{inquiry.email}</p>
                  </div>
                  <span className="text-xs text-muted-foreground">
                    {new Date(inquiry.created_at).toLocaleDateString()}
                  </span>
                </div>
                
                <p className="text-sm text-foreground mb-4 line-clamp-3">{inquiry.message}</p>
                
                {canApprove && (
                  <div className="flex space-x-2">
                    <Button
                      size="sm"
                      onClick={() => handleApprove(inquiry.id)}
                      className="bg-accent hover:bg-accent/90 text-accent-foreground"
                    >
                      <Check className="h-3 w-3 mr-1" />
                      Approve
                    </Button>
                    <Button
                      size="sm"
                      variant="destructive"
                      onClick={() => handleReject(inquiry.id)}
                    >
                      <X className="h-3 w-3 mr-1" />
                      Reject
                    </Button>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};