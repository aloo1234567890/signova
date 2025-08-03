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
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="fixed top-0 right-0 p-6 z-50">
        {user ? (
          <div className="flex space-x-4">
            <Button 
              onClick={() => window.location.href = '/dashboard'} 
              className="bg-purple-600 hover:bg-purple-700 text-white text-sm"
            >
              Dashboard
            </Button>
            <Button variant="outline" onClick={logout} className="text-sm">
              Sign Out
            </Button>
          </div>
        ) : (
          <Button variant="outline" asChild className="text-sm">
            <Link to="/auth">Member Access</Link>
          </Button>
        )}
      </header>
      {/* Hero Section */}
      <Section className="min-h-screen flex flex-col items-center justify-center text-center py-32">
        <div className="mb-8">
          <img 
            src={signovaCurvedLogo} 
            alt="SIGNOVA" 
            className="w-48 h-48 md:w-64 md:h-64 mx-auto mb-6 transition-elegant hover:scale-105"
          />
        </div>
        
        <h1 className="font-serif-display text-4xl md:text-6xl lg:text-7xl font-normal text-foreground mb-6 tracking-wide">
          We move without sound.<br />
          We speak without words.
        </h1>
        
        <p className="font-sans-body text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl leading-relaxed">
          Signova isn't a club. It's a code.
        </p>
        
        <div className="w-24 h-0.5 bg-primary mx-auto"></div>
      </Section>

      {/* About the Team */}
      <Section id="about" className="text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif-display text-3xl md:text-5xl font-normal text-foreground mb-8 tracking-wide">
            The Inner Circle
          </h2>
          
          <div className="w-16 h-0.5 bg-primary mx-auto mb-12"></div>
          
          <p className="font-sans-body text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
            Signova is a quiet inner circle of 4 young minds building mastery in non-verbal communication. 
            We believe in the power of focus, the elegance of restraint, and the strength found in silence.
          </p>
          
          <p className="font-sans-body text-lg text-muted-foreground leading-relaxed">
            Our commitment is not to noise, but to precision. Not to spectacle, but to substance. 
            We grow through respect, discipline, and the understanding that true communication transcends words.
          </p>
        </div>
      </Section>

      {/* Enquire Section */}
      <Section id="enquire" className="text-center">
        <Card className="max-w-3xl mx-auto p-12 bg-card border border-border">
          <h2 className="font-serif-display text-3xl md:text-4xl font-normal text-foreground mb-6 tracking-wide">
            Interested in mastering the silent language?
          </h2>
          
          <div className="w-16 h-0.5 bg-primary mx-auto mb-8"></div>
          
          <p className="font-sans-body text-lg text-muted-foreground mb-10 leading-relaxed">
            Signova isn't for everyone. But if you're serious, we'll hear you.
          </p>
          
          <Button 
            variant="gold" 
            size="lg"
            className="px-12 py-4 text-lg"
            onClick={() => window.open('https://wa.me/919718730024?text=I%20am%20interested%20in%20joining%20Signova', '_blank')}
          >
            Send Enquiry
          </Button>
        </Card>
      </Section>

      {/* Badge Display */}
      <Section id="badge" className="text-center">
        <div className="max-w-2xl mx-auto">
          <img 
            src={signovaSquareLogo} 
            alt="SIGNOVA Badge" 
            className="w-32 h-32 md:w-48 md:h-48 mx-auto mb-8 transition-elegant hover:scale-105 gold-glow"
          />
          
          <h3 className="font-serif-display text-2xl md:text-3xl font-normal text-foreground mb-4 tracking-wide">
            For members only.
          </h3>
          
          <p className="font-sans-body text-lg text-primary font-medium">
            Earned, not given.
          </p>
        </div>
      </Section>

      {/* Footer */}
      <footer className="py-12 px-4 text-center border-t border-border">
        <p className="font-sans-body text-sm text-muted-foreground">
          Crafted by the Founders of Signova. © 2025
        </p>
      </footer>
    </div>
  )
}

export default Index