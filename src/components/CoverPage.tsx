import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-book-cover.jpg";
import { BookOpen, Users, Sparkles } from "lucide-react";

const CoverPage = () => {
  const scrollToChapter = (chapterId: string) => {
    const element = document.getElementById(chapterId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden paper-texture">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Magical open book with AI neural networks floating above glowing pages"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background" />
      </div>

      {/* Vignette Effect */}
      <div className="absolute inset-0 vignette" />

      {/* Decorative Corner Flourishes */}
      <div className="absolute top-8 left-8 w-24 h-24 border-l-2 border-t-2 border-gold/40 rounded-tl-lg opacity-60" />
      <div className="absolute top-8 right-8 w-24 h-24 border-r-2 border-t-2 border-gold/40 rounded-tr-lg opacity-60" />
      <div className="absolute bottom-8 left-8 w-24 h-24 border-l-2 border-b-2 border-gold/40 rounded-bl-lg opacity-60" />
      <div className="absolute bottom-8 right-8 w-24 h-24 border-r-2 border-b-2 border-gold/40 rounded-br-lg opacity-60" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Floating Sparkles */}
        <div className="absolute -top-10 left-1/4 animate-float">
          <Sparkles className="w-6 h-6 text-gold opacity-60" />
        </div>
        <div className="absolute -top-5 right-1/3 animate-float animate-delay-300">
          <Sparkles className="w-4 h-4 text-gold opacity-40" />
        </div>

        {/* Book Ornament */}
        <div className="flex justify-center mb-6 animate-fade-in">
          <div className="w-16 h-1 bg-gradient-to-r from-transparent via-gold to-transparent" />
        </div>

        {/* Title */}
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-4 animate-fade-in tracking-tight">
          The Story of{" "}
          <span className="text-gold gold-glow">AI Club</span>
        </h1>

        {/* Subtitle */}
        <p className="font-display text-xl md:text-2xl lg:text-3xl text-muted-foreground italic mb-8 animate-fade-in animate-delay-200">
          "Where Curiosity Meets Intelligence"
        </p>

        {/* Decorative Line */}
        <div className="flex items-center justify-center gap-4 mb-10 animate-fade-in animate-delay-300">
          <div className="w-20 h-px bg-gradient-to-r from-transparent to-border" />
          <BookOpen className="w-6 h-6 text-gold" />
          <div className="w-20 h-px bg-gradient-to-l from-transparent to-border" />
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in animate-delay-400">
          <Button
            variant="story"
            size="lg"
            onClick={() => scrollToChapter("chapter-1")}
            className="group"
          >
            <BookOpen className="w-5 h-5 mr-2 group-hover:animate-bounce" />
            Start the Story
          </Button>
          <Button
            variant="storyOutline"
            size="lg"
            onClick={() => scrollToChapter("chapter-6")}
            className="group"
          >
            <Users className="w-5 h-5 mr-2" />
            Join the Club
          </Button>
        </div>

        {/* Page Curl Hint */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce-gentle">
          <div className="flex flex-col items-center text-muted-foreground">
            <span className="text-sm font-body mb-2">Scroll to begin</span>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoverPage;
