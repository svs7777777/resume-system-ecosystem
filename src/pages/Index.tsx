import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FileText, Sparkles, Download, Zap } from "lucide-react";
import heroWorkspace from "@/assets/hero-workspace.jpg";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-secondary/20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM1YTY3ZDgiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDE0YzYuNjI3IDAgMTItNS4zNzMgMTItMTJTNDIuNjI3LTEwIDM2LTEwIDI0LTQuNjI3IDI0IDJzNS4zNzMgMTIgMTIgMTJ6TTEyIDE0YzYuNjI3IDAgMTItNS4zNzMgMTItMTJTMTguNjI3LTEwIDEyLTEwIDAgLTQuNjI3IDAgMnM1LjM3MyAxMiAxMiAxMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-40"></div>
        
        <div className="container relative mx-auto px-4 py-20 md:py-32">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                <Sparkles className="h-4 w-4" />
                AI-Powered Resume Builder
              </div>
              
              <h1 className="text-5xl font-bold tracking-tight md:text-6xl lg:text-7xl">
                Build Your{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Perfect Resume
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-xl">
                Create professional, ATS-friendly resumes in minutes with our smart resume builder. 
                Stand out from the crowd and land your dream job.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link to="/builder">
                  <Button variant="hero" size="lg" className="group">
                    Start Building
                    <Zap className="h-5 w-5 transition-transform group-hover:scale-110" />
                  </Button>
                </Link>
                <Button variant="outline" size="lg">
                  View Templates
                </Button>
              </div>
              
              <div className="flex items-center gap-8 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary"></div>
                  No credit card required
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-accent"></div>
                  Free templates
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-2xl"></div>
              <img 
                src={heroWorkspace} 
                alt="Professional workspace" 
                className="relative rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold md:text-4xl mb-4">
              Everything You Need to Succeed
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our smart resume builder comes packed with features to help you create the perfect resume
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="p-8 hover:shadow-lg transition-shadow border-border bg-card">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Sparkles className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">AI-Powered Suggestions</h3>
              <p className="text-muted-foreground">
                Get intelligent content suggestions tailored to your industry and role
              </p>
            </Card>
            
            <Card className="p-8 hover:shadow-lg transition-shadow border-border bg-card">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                <FileText className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Professional Templates</h3>
              <p className="text-muted-foreground">
                Choose from dozens of professionally designed, ATS-friendly templates
              </p>
            </Card>
            
            <Card className="p-8 hover:shadow-lg transition-shadow border-border bg-card">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Download className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Export Anywhere</h3>
              <p className="text-muted-foreground">
                Download your resume in PDF, Word, or share it with a custom link
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl font-bold md:text-5xl">
              Ready to Build Your Future?
            </h2>
            <p className="text-xl text-muted-foreground">
              Join thousands of job seekers who've landed their dream jobs with our resume builder
            </p>
            <Link to="/builder">
              <Button variant="hero" size="lg" className="group">
                Get Started Now
                <Sparkles className="h-5 w-5 transition-transform group-hover:rotate-12" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
