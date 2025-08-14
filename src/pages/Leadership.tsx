import { useEffect, useState } from "react";
import { Section } from "@/components/ui/section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useInView } from "@/hooks/useInView";
import { Crown, Shield, Lightbulb, Settings, Eye, Zap } from "lucide-react";
import signovaCurvedLogo from "@/assets/signova-logo-curved.png";

interface LeaderProfile {
  id: string;
  name: string;
  role: string;
  title: string;
  description: string;
  specialization: string;
  experience: string;
  icon: any;
  gradient: string;
}

const Leadership = () => {
  const [headerRef, headerInView] = useInView({ threshold: 0.2, once: true });
  const [grid1Ref, grid1InView] = useInView({ threshold: 0.2, once: true });
  const [grid2Ref, grid2InView] = useInView({ threshold: 0.2, once: true });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const coreLeadership: LeaderProfile[] = [
    {
      id: "ayank",
      name: "Ayank",
      role: "founder",
      title: "Founder & Owner",
      description: "Visionary leader and architect of Signova's mission. Responsible for strategic direction, technology innovation, and creative vision.",
      specialization: "Strategic Leadership, Technical Innovation, Creative Direction",
      experience: "5+ years in communication design",
      icon: Crown,
      gradient: "from-accent to-primary"
    },
    {
      id: "bhavyansh", 
      name: "Bhavyansh",
      role: "co_founder",
      title: "Co-Owner & Head of Communications",
      description: "Master of external relations and communication strategy. Ensures Signova's voice reaches the right audience with precision and impact.",
      specialization: "Communications Strategy, Public Relations, Brand Management",
      experience: "4+ years in strategic communications",
      icon: Shield,
      gradient: "from-primary to-accent"
    }
  ];

  const seniorTeam: LeaderProfile[] = [
    {
      id: "ayank-tech",
      name: "Ayank",
      role: "tech_lead",
      title: "Tech Lead",
      description: "Driving technological excellence and innovation across all Signova platforms and learning systems.",
      specialization: "Full-Stack Development, System Architecture, Platform Integration",
      experience: "Advanced technical leadership",
      icon: Lightbulb,
      gradient: "from-accent/80 to-primary/80"
    },
    {
      id: "ayank-creative",
      name: "Ayank", 
      role: "creative_director",
      title: "Creative Director",
      description: "Shaping the visual identity and creative expression that defines Signova's prestigious academic aesthetic.",
      specialization: "Visual Design, Brand Identity, Creative Strategy",
      experience: "Expertise in academic aesthetics",
      icon: Settings,
      gradient: "from-primary/80 to-accent/80"
    },
    {
      id: "ayank-ops",
      name: "Ayank",
      role: "operations_manager", 
      title: "Operations Manager",
      description: "Ensuring seamless coordination and operational excellence across all Signova initiatives.",
      specialization: "Process Optimization, Team Coordination, Quality Assurance",
      experience: "Operational excellence leadership",
      icon: Settings,
      gradient: "from-accent/70 to-primary/70"
    }
  ];

  const advisoryTeam: LeaderProfile[] = [
    {
      id: "abudaya",
      name: "Abudaya",
      role: "senior_advisor",
      title: "Senior Advisor",
      description: "Strategic counsel and wisdom provider, offering guidance on critical decisions and long-term vision.",
      specialization: "Strategic Advisory, Decision Analysis, Long-term Planning",
      experience: "Senior advisory expertise",
      icon: Eye,
      gradient: "from-muted-foreground/60 to-accent/60"
    },
    {
      id: "dhawal",
      name: "Dhawal",
      role: "special_ops",
      title: "Special Operations & Coordination",
      description: "Tactical coordination specialist ensuring precise execution of critical operations and special initiatives.",
      specialization: "Tactical Operations, Special Projects, Coordination Excellence",
      experience: "Special operations expertise",
      icon: Zap,
      gradient: "from-accent/60 to-primary/60"
    }
  ];

  const ProfileCard = ({ profile, delay = 0 }: { profile: LeaderProfile; delay?: number }) => {
    const [cardRef, cardInView] = useInView({ threshold: 0.2, once: true });
    const IconComponent = profile.icon;

    return (
      <div 
        ref={cardRef} 
        className={`group relative scroll-fade ${cardInView ? 'in-view' : ''}`}
        style={{ animationDelay: `${delay}ms` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-20 transition-all duration-700 rounded-lg blur-xl"
             style={{ backgroundImage: `linear-gradient(135deg, hsl(var(--accent)), hsl(var(--primary)))` }}></div>
        
        <Card className="relative h-full bg-card/90 backdrop-blur-sm border border-accent/20 hover:border-accent/40 academic-shadow hover-lift transition-elegant overflow-hidden">
          <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${profile.gradient}`}></div>
          
          <CardHeader className="text-center pb-4">
            <div className="relative mx-auto mb-4 group-hover:scale-110 transition-transform duration-500">
              <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${profile.gradient} p-0.5 vintage-glow`}>
                <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                  <IconComponent className="h-8 w-8 text-accent" />
                </div>
              </div>
            </div>
            
            <CardTitle className="font-serif-display text-xl text-foreground mb-2">
              {profile.name}
            </CardTitle>
            
            <Badge variant="secondary" className="bg-accent/20 text-accent border-accent/30 font-medium">
              {profile.title}
            </Badge>
          </CardHeader>
          
          <CardContent className="space-y-4">
            <p className="font-sans-body text-sm text-muted-foreground leading-relaxed text-center">
              {profile.description}
            </p>
            
            <div className="space-y-3 pt-4 border-t border-border/50">
              <div>
                <h4 className="font-serif text-sm font-medium text-foreground mb-1">Specialization</h4>
                <p className="font-sans-body text-xs text-muted-foreground">
                  {profile.specialization}
                </p>
              </div>
              
              <div>
                <h4 className="font-serif text-sm font-medium text-foreground mb-1">Experience</h4>
                <p className="font-sans-body text-xs text-muted-foreground">
                  {profile.experience}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/10 text-foreground">
      {/* Header Section */}
      <Section className="pt-32 pb-20">
        <div ref={headerRef} className={`text-center scroll-fade ${headerInView ? 'in-view' : ''}`}>
          <div className="mb-12 animate-scale-in">
            <img 
              src={signovaCurvedLogo} 
              alt="SIGNOVA Leadership" 
              className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-8 transition-elegant hover-lift vintage-glow"
            />
          </div>
          
          <h1 className="font-serif-display text-4xl md:text-6xl lg:text-7xl font-semibold text-foreground mb-6 tracking-wide leading-tight">
            <span className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              Leadership Council
            </span>
          </h1>
          
          <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto mb-8"></div>
          
          <p className="font-serif text-xl md:text-2xl text-foreground/80 mb-6 max-w-3xl mx-auto leading-relaxed italic">
            "Excellence is achieved through the convergence of vision, expertise, and unwavering commitment."
          </p>
          
          <p className="font-sans-body text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Meet the distinguished individuals who guide Signova's mission of silent communication mastery and academic excellence.
          </p>
        </div>
      </Section>

      {/* Core Leadership */}
      <Section className="py-20 bg-gradient-to-b from-transparent to-primary/5">
        <div className="max-w-6xl mx-auto">
          <div ref={grid1Ref} className={`scroll-fade ${grid1InView ? 'in-view' : ''}`}>
            <div className="text-center mb-16">
              <h2 className="font-serif-display text-3xl md:text-4xl font-semibold text-foreground mb-4 tracking-wide">
                Executive Leadership
              </h2>
              <div className="w-24 h-px bg-gradient-to-r from-transparent via-accent to-transparent mx-auto mb-6"></div>
              <p className="font-sans-body text-muted-foreground max-w-2xl mx-auto">
                The visionaries who established and guide Signova's strategic direction.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {coreLeadership.map((profile, index) => (
                <ProfileCard key={profile.id} profile={profile} delay={index * 200} />
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Senior Team */}
      <Section className="py-20 bg-gradient-to-b from-primary/5 to-accent/5">
        <div className="max-w-6xl mx-auto">
          <div ref={grid2Ref} className={`scroll-fade ${grid2InView ? 'in-view' : ''}`}>
            <div className="text-center mb-16">
              <h2 className="font-serif-display text-3xl md:text-4xl font-semibold text-foreground mb-4 tracking-wide">
                Senior Leadership Team
              </h2>
              <div className="w-24 h-px bg-gradient-to-r from-transparent via-accent to-transparent mx-auto mb-6"></div>
              <p className="font-sans-body text-muted-foreground max-w-2xl mx-auto">
                Specialists driving excellence across technology, creativity, and operations.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {seniorTeam.map((profile, index) => (
                <ProfileCard key={profile.id} profile={profile} delay={index * 150} />
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Advisory Team */}
      <Section className="py-20 bg-gradient-to-b from-accent/5 to-secondary/10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif-display text-3xl md:text-4xl font-semibold text-foreground mb-4 tracking-wide">
              Advisory Council
            </h2>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-accent to-transparent mx-auto mb-6"></div>
            <p className="font-sans-body text-muted-foreground max-w-2xl mx-auto">
              Strategic advisors providing specialized expertise and tactical coordination.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {advisoryTeam.map((profile, index) => (
              <ProfileCard key={profile.id} profile={profile} delay={index * 200} />
            ))}
          </div>
        </div>
      </Section>

      {/* Leadership Philosophy */}
      <Section className="py-20 bg-gradient-to-b from-secondary/10 to-background">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="bg-card/90 backdrop-blur-sm border border-accent/20 p-12 academic-shadow">
            <h3 className="font-serif-display text-2xl md:text-3xl font-semibold text-foreground mb-8 tracking-wide">
              Our Leadership Philosophy
            </h3>
            
            <div className="space-y-6 text-left">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h4 className="font-serif-display text-lg font-medium text-accent">Vision</h4>
                  <p className="font-sans-body text-muted-foreground leading-relaxed">
                    To create an elite community where silent communication becomes a powerful tool for connection, understanding, and positive impact.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <h4 className="font-serif-display text-lg font-medium text-accent">Mission</h4>
                  <p className="font-sans-body text-muted-foreground leading-relaxed">
                    Advancing the art of non-verbal communication through rigorous academic standards, innovative technology, and unwavering commitment to excellence.
                  </p>
                </div>
              </div>
              
              <div className="pt-6 border-t border-border/50">
                <h4 className="font-serif-display text-lg font-medium text-accent mb-4">Core Values</h4>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center p-4 rounded-lg bg-muted/20">
                    <div className="font-serif font-medium text-foreground mb-2">Excellence</div>
                    <div className="font-sans-body text-sm text-muted-foreground">Pursuit of perfection in every gesture</div>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-muted/20">
                    <div className="font-serif font-medium text-foreground mb-2">Precision</div>
                    <div className="font-sans-body text-sm text-muted-foreground">Accuracy over speed in all endeavors</div>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-muted/20">
                    <div className="font-serif font-medium text-foreground mb-2">Unity</div>
                    <div className="font-sans-body text-sm text-muted-foreground">Strength through collaborative silence</div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </Section>
    </div>
  );
};

export default Leadership;