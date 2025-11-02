import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-hero opacity-90" />
        <img 
          src={heroImage} 
          alt="Modern technology abstract background" 
          className="w-full h-full object-cover mix-blend-overlay opacity-30"
        />
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white mb-8 animate-fade-in">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">Introducing the future of productivity</span>
          </div>
          
          {/* Heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-up leading-tight">
            Build Something
            <span className="block bg-gradient-accent bg-clip-text text-transparent">
              Extraordinary
            </span>
          </h1>
          
          {/* Subheading */}
          <p className="text-xl sm:text-2xl text-white/90 mb-12 max-w-2xl mx-auto animate-fade-up [animation-delay:200ms] opacity-0 [animation-fill-mode:forwards]">
            Empower your team with cutting-edge tools designed to transform the way you work and collaborate.
          </p>
          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-up [animation-delay:400ms] opacity-0 [animation-fill-mode:forwards]">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-large group">
              Get Started Free
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm">
              Watch Demo
            </Button>
          </div>
          
          {/* Social Proof */}
          <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-8 text-white/80 text-sm animate-fade-in [animation-delay:600ms] opacity-0 [animation-fill-mode:forwards]">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-white/20 border-2 border-white/40" />
                ))}
              </div>
              <span>Trusted by 10,000+ teams</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-white/30" />
            <span>⭐⭐⭐⭐⭐ 4.9/5 rating</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
