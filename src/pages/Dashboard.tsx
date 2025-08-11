import { useAuth } from "@/hooks/useAuth";
import { Navigate } from "react-router-dom";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { MembersSection } from "@/components/dashboard/MembersSection";
import { PendingInquiriesSection } from "@/components/dashboard/PendingInquiriesSection";
import { BadgeShowcaseSection } from "@/components/dashboard/BadgeShowcaseSection";
import { LearningToolsSection } from "@/components/dashboard/LearningToolsSection";
import { SecretOpsSection } from "@/components/dashboard/SecretOpsSection";
import { useUserRole } from "@/hooks/useUserRole";
import { Skeleton } from "@/components/ui/skeleton";

const Dashboard = () => {
  const { user } = useAuth();
  const { role, loading } = useUserRole();

  if (!user) {
    return <Navigate to="/auth" replace />;
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Skeleton className="h-8 w-48" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/10 text-foreground">
      <DashboardHeader />
      
      <div className="container mx-auto px-4 py-8 space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <MembersSection userRole={role} />
          {(role === 'founder' || role === 'co_founder' || role === 'senior_member') && (
            <PendingInquiriesSection userRole={role} />
          )}
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <BadgeShowcaseSection />
          <LearningToolsSection />
        </div>
        
        {(role === 'founder' || role === 'co_founder' || role === 'senior_member') && (
          <SecretOpsSection userRole={role} />
        )}
      </div>
    </div>
  );
};

export default Dashboard;