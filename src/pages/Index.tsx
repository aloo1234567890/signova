import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Section } from "@/components/ui/section"
import { Card } from "@/components/ui/card"
import { useAuth } from "@/hooks/useAuth"
import { Link } from "react-router-dom"
import signovaCurvedLogo from "@/assets/signova-logo-curved.png"
import signovaSquareLogo from "@/assets/signova-logo-square.png"

const Index = () => {
  const { user, logout } = useAuth();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-parchment text-foreground">
      {/* Academic Navigation */}
      <header className="fixed top-0 right-0 p-6 z-50 animate-fade-in">
        {user ? (
          <div className="flex space-x-4">
            <Button asChild
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-sm academic-shadow hover-lift transition-elegant"
            >
              <Link to="/dashboard" aria-label="Open Dashboard">Dashboard</Link>
            </Button>
            <Button 
              variant="outline" 
              onClick={logout} 
              className="text-sm border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-elegant"
            >
              Sign Out
            </Button>
          </div>
        ) : (
          <Button 
            variant="outline" 
            asChild 
            className="text-sm border-primary text-primary hover:bg-primary hover:text-primary-foreground academic-underline transition-elegant"
          >
            <Link to="/auth">Member Access</Link>
          </Button>
        )}
      </header>
      {/* Hero Section with Vintage Academic Style */}
      <Section className="min-h-screen flex flex-col items-center justify-center text-center py-32 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        <div className="mb-12 animate-scale-in">
          <img 
            src={signovaCurvedLogo} 
            alt="SIGNOVA" 
            className="w-56 h-56 md:w-72 md:h-72 mx-auto mb-8 transition-elegant hover-lift vintage-glow"
          />
        </div>
        
        <div className="space-y-8 animate-fade-in">
          <h1 className="font-serif-display text-5xl md:text-7xl lg:text-8xl font-semibold text-foreground mb-6 tracking-wide leading-tight">
            <span className="inline-block">
              <span className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                Power in Silence
              </span>
            </span>
          </h1>
          
          <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto mb-8 animate-fade-in-up"></div>
          
          <p className="font-serif text-2xl md:text-3xl text-foreground/80 mb-6 max-w-3xl leading-relaxed italic">
            "We move without sound. We speak without words."
          </p>
          
          <p className="font-sans-body text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl leading-relaxed">
            An elite Gen Z coordination team mastering the art of non-verbal communication through American Sign Language.
          </p>
        </div>
        
        <div className="animate-float">
          <div className="w-8 h-8 border-2 border-accent rounded-full flex items-center justify-center animate-pulse-academic">
            <div className="w-2 h-2 bg-accent rounded-full"></div>
          </div>
        </div>
      </Section>

      {/* About Us - Academic Style */}
      <Section id="about" className="text-center py-24 bg-gradient-to-b from-transparent to-secondary/20">
        <div className="max-w-6xl mx-auto scroll-fade">
          <h2 className="font-serif-display text-4xl md:text-6xl font-semibold text-foreground mb-8 tracking-wide animate-shimmer">
            About Us
          </h2>
          
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-accent to-transparent mx-auto mb-16"></div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 text-left animate-slide-in-left">
              <p className="font-serif text-xl md:text-2xl text-foreground leading-relaxed">
                Signova is an <em className="text-accent font-medium">elite, Gen Z-led organization</em> founded by Ayank. It started as a small but bold movement of young learners building skills, discipline, and teamwork through American Sign Language (ASL) and creativity.
              </p>
              
              <p className="font-sans-body text-lg text-muted-foreground leading-relaxed">
                We aren't just a group — we are a tight community of thinkers, builders, and innovators who believe in flowing faster and growing smarter. We are not like everyone else. While others focus only on fun, we focus on knowledge, collaboration, and creating a legacy.
              </p>
              
              <p className="font-sans-body text-lg text-muted-foreground leading-relaxed">
                Our mission is to make Signova a name people remember, standing alongside modern institutions like Harvard, Cambridge, and tech-forward brands like Nothing Phone, Grok, and Lamborghini — but still keeping our own unique identity.
              </p>
            </div>
            
            <div className="animate-fade-in">
              <div className="bg-card p-8 rounded-lg paper-shadow hover-lift transition-elegant">
                <h3 className="font-serif-display text-2xl font-medium text-primary mb-6">Our Identity</h3>
                <ul className="space-y-4 text-left">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <span className="font-sans-body text-foreground">Vintage Harvard-brown branding — strong, trustworthy, formal</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <span className="font-sans-body text-foreground">Premium animations that give life and energy</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <span className="font-sans-body text-foreground">Heritage-style look without being boring</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <span className="font-sans-body text-foreground">Gen Z innovation meets academic excellence</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Our Journey - Timeline Style */}
      <Section id="journey" className="py-24 bg-gradient-to-b from-secondary/20 to-accent/10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="font-serif-display text-4xl md:text-6xl font-semibold text-foreground mb-8 tracking-wide animate-shimmer">
              Our Journey
            </h2>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-accent to-transparent mx-auto mb-8"></div>
            <p className="font-serif text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed italic">
              "From a small group of close friends to a movement that commands respect — this is the Signova story."
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-accent via-primary to-accent opacity-30"></div>
            
            <div className="space-y-20">
              {/* Beginning */}
              <div className="relative flex items-center justify-between scroll-fade">
                <div className="w-5/12 text-right pr-8">
                  <h3 className="font-serif-display text-2xl font-medium text-foreground mb-4">The Beginning</h3>
                  <p className="font-sans-body text-muted-foreground leading-relaxed">
                    Signova began when a small group of close friends decided to learn ASL together. What started as curiosity became a dedicated mission.
                  </p>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-accent rounded-full border-4 border-background flex items-center justify-center vintage-glow">
                  <div className="w-6 h-6 bg-background rounded-full animate-pulse-academic"></div>
                </div>
                <div className="w-5/12"></div>
              </div>
              
              {/* The Movement */}
              <div className="relative flex items-center justify-between scroll-fade">
                <div className="w-5/12"></div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-primary rounded-full border-4 border-background flex items-center justify-center vintage-glow">
                  <div className="w-6 h-6 bg-background rounded-full animate-pulse-academic"></div>
                </div>
                <div className="w-5/12 pl-8">
                  <h3 className="font-serif-display text-2xl font-medium text-foreground mb-4">Becoming a Movement</h3>
                  <p className="font-sans-body text-muted-foreground leading-relaxed">
                    Over time, this became a movement — a team with its own rules, its own ranks, and its own community identity. We created badges, roles, and logos to represent ourselves.
                  </p>
                </div>
              </div>
              
              {/* Rivals Join */}
              <div className="relative flex items-center justify-between scroll-fade">
                <div className="w-5/12 text-right pr-8">
                  <h3 className="font-serif-display text-2xl font-medium text-foreground mb-4">Rivals Become Allies</h3>
                  <p className="font-sans-body text-muted-foreground leading-relaxed">
                    Opponents who once tried to compete with us eventually joined us, realizing we were a force they couldn't beat. Reyansh and Yuvan, once uncertain, are now part of us.
                  </p>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-accent rounded-full border-4 border-background flex items-center justify-center vintage-glow">
                  <div className="w-6 h-6 bg-background rounded-full animate-pulse-academic"></div>
                </div>
                <div className="w-5/12"></div>
              </div>
              
              {/* Unity */}
              <div className="relative flex items-center justify-between scroll-fade">
                <div className="w-5/12"></div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-primary rounded-full border-4 border-background flex items-center justify-center vintage-glow">
                  <div className="w-6 h-6 bg-background rounded-full animate-pulse-academic"></div>
                </div>
                <div className="w-5/12 pl-8">
                  <h3 className="font-serif-display text-2xl font-medium text-foreground mb-4">United We Stand</h3>
                  <p className="font-sans-body text-muted-foreground leading-relaxed">
                    Today, Signova stands united — no spies, no rivals, just one powerful team. Our badges aren't just designs, they are symbols of trust and belonging.
                  </p>
                </div>
              </div>
              
              {/* Future */}
              <div className="relative flex items-center justify-between scroll-fade">
                <div className="w-5/12 text-right pr-8">
                  <h3 className="font-serif-display text-2xl font-medium text-foreground mb-4">Expanding Horizons</h3>
                  <p className="font-sans-body text-muted-foreground leading-relaxed">
                    We are continuously expanding, forming new sub-organizations like Lunova and AINova Labs, but Signova is the heart of it all.
                  </p>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-accent rounded-full border-4 border-background flex items-center justify-center vintage-glow">
                  <div className="w-6 h-6 bg-background rounded-full animate-glow"></div>
                </div>
                <div className="w-5/12"></div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Enquire Section - Academic Style */}
      <Section id="enquire" className="text-center py-24 bg-gradient-to-r from-secondary/10 to-accent/10">
        <div className="max-w-4xl mx-auto scroll-fade">
          <h2 className="font-serif-display text-4xl md:text-5xl font-semibold text-foreground mb-8 tracking-wide">
            Join the Silent Revolution
          </h2>
          
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-accent to-transparent mx-auto mb-12"></div>
          
          <Card className="bg-card/90 backdrop-blur-sm border border-accent/20 p-12 academic-shadow hover-lift transition-elegant">
            <p className="font-serif text-xl md:text-2xl text-foreground/90 mb-8 leading-relaxed italic">
              "Excellence is never an accident. It is always the result of high intention, sincere effort, and intelligent execution."
            </p>
            
            <p className="font-sans-body text-lg text-muted-foreground mb-12 leading-relaxed max-w-2xl mx-auto">
              Signova isn't for everyone. We seek individuals who understand that true power lies not in volume, but in precision. If you're serious about mastering the art of silent communication, we'll hear you.
            </p>
            
            <div className="space-y-6">
              <Button 
                variant="gold" 
                size="lg"
                className="px-16 py-4 text-lg font-serif-display hover-glow"
                onClick={() => window.open('https://wa.me/919718730024?text=I%20am%20interested%20in%20joining%20Signova', '_blank')}
              >
                Submit Your Inquiry
              </Button>
              
              <p className="font-sans-body text-sm text-muted-foreground/70">
                Our team will respond if you demonstrate genuine commitment to excellence.
              </p>
            </div>
          </Card>
        </div>
      </Section>

      {/* Elite Badge Section */}
      <Section id="badge" className="text-center py-24 bg-gradient-to-b from-accent/5 to-primary/5">
        <div className="max-w-3xl mx-auto scroll-fade">
          <h3 className="font-serif-display text-3xl md:text-4xl font-semibold text-foreground mb-12 tracking-wide">
            Mark of Excellence
          </h3>
          
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-all duration-700"></div>
            <img 
              src={signovaSquareLogo} 
              alt="SIGNOVA Badge" 
              className="relative w-40 h-40 md:w-56 md:h-56 mx-auto mb-12 transition-all duration-500 hover:scale-110 vintage-glow animate-float"
            />
          </div>
          
          <div className="space-y-6">
            <h4 className="font-serif-display text-2xl md:text-3xl font-medium text-foreground tracking-wide">
              For Members Only
            </h4>
            
            <p className="font-serif text-lg text-accent font-medium italic">
              "Earned through dedication, not granted through request."
            </p>
            
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-accent to-transparent mx-auto"></div>
            
            <p className="font-sans-body text-muted-foreground max-w-lg mx-auto leading-relaxed">
              Each badge represents countless hours of study, practice, and commitment to the art of silent communication. It is a symbol of mastery that cannot be purchased—only earned.
            </p>
          </div>
        </div>
      </Section>

      {/* Features & Benefits Section */}
      <Section id="features" className="py-24 bg-gradient-to-b from-primary/5 to-accent/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="font-serif-display text-4xl md:text-5xl font-semibold text-foreground mb-8 tracking-wide">
              Mastery Through Structure
            </h2>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-accent to-transparent mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group relative overflow-hidden rounded-lg bg-card p-8 academic-shadow hover-lift transition-elegant">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <div className="w-8 h-8 bg-accent rounded-full"></div>
                </div>
                <h3 className="font-serif-display text-xl font-medium text-foreground mb-4">Precision Training</h3>
                <p className="font-sans-body text-muted-foreground leading-relaxed">
                  Our curriculum emphasizes accuracy over speed, ensuring every gesture carries meaning and purpose.
                </p>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-lg bg-card p-8 academic-shadow hover-lift transition-elegant">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <div className="w-8 h-8 bg-primary rounded-full"></div>
                </div>
                <h3 className="font-serif-display text-xl font-medium text-foreground mb-4">Academic Excellence</h3>
                <p className="font-sans-body text-muted-foreground leading-relaxed">
                  Rigorous standards maintained through comprehensive assessment and continuous improvement.
                </p>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-lg bg-card p-8 academic-shadow hover-lift transition-elegant">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <div className="w-8 h-8 bg-accent rounded-full"></div>
                </div>
                <h3 className="font-serif-display text-xl font-medium text-foreground mb-4">Elite Network</h3>
                <p className="font-sans-body text-muted-foreground leading-relaxed">
                  Connect with like-minded individuals committed to mastering the art of silent communication.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Stats Section */}
      <Section id="stats" className="py-24 bg-gradient-to-r from-secondary/20 to-accent/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif-display text-3xl md:text-4xl font-semibold text-foreground mb-16 tracking-wide">
            Excellence in Numbers
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-card/80 backdrop-blur-sm border border-accent/20 rounded-lg p-6 hover-lift transition-elegant">
                  <div className="font-serif-display text-3xl md:text-4xl font-bold text-accent mb-2">95%</div>
                  <div className="font-sans-body text-sm text-muted-foreground uppercase tracking-wide">Accuracy Rate</div>
                </div>
              </div>
            </div>
            
            <div className="group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-card/80 backdrop-blur-sm border border-primary/20 rounded-lg p-6 hover-lift transition-elegant">
                  <div className="font-serif-display text-3xl md:text-4xl font-bold text-primary mb-2">150+</div>
                  <div className="font-sans-body text-sm text-muted-foreground uppercase tracking-wide">Signs Mastered</div>
                </div>
              </div>
            </div>
            
            <div className="group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-card/80 backdrop-blur-sm border border-accent/20 rounded-lg p-6 hover-lift transition-elegant">
                  <div className="font-serif-display text-3xl md:text-4xl font-bold text-accent mb-2">24/7</div>
                  <div className="font-sans-body text-sm text-muted-foreground uppercase tracking-wide">Practice Access</div>
                </div>
              </div>
            </div>
            
            <div className="group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-card/80 backdrop-blur-sm border border-primary/20 rounded-lg p-6 hover-lift transition-elegant">
                  <div className="font-serif-display text-3xl md:text-4xl font-bold text-primary mb-2">100%</div>
                  <div className="font-sans-body text-sm text-muted-foreground uppercase tracking-wide">Commitment</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Learning Path Section */}
      <Section id="path" className="py-24 bg-gradient-to-b from-background to-secondary/10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="font-serif-display text-4xl md:text-5xl font-semibold text-foreground mb-8 tracking-wide">
              The Path to Mastery
            </h2>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-accent to-transparent mx-auto mb-8"></div>
            <p className="font-serif text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              A structured journey from foundation to excellence, designed for those who seek precision in every gesture.
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-accent via-primary to-accent opacity-30"></div>
            
            <div className="space-y-16">
              <div className="relative flex items-center justify-between">
                <div className="w-5/12 text-right pr-8">
                  <h3 className="font-serif-display text-2xl font-medium text-foreground mb-4">Foundation</h3>
                  <p className="font-sans-body text-muted-foreground leading-relaxed">
                    Master the alphabet, basic vocabulary, and essential grammar structures of ASL.
                  </p>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-accent rounded-full border-4 border-background flex items-center justify-center">
                  <div className="w-4 h-4 bg-background rounded-full"></div>
                </div>
                <div className="w-5/12"></div>
              </div>
              
              <div className="relative flex items-center justify-between">
                <div className="w-5/12"></div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-primary rounded-full border-4 border-background flex items-center justify-center">
                  <div className="w-4 h-4 bg-background rounded-full"></div>
                </div>
                <div className="w-5/12 pl-8">
                  <h3 className="font-serif-display text-2xl font-medium text-foreground mb-4">Application</h3>
                  <p className="font-sans-body text-muted-foreground leading-relaxed">
                    Apply knowledge through conversation practice, storytelling, and real-world scenarios.
                  </p>
                </div>
              </div>
              
              <div className="relative flex items-center justify-between">
                <div className="w-5/12 text-right pr-8">
                  <h3 className="font-serif-display text-2xl font-medium text-foreground mb-4">Mastery</h3>
                  <p className="font-sans-body text-muted-foreground leading-relaxed">
                    Achieve fluency through advanced techniques, cultural understanding, and teaching others.
                  </p>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-accent rounded-full border-4 border-background flex items-center justify-center">
                  <div className="w-4 h-4 bg-background rounded-full"></div>
                </div>
                <div className="w-5/12"></div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Testimonials Section */}
      <Section id="testimonials" className="py-24 bg-gradient-to-r from-accent/5 to-primary/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif-display text-4xl md:text-5xl font-semibold text-foreground mb-16 tracking-wide">
            Voices of Excellence
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="group">
              <div className="relative overflow-hidden rounded-lg bg-card/80 backdrop-blur-sm border border-accent/20 p-8 academic-shadow hover-lift transition-elegant">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="text-4xl text-accent mb-4">"</div>
                  <p className="font-serif text-lg text-foreground mb-6 leading-relaxed italic">
                    The precision and discipline taught here transformed not just my communication skills, but my entire approach to learning.
                  </p>
                  <div className="flex items-center justify-center space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="font-sans-body text-sm text-muted-foreground uppercase tracking-wider">Student Excellence</span>
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="group">
              <div className="relative overflow-hidden rounded-lg bg-card/80 backdrop-blur-sm border border-primary/20 p-8 academic-shadow hover-lift transition-elegant">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="text-4xl text-primary mb-4">"</div>
                  <p className="font-serif text-lg text-foreground mb-6 leading-relaxed italic">
                    Signova doesn't just teach sign language—it cultivates a mindset of excellence that extends to every aspect of life.
                  </p>
                  <div className="flex items-center justify-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="font-sans-body text-sm text-muted-foreground uppercase tracking-wider">Academic Achievement</span>
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact" className="py-24 bg-gradient-to-b from-primary/5 to-accent/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif-display text-4xl md:text-5xl font-semibold text-foreground mb-8 tracking-wide animate-shimmer">
            Contact Us
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-accent to-transparent mx-auto mb-16"></div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Join Signova */}
            <div className="scroll-fade">
              <Card className="bg-card/90 backdrop-blur-sm border border-accent/20 p-8 academic-shadow hover-lift transition-elegant h-full">
                <div className="space-y-6">
                  <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6 hover:scale-110 transition-transform duration-300">
                    <div className="w-8 h-8 bg-accent rounded-full animate-pulse-academic"></div>
                  </div>
                  
                  <h3 className="font-serif-display text-2xl font-medium text-foreground mb-4">Join Signova</h3>
                  <p className="font-sans-body text-muted-foreground leading-relaxed mb-8">
                    Ready to become part of something extraordinary? Send us your inquiry and demonstrate your commitment to excellence.
                  </p>
                  
                  <Button 
                    variant="gold" 
                    size="lg"
                    className="px-12 py-3 text-lg font-serif-display hover-glow animate-pulse-academic"
                    onClick={() => window.open('https://wa.me/919718730024?text=I%20am%20interested%20in%20joining%20Signova', '_blank')}
                  >
                    WhatsApp Inquiry
                  </Button>
                </div>
              </Card>
            </div>
            
            {/* General Contact */}
            <div className="scroll-fade">
              <Card className="bg-card/90 backdrop-blur-sm border border-primary/20 p-8 academic-shadow hover-lift transition-elegant h-full">
                <div className="space-y-6">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6 hover:scale-110 transition-transform duration-300">
                    <div className="w-8 h-8 bg-primary rounded-full animate-pulse-academic"></div>
                  </div>
                  
                  <h3 className="font-serif-display text-2xl font-medium text-foreground mb-4">General Inquiries</h3>
                  <p className="font-sans-body text-muted-foreground leading-relaxed mb-8">
                    For general questions, partnerships, or academic inquiries, connect with our team through WhatsApp for fastest response.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-center space-x-3 text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="font-sans-body text-sm">WhatsApp: +91 97187 30024</span>
                    </div>
                    <div className="flex items-center justify-center space-x-3 text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="font-sans-body text-sm">Response Time: Within 24 hours</span>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </Section>

      {/* Academic Footer */}
      <footer className="py-16 px-4 text-center border-t border-accent/20 bg-gradient-to-r from-secondary/10 to-primary/10">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="flex items-center justify-center space-x-4 mb-8">
            <div className="w-12 h-px bg-accent"></div>
            <img src={signovaSquareLogo} alt="Signova" className="w-8 h-8 opacity-60" />
            <div className="w-12 h-px bg-accent"></div>
          </div>
          
          <p className="font-serif text-lg text-foreground/80 italic">
            "In silence, we find our strength. In discipline, we find our way."
          </p>
          
          <div className="pt-8 border-t border-accent/10">
            <p className="font-sans-body text-sm text-muted-foreground">
              Established by the Founders of Signova • © 2025 • Elite Academic Excellence
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Index