import ChapterDivider from "./ChapterDivider";
import { Code2, Palette, Database, Globe, Github, Linkedin, ExternalLink } from "lucide-react";

interface Developer {
  id: number;
  name: string;
  role: string;
  avatar: string;
  technologies: string[];
  portfolio?: string;
  socials: {
    github?: string;
    linkedin?: string;
  };
}

const developers: Developer[] = [
  {
    id: 1,
    name: "Jordan Lee",
    role: "Lead Developer",
    avatar: "JL",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    portfolio: "#",
    socials: { github: "#", linkedin: "#" },
  },
  {
    id: 2,
    name: "Maya Chen",
    role: "UI/UX Designer",
    avatar: "MC",
    technologies: ["Figma", "Illustration", "Motion Design"],
    portfolio: "#",
    socials: { linkedin: "#" },
  },
  {
    id: 3,
    name: "Dev Patel",
    role: "Backend Developer",
    avatar: "DP",
    technologies: ["Node.js", "PostgreSQL", "AWS"],
    socials: { github: "#" },
  },
];

const getRoleIcon = (role: string) => {
  if (role.toLowerCase().includes("ui") || role.toLowerCase().includes("design")) {
    return Palette;
  }
  if (role.toLowerCase().includes("backend") || role.toLowerCase().includes("database")) {
    return Database;
  }
  if (role.toLowerCase().includes("full") || role.toLowerCase().includes("web")) {
    return Globe;
  }
  return Code2;
};

const ChapterDevelopers = () => {
  return (
    <section id="chapter-5" className="py-20">
      <div className="container mx-auto px-6">
        <ChapterDivider chapterNumber={5} title="The Makers Behind the Pages" />

        {/* Narrative Introduction */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="story-text text-lg md:text-xl leading-relaxed text-muted-foreground italic">
            "And who, you ask, are the scribes who brought this tale to life? 
            Meet the artisans who wove code and design into the pages before you..."
          </p>
        </div>

        {/* Authors Badge */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex items-center gap-2 px-6 py-2 bg-card rounded-full border border-gold/30 card-shadow">
            <Code2 className="w-5 h-5 text-gold" />
            <span className="font-display text-lg text-foreground">Authors of This Story</span>
          </div>
        </div>

        {/* Developer Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {developers.map((dev) => {
            const Icon = getRoleIcon(dev.role);

            return (
              <div
                key={dev.id}
                className="bg-card rounded-xl p-6 card-shadow border border-border/50 hover:border-gold/50 transition-all duration-300 group text-center"
              >
                {/* Avatar */}
                <div className="relative inline-block mb-4">
                  <div className="w-24 h-24 rounded-full bg-muted flex items-center justify-center font-display text-2xl font-semibold text-foreground group-hover:scale-105 transition-transform">
                    {dev.avatar}
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-10 h-10 rounded-full bg-gold flex items-center justify-center">
                    <Icon className="w-5 h-5 text-ink" />
                  </div>
                </div>

                {/* Info */}
                <h4 className="font-display text-xl font-semibold text-foreground mb-1 group-hover:text-gold transition-colors">
                  {dev.name}
                </h4>
                <p className="font-body text-muted-foreground mb-4">{dev.role}</p>

                {/* Technologies */}
                <div className="flex flex-wrap justify-center gap-2 mb-4">
                  {dev.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-muted rounded-full text-xs font-body text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex justify-center gap-2">
                  {dev.socials.github && (
                    <a
                      href={dev.socials.github}
                      className="w-9 h-9 rounded-full bg-muted flex items-center justify-center hover:bg-gold hover:text-ink transition-colors"
                      aria-label="GitHub"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                  {dev.socials.linkedin && (
                    <a
                      href={dev.socials.linkedin}
                      className="w-9 h-9 rounded-full bg-muted flex items-center justify-center hover:bg-gold hover:text-ink transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  )}
                  {dev.portfolio && (
                    <a
                      href={dev.portfolio}
                      className="w-9 h-9 rounded-full bg-muted flex items-center justify-center hover:bg-gold hover:text-ink transition-colors"
                      aria-label="Portfolio"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Decorative Quill */}
        <div className="flex justify-center mt-12">
          <svg
            className="w-16 h-16 text-gold opacity-50"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M20.71 7.04c.39-.39.39-1.04 0-1.41l-2.34-2.34c-.37-.39-1.02-.39-1.41 0l-1.84 1.83 3.75 3.75M3 17.25V21h3.75L17.81 9.93l-3.75-3.75L3 17.25z" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default ChapterDevelopers;
