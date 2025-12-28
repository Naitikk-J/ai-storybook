import { useState, useEffect } from "react";
import { BookOpen, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

const chapters = [
  { id: "cover", title: "Cover", icon: "📕" },
  { id: "about-ai", title: "Chapter 1: The Rise of AI", icon: "🤖" },
  { id: "events", title: "Chapter 2: The Call to Innovate", icon: "🎯" },
  { id: "discussions", title: "Chapter 3: The Circle of Minds", icon: "💬" },
  { id: "team", title: "Chapter 4: The Guardians", icon: "👥" },
  { id: "developers", title: "Chapter 5: The Makers", icon: "✨" },
  { id: "contact", title: "Chapter 6: Write Your Chapter", icon: "✉️" },
];

const TableOfContents = () => {
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(false);
  const [activeChapter, setActiveChapter] = useState("cover");
  const [scrollProgress, setScrollProgress] = useState(0);

  // Auto-open on desktop, stay collapsed on mobile
  useEffect(() => {
    if (isMobile !== undefined) {
      setIsOpen(!isMobile);
    }
  }, [isMobile]);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate overall scroll progress
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / scrollHeight) * 100;
      setScrollProgress(progress);

      // Determine active chapter
      const sections = chapters.map((ch) => document.getElementById(ch.id));
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveChapter(chapters[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToChapter = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const getChapterProgress = (chapterId: string) => {
    const chapterIndex = chapters.findIndex((ch) => ch.id === chapterId);
    const activeIndex = chapters.findIndex((ch) => ch.id === activeChapter);
    if (chapterIndex < activeIndex) return 100;
    if (chapterIndex > activeIndex) return 0;
    return scrollProgress;
  };

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "fixed left-4 top-1/2 -translate-y-1/2 z-50",
          "w-12 h-12 rounded-full",
          "bg-story-burgundy text-story-cream",
          "shadow-lg shadow-story-burgundy/30",
          "flex items-center justify-center",
          "transition-all duration-300 hover:scale-110",
          "border-2 border-story-gold/30",
          isOpen && "opacity-0 pointer-events-none"
        )}
        aria-label="Open table of contents"
      >
        <BookOpen className="w-5 h-5" />
      </button>

      {/* Sidebar Overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-story-ink/50 z-40 transition-opacity duration-300",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setIsOpen(false)}
      />

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed left-0 top-0 h-full z-50",
          "w-80 max-w-[85vw]",
          "bg-gradient-to-br from-story-parchment via-story-cream to-story-parchment",
          "border-r-4 border-story-burgundy/20",
          "shadow-2xl shadow-story-ink/20",
          "transition-transform duration-500 ease-out",
          "flex flex-col",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E")`,
        }}
      >
        {/* Header */}
        <div className="p-6 border-b-2 border-story-burgundy/10 flex items-center justify-between">
          <div>
            <h2 className="font-display text-2xl text-story-burgundy">
              Table of Contents
            </h2>
            <p className="text-story-ink/60 text-sm mt-1 font-serif italic">
              Navigate your journey
            </p>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="w-10 h-10 rounded-full bg-story-burgundy/10 flex items-center justify-center hover:bg-story-burgundy/20 transition-colors"
          >
            <X className="w-5 h-5 text-story-burgundy" />
          </button>
        </div>

        {/* Overall Progress */}
        <div className="px-6 py-4 border-b border-story-burgundy/10">
          <div className="flex items-center justify-between text-sm mb-2">
            <span className="text-story-ink/70 font-serif">Reading Progress</span>
            <span className="text-story-burgundy font-medium">
              {Math.round(scrollProgress)}%
            </span>
          </div>
          <div className="h-2 bg-story-burgundy/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-story-burgundy to-story-gold rounded-full transition-all duration-300"
              style={{ width: `${scrollProgress}%` }}
            />
          </div>
        </div>

        {/* Chapters List */}
        <nav className="flex-1 overflow-y-auto py-4">
          <ul className="space-y-1 px-4">
            {chapters.map((chapter, index) => {
              const isActive = activeChapter === chapter.id;
              const progress = getChapterProgress(chapter.id);
              const isCompleted = progress === 100;

              return (
                <li key={chapter.id}>
                  <button
                    onClick={() => scrollToChapter(chapter.id)}
                    className={cn(
                      "w-full text-left px-4 py-3 rounded-lg",
                      "flex items-center gap-3",
                      "transition-all duration-300",
                      "group relative overflow-hidden",
                      isActive
                        ? "bg-story-burgundy text-story-cream shadow-md"
                        : "hover:bg-story-burgundy/10 text-story-ink"
                    )}
                  >
                    {/* Progress indicator line */}
                    {!isActive && (
                      <div
                        className="absolute left-0 top-0 h-full bg-story-gold/20 transition-all duration-300"
                        style={{ width: `${progress}%` }}
                      />
                    )}

                    {/* Chapter icon */}
                    <span
                      className={cn(
                        "w-8 h-8 rounded-full flex items-center justify-center text-lg relative z-10",
                        isActive
                          ? "bg-story-cream/20"
                          : isCompleted
                          ? "bg-story-gold/30"
                          : "bg-story-burgundy/10"
                      )}
                    >
                      {chapter.icon}
                    </span>

                    {/* Chapter title */}
                    <span
                      className={cn(
                        "font-serif text-sm relative z-10 flex-1",
                        isActive && "font-medium"
                      )}
                    >
                      {chapter.title}
                    </span>

                    {/* Completion checkmark */}
                    {isCompleted && !isActive && (
                      <span className="text-story-gold relative z-10">✓</span>
                    )}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Decorative Footer */}
        <div className="p-6 border-t-2 border-story-burgundy/10 text-center">
          <p className="font-display text-story-burgundy/60 text-sm">
            ✦ The Story of AI Club ✦
          </p>
        </div>
      </aside>

      {/* Mini Progress Bar (always visible) */}
      <div
        className={cn(
          "fixed left-0 top-0 h-1 bg-gradient-to-r from-story-burgundy to-story-gold z-30 transition-all duration-300",
          isOpen && "opacity-0"
        )}
        style={{ width: `${scrollProgress}%` }}
      />
    </>
  );
};

export default TableOfContents;
