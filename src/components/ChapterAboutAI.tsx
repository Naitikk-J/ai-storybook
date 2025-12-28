import ChapterDivider from "./ChapterDivider";
import timelineImage from "@/assets/ai-timeline.jpg";
import { Brain, Cpu, Sparkles, Zap } from "lucide-react";

const timelineEvents = [
  {
    year: "1950s",
    title: "The Dawn",
    description: "Alan Turing poses the question: 'Can machines think?' The seeds of artificial intelligence are planted.",
    icon: Brain,
  },
  {
    year: "1997",
    title: "The First Victory",
    description: "Deep Blue defeats world chess champion Garry Kasparov, proving machines could master human games.",
    icon: Cpu,
  },
  {
    year: "2010s",
    title: "The Awakening",
    description: "Deep learning revolutionizes AI. Machines begin to see, hear, and understand like never before.",
    icon: Zap,
  },
  {
    year: "Today",
    title: "The New Chapter",
    description: "AI transforms every industry. And now, a new generation of innovators steps forward to write the next chapter.",
    icon: Sparkles,
  },
];

const ChapterAboutAI = () => {
  return (
    <section id="chapter-1" className="py-20">
      <div className="container mx-auto px-6">
        <ChapterDivider chapterNumber={1} title="The Rise of Artificial Intelligence" />

        {/* Narrative Introduction */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="story-text text-lg md:text-xl leading-relaxed text-muted-foreground italic">
            "In the beginning, there were dreams of machines that could think, learn, and create. 
            What started as whispers in the halls of academia has now become a thundering revolution, 
            reshaping the very fabric of our world..."
          </p>
        </div>

        {/* Timeline Image */}
        <div className="relative max-w-4xl mx-auto mb-16 rounded-lg overflow-hidden book-shadow">
          <img
            src={timelineImage}
            alt="Illustrated timeline showing the evolution of AI from mechanical gears to neural networks"
            className="w-full h-auto"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
        </div>

        {/* Timeline Cards */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-gold via-gold/50 to-transparent hidden md:block" />

            {timelineEvents.map((event, index) => {
              const Icon = event.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={event.year}
                  className={`relative flex items-center mb-12 ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 -translate-x-1/2 w-12 h-12 bg-parchment border-2 border-gold rounded-full flex items-center justify-center z-10 hidden md:flex">
                    <Icon className="w-5 h-5 text-gold" />
                  </div>

                  {/* Card */}
                  <div
                    className={`w-full md:w-5/12 ${
                      isEven ? "md:pr-16 md:text-right" : "md:pl-16 md:text-left"
                    }`}
                  >
                    <div className="bg-card p-6 rounded-lg card-shadow border border-border/50">
                      <div className={`flex items-center gap-3 mb-3 ${isEven ? "md:justify-end" : ""}`}>
                        <Icon className="w-5 h-5 text-gold md:hidden" />
                        <span className="text-sm font-body uppercase tracking-wider text-gold font-medium">
                          {event.year}
                        </span>
                      </div>
                      <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                        {event.title}
                      </h3>
                      <p className="font-body text-muted-foreground leading-relaxed">
                        {event.description}
                      </p>
                    </div>
                  </div>

                  {/* Spacer for opposite side */}
                  <div className="hidden md:block md:w-5/12" />
                </div>
              );
            })}
          </div>
        </div>

        {/* Closing Narrative */}
        <div className="max-w-3xl mx-auto text-center mt-16">
          <p className="story-text text-lg leading-relaxed text-muted-foreground">
            And so, the story continues—not in distant laboratories, but here, in our club, 
            where the next generation of AI pioneers gather to learn, create, and dream together.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ChapterAboutAI;
