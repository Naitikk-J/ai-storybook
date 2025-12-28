import ChapterDivider from "./ChapterDivider";
import { Calendar, MapPin, Clock, Stamp } from "lucide-react";

interface Event {
  id: number;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  status: "upcoming" | "completed";
}

const events: Event[] = [
  {
    id: 1,
    title: "Introduction to Machine Learning",
    description: "A beginner-friendly workshop exploring the fundamentals of ML algorithms and their real-world applications.",
    date: "January 15, 2025",
    time: "3:00 PM",
    location: "Seminar Hall B",
    status: "upcoming",
  },
  {
    id: 2,
    title: "AI Art Generation Workshop",
    description: "Learn to create stunning artwork using Stable Diffusion and other generative AI tools.",
    date: "January 22, 2025",
    time: "4:00 PM",
    location: "Computer Lab 3",
    status: "upcoming",
  },
  {
    id: 3,
    title: "Hackathon: Build with AI",
    description: "24-hour hackathon challenging teams to build innovative AI-powered solutions for campus problems.",
    date: "February 8-9, 2025",
    time: "9:00 AM",
    location: "Main Auditorium",
    status: "upcoming",
  },
  {
    id: 4,
    title: "Guest Lecture: Ethics in AI",
    description: "Industry expert discusses the moral implications and responsibilities in AI development.",
    date: "December 10, 2024",
    time: "2:00 PM",
    location: "Conference Room A",
    status: "completed",
  },
];

const ChapterEvents = () => {
  return (
    <section id="chapter-2" className="py-20 bg-parchment-dark paper-texture">
      <div className="container mx-auto px-6">
        <ChapterDivider chapterNumber={2} title="The Call to Innovate" />

        {/* Narrative Introduction */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="story-text text-lg md:text-xl leading-relaxed text-muted-foreground italic">
            "Every great adventure is marked by gatherings—moments when minds come together 
            to share knowledge, spark ideas, and forge lasting bonds. Here are the chapters 
            of our journey yet to unfold..."
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {events.map((event) => (
            <div
              key={event.id}
              className="relative bg-card rounded-lg p-6 card-shadow border border-border/50 page-curl overflow-hidden group hover:shadow-lg transition-shadow duration-300"
            >
              {/* Status Stamp */}
              <div
                className={`absolute top-4 right-4 stamp-badge ${
                  event.status === "upcoming"
                    ? "text-accent border-accent"
                    : "text-muted-foreground border-muted-foreground"
                }`}
              >
                <Stamp className="w-4 h-4 mr-1" />
                {event.status === "upcoming" ? "Upcoming" : "Completed"}
              </div>

              {/* Event Content */}
              <div className="pr-24">
                <h3 className="font-display text-xl md:text-2xl font-semibold text-foreground mb-3 group-hover:text-gold transition-colors">
                  {event.title}
                </h3>
                <p className="font-body text-muted-foreground leading-relaxed mb-4">
                  {event.description}
                </p>

                {/* Event Details */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4 text-gold" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4 text-gold" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4 text-gold" />
                    <span>{event.location}</span>
                  </div>
                </div>
              </div>

              {/* Decorative Corner */}
              <div className="absolute bottom-0 right-0 w-12 h-12 bg-gradient-to-tl from-muted to-transparent" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChapterEvents;
