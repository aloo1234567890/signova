import { useState } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Navigate } from 'react-router-dom';

const Auth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { login, user } = useAuth();
  const { toast } = useToast();

  // Redirect if already logged in
  if (user) {
    return <Navigate to="/" replace />;
  }

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const { error } = await login(email, password);

    if (error) {
      toast({
        variant: "destructive",
        title: "Login Failed",
        description: error.message,
      });
    } else {
      toast({
        title: "Welcome",
        description: "Successfully logged in",
      });
    }

    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="w-full max-w-md p-8 bg-card border border-border">
        <div className="text-center mb-8">
          <div className="w-16 h-16 mx-auto mb-4 bg-red-500 flex items-center justify-center">
            <img 
              src="/signova-logo-square.png" 
              alt="SIGNOVA" 
              className="w-full h-full object-contain"
              onError={(e) => {
                console.log('Image failed to load:', e);
                e.currentTarget.style.display = 'none';
              }}
              onLoad={() => console.log('Image loaded successfully')}
            />
          </div>
          <h1 className="font-serif-display text-2xl font-normal text-foreground">
            Access Signova
          </h1>
          <div className="w-12 h-0.5 bg-primary mx-auto mt-4"></div>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <Label htmlFor="email" className="font-sans-body">Email</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-2"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <Label htmlFor="password" className="font-sans-body">Password</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-2"
              placeholder="Enter your password"
            />
          </div>

          <Button
            type="submit"
            variant="gold"
            className="w-full"
            disabled={isLoading}
          >
            {isLoading ? 'Signing in...' : 'Sign In'}
          </Button>
        </form>

        <p className="text-center text-sm text-muted-foreground mt-6">
          Access restricted to authorized members only
        </p>
      </Card>
    </div>
  );
};

export default Auth;