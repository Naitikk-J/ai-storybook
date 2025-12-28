import ChapterDivider from "./ChapterDivider";
import { Button } from "@/components/ui/button";
import campfireImage from "@/assets/discussion-campfire.jpg";
import { MessageCircle, Users, Flame } from "lucide-react";

const discussionTopics = [
  {
    id: 1,
    topic: "Will AI replace human creativity?",
    participants: 24,
    isHot: true,
  },
  {
    id: 2,
    topic: "The ethics of autonomous vehicles",
    participants: 18,
    isHot: false,
  },
  {
    id: 3,
    topic: "Open source vs proprietary AI models",
    participants: 31,
    isHot: true,
  },
  {
    id: 4,
    topic: "AI in healthcare: Promise or peril?",
    participants: 22,
    isHot: false,
  },
];

const ChapterDiscussions = () => {
  return (
    <section id="chapter-3" className="py-20 bg-parchment paper-texture">
      <div className="container mx-auto px-6">
        <ChapterDivider chapterNumber={3} title="The Circle of Minds" />

        {/* Narrative Introduction */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="story-text text-lg md:text-xl leading-relaxed text-muted-foreground italic">
            "Around the fire, stories are shared and ideas take flight. 
            In our circle, every voice matters, every question sparks new understanding..."
          </p>
        </div>

        {/* Campfire Illustration */}
        <div className="relative max-w-2xl mx-auto mb-16">
          <div className="relative rounded-2xl overflow-hidden book-shadow">
            <img
              src={campfireImage}
              alt="Illustrated people gathered around a campfire for group discussion"
              className="w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
          </div>

          {/* Floating Discussion Bubbles */}
          <div className="absolute -top-4 -left-4 md:left-0 bg-card rounded-2xl rounded-bl-none p-4 card-shadow animate-float max-w-[200px]">
            <p className="text-sm font-body text-muted-foreground">
              "What if AI could dream?"
            </p>
          </div>
          <div className="absolute -bottom-4 -right-4 md:right-0 bg-card rounded-2xl rounded-br-none p-4 card-shadow animate-float animate-delay-300 max-w-[200px]">
            <p className="text-sm font-body text-muted-foreground">
              "The future is collaborative!"
            </p>
          </div>
        </div>

        {/* Discussion Topics */}
        <div className="max-w-3xl mx-auto">
          <h3 className="font-display text-2xl font-semibold text-center text-foreground mb-8">
            Current Discussion Topics
          </h3>

          <div className="space-y-4">
            {discussionTopics.map((discussion) => (
              <div
                key={discussion.id}
                className="bg-card rounded-lg p-5 card-shadow border border-border/50 flex items-center justify-between gap-4 hover:border-gold/50 transition-colors group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-display text-lg font-medium text-foreground group-hover:text-gold transition-colors">
                        {discussion.topic}
                      </h4>
                      {discussion.isHot && (
                        <Flame className="w-4 h-4 text-destructive animate-pulse" />
                      )}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Users className="w-4 h-4" />
                      <span>{discussion.participants} participants</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Join CTA */}
          <div className="text-center mt-12">
            <Button variant="story" size="lg">
              <MessageCircle className="w-5 h-5 mr-2" />
              Join the Discussion
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChapterDiscussions;
