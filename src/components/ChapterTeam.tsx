import ChapterDivider from "./ChapterDivider";
import { Crown, Shield, Star, Users, Linkedin, Github, Mail } from "lucide-react";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  tier: "faculty" | "president" | "vp" | "head" | "core";
  avatar: string;
  socials?: {
    linkedin?: string;
    github?: string;
    email?: string;
  };
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Dr. Sarah Mitchell",
    role: "Faculty Coordinator",
    tier: "faculty",
    avatar: "SM",
    socials: { email: "sarah.mitchell@university.edu" },
  },
  {
    id: 2,
    name: "Alex Chen",
    role: "President",
    tier: "president",
    avatar: "AC",
    socials: { linkedin: "#", github: "#" },
  },
  {
    id: 3,
    name: "Priya Sharma",
    role: "Vice President",
    tier: "vp",
    avatar: "PS",
    socials: { linkedin: "#", github: "#" },
  },
  {
    id: 4,
    name: "Marcus Johnson",
    role: "Technical Head",
    tier: "head",
    avatar: "MJ",
    socials: { github: "#" },
  },
  {
    id: 5,
    name: "Emily Wang",
    role: "Events Head",
    tier: "head",
    avatar: "EW",
    socials: { linkedin: "#" },
  },
  {
    id: 6,
    name: "Raj Patel",
    role: "Creative Head",
    tier: "head",
    avatar: "RP",
    socials: { linkedin: "#" },
  },
  {
    id: 7,
    name: "Sofia Rodriguez",
    role: "Core Member",
    tier: "core",
    avatar: "SR",
    socials: {},
  },
  {
    id: 8,
    name: "James Kim",
    role: "Core Member",
    tier: "core",
    avatar: "JK",
    socials: {},
  },
  {
    id: 9,
    name: "Aisha Patel",
    role: "Core Member",
    tier: "core",
    avatar: "AP",
    socials: {},
  },
];

const getTierIcon = (tier: TeamMember["tier"]) => {
  switch (tier) {
    case "faculty":
      return Crown;
    case "president":
    case "vp":
      return Shield;
    case "head":
      return Star;
    default:
      return Users;
  }
};

const getTierStyles = (tier: TeamMember["tier"]) => {
  switch (tier) {
    case "faculty":
      return "border-gold bg-gradient-to-br from-gold/20 to-transparent";
    case "president":
      return "border-primary bg-gradient-to-br from-primary/10 to-transparent";
    case "vp":
      return "border-accent bg-gradient-to-br from-accent/10 to-transparent";
    case "head":
      return "border-secondary bg-gradient-to-br from-secondary/20 to-transparent";
    default:
      return "border-border bg-card";
  }
};

const ChapterTeam = () => {
  const faculty = teamMembers.filter((m) => m.tier === "faculty");
  const leadership = teamMembers.filter((m) => m.tier === "president" || m.tier === "vp");
  const heads = teamMembers.filter((m) => m.tier === "head");
  const core = teamMembers.filter((m) => m.tier === "core");

  const renderMemberCard = (member: TeamMember, size: "lg" | "md" | "sm" = "md") => {
    const Icon = getTierIcon(member.tier);
    const sizeClasses = {
      lg: "p-6",
      md: "p-5",
      sm: "p-4",
    };
    const avatarSizes = {
      lg: "w-20 h-20 text-2xl",
      md: "w-16 h-16 text-xl",
      sm: "w-14 h-14 text-lg",
    };

    return (
      <div
        key={member.id}
        className={`relative rounded-xl border-2 ${getTierStyles(member.tier)} ${sizeClasses[size]} card-shadow hover:shadow-lg transition-all duration-300 group`}
      >
        {/* Tier Badge */}
        <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-card border-2 border-current flex items-center justify-center">
          <Icon className="w-4 h-4 text-gold" />
        </div>

        <div className="flex flex-col items-center text-center">
          {/* Avatar */}
          <div
            className={`${avatarSizes[size]} rounded-full bg-muted flex items-center justify-center font-display font-semibold text-foreground mb-4 group-hover:scale-105 transition-transform`}
          >
            {member.avatar}
          </div>

          {/* Info */}
          <h4 className="font-display text-lg font-semibold text-foreground mb-1">
            {member.name}
          </h4>
          <p className="font-body text-sm text-muted-foreground mb-3">
            {member.role}
          </p>

          {/* Socials */}
          {member.socials && Object.keys(member.socials).length > 0 && (
            <div className="flex items-center gap-2">
              {member.socials.linkedin && (
                <a
                  href={member.socials.linkedin}
                  className="w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-gold hover:text-ink transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              )}
              {member.socials.github && (
                <a
                  href={member.socials.github}
                  className="w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-gold hover:text-ink transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
              )}
              {member.socials.email && (
                <a
                  href={`mailto:${member.socials.email}`}
                  className="w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-gold hover:text-ink transition-colors"
                  aria-label="Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <section id="chapter-4" className="py-20 bg-parchment-dark paper-texture">
      <div className="container mx-auto px-6">
        <ChapterDivider chapterNumber={4} title="The Guardians of the Club" />

        {/* Narrative Introduction */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="story-text text-lg md:text-xl leading-relaxed text-muted-foreground italic">
            "Every great tale has its heroes—the wise mentors, the brave leaders, 
            and the dedicated companions who make the journey possible..."
          </p>
        </div>

        {/* Team Hierarchy */}
        <div className="max-w-5xl mx-auto">
          {/* Faculty */}
          <div className="flex justify-center mb-8">
            {faculty.map((member) => renderMemberCard(member, "lg"))}
          </div>

          {/* Connecting Line */}
          <div className="flex justify-center mb-8">
            <div className="w-px h-12 bg-gradient-to-b from-gold to-border" />
          </div>

          {/* Leadership */}
          <div className="flex justify-center gap-6 mb-8 flex-wrap">
            {leadership.map((member) => renderMemberCard(member, "md"))}
          </div>

          {/* Connecting Lines */}
          <div className="flex justify-center mb-8">
            <div className="flex items-end gap-16">
              <div className="w-px h-8 bg-gradient-to-b from-border to-transparent" />
              <div className="w-px h-12 bg-gradient-to-b from-primary to-border" />
              <div className="w-px h-8 bg-gradient-to-b from-border to-transparent" />
            </div>
          </div>

          {/* Domain Heads */}
          <div className="flex justify-center gap-4 mb-8 flex-wrap">
            {heads.map((member) => renderMemberCard(member, "md"))}
          </div>

          {/* Connecting Line */}
          <div className="flex justify-center mb-8">
            <div className="w-32 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
          </div>

          {/* Core Members */}
          <div className="flex justify-center gap-4 flex-wrap">
            {core.map((member) => renderMemberCard(member, "sm"))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChapterTeam;
