import { Button } from "@/components/ui/button"
import { Section } from "@/components/ui/section"
import { Card } from "@/components/ui/card"
import { useAuth } from "@/hooks/useAuth"
import { Link } from "react-router-dom"
import signovaCurvedLogo from "@/assets/signova-logo-curved.png"
import signovaSquareLogo from "@/assets/signova-logo-square.png"

const Index = () => {
  const { user, logout } = useAuth();

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-parchment text-foreground">
      {/* Academic Navigation */}
      <header className="fixed top-0 right-0 p-6 z-50 animate-fade-in">
        {user ? (
          <div className="flex space-x-4">
            <Button 
              onClick={() => window.location.href = '/dashboard'} 
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-sm academic-shadow hover-lift transition-elegant"
            >
              Dashboard
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
            <span className="block animate-typewriter overflow-hidden whitespace-nowrap">Power in Silence</span>
          </h1>
          
          <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto mb-8"></div>
          
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

      {/* About the Team - Academic Style */}
      <Section id="about" className="text-center py-24 bg-gradient-to-b from-transparent to-secondary/20">
        <div className="max-w-5xl mx-auto scroll-fade">
          <h2 className="font-serif-display text-4xl md:text-6xl font-semibold text-foreground mb-8 tracking-wide">
            The Inner Circle
          </h2>
          
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-accent to-transparent mx-auto mb-16"></div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 text-left animate-slide-in-left">
              <p className="font-serif text-xl md:text-2xl text-foreground leading-relaxed">
                Signova represents a <em className="text-accent font-medium">quiet revolution</em> in communication—an elite collective of young minds mastering the art of non-verbal discourse.
              </p>
              
              <p className="font-sans-body text-lg text-muted-foreground leading-relaxed">
                We believe in the power of focus, the elegance of restraint, and the profound strength found in silence. Our approach transcends traditional learning methodologies.
              </p>
              
              <p className="font-sans-body text-lg text-muted-foreground leading-relaxed">
                Our commitment is not to noise, but to precision. Not to spectacle, but to substance. We cultivate mastery through respect, discipline, and the understanding that true communication transcends words.
              </p>
            </div>
            
            <div className="animate-fade-in">
              <div className="bg-card p-8 rounded-lg paper-shadow hover-lift transition-elegant">
                <h3 className="font-serif-display text-2xl font-medium text-primary mb-6">Core Principles</h3>
                <ul className="space-y-4 text-left">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <span className="font-sans-body text-foreground">Silent Communication Mastery</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <span className="font-sans-body text-foreground">Academic Excellence</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <span className="font-sans-body text-foreground">Elite Coordination</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <span className="font-sans-body text-foreground">Tactical Precision</span>
                  </li>
                </ul>
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