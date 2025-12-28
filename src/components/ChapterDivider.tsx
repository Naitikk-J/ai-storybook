import { cn } from "@/lib/utils";

interface ChapterDividerProps {
  chapterNumber: number;
  title: string;
  className?: string;
}

const ChapterDivider = ({ chapterNumber, title, className }: ChapterDividerProps) => {
  return (
    <div className={cn("chapter-divider py-16", className)}>
      <div className="flex flex-col items-center gap-4 px-8 bg-background">
        <span className="text-sm font-body uppercase tracking-[0.3em] text-muted-foreground">
          Chapter {chapterNumber}
        </span>
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-primary text-center">
          {title}
        </h2>
        <div className="flex items-center gap-3 mt-2">
          <div className="w-8 h-px bg-gold" />
          <div className="w-2 h-2 bg-gold rotate-45" />
          <div className="w-8 h-px bg-gold" />
        </div>
      </div>
    </div>
  );
};

export default ChapterDivider;
