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
import { useInView } from "@/hooks/useInView";

const Dashboard = () => {
  const { user } = useAuth();
  const { role, loading } = useUserRole();
  const [grid1Ref, grid1InView] = useInView({ threshold: 0.2, once: true });
  const [grid2Ref, grid2InView] = useInView({ threshold: 0.2, once: true });
  const [secretRef, secretInView] = useInView({ threshold: 0.2, once: true });

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
        <div ref={grid1Ref} className={`grid grid-cols-1 lg:grid-cols-2 gap-8 scroll-fade ${grid1InView ? 'in-view' : ''}`}>
          <MembersSection userRole={role} />
          {(role === 'founder' || role === 'co_founder' || role === 'senior_member') && (
            <PendingInquiriesSection userRole={role} />
          )}
        </div>
        
        <div ref={grid2Ref} className={`grid grid-cols-1 lg:grid-cols-2 gap-8 scroll-fade ${grid2InView ? 'in-view' : ''}`}>
          <BadgeShowcaseSection />
          <LearningToolsSection />
        </div>
        
        {(role === 'founder' || role === 'co_founder' || role === 'senior_member') && (
          <div ref={secretRef} className={`scroll-fade ${secretInView ? 'in-view' : ''}`}>
            <SecretOpsSection userRole={role} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;