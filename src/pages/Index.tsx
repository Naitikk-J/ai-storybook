import CoverPage from "@/components/CoverPage";
import ChapterAboutAI from "@/components/ChapterAboutAI";
import ChapterEvents from "@/components/ChapterEvents";
import ChapterDiscussions from "@/components/ChapterDiscussions";
import ChapterTeam from "@/components/ChapterTeam";
import ChapterDevelopers from "@/components/ChapterDevelopers";
import ChapterContact from "@/components/ChapterContact";
import Footer from "@/components/Footer";
import AIChatbot from "@/components/AIChatbot";
import TableOfContents from "@/components/TableOfContents";
import { SparklesCore } from "@/components/ui/sparkles";
import { ThemeToggle } from "@/components/ThemeToggle";

import { useEffect } from "react";

const Index = () => {
    useEffect(() => {
        document.title = "The AI Club MITS| Where Curiosity Meets Intelligence";
        const metaDescription = document.querySelector("meta[name='description']");
        if (metaDescription) {
            metaDescription.setAttribute(
                "content",
                "Join AI Club, a magical gathering of students passionate about Artificial Intelligence. Explore workshops, hackathons, and discussions that shape the future of AI."
            );
        } else {
            const newMeta = document.createElement("meta");
            newMeta.name = "description";
            newMeta.content = "Join AI Club, a magical gathering of students passionate about Artificial Intelligence. Explore workshops, hackathons, and discussions that shape the future of AI.";
            document.head.appendChild(newMeta);
        }
    }, []);

    return (
        <main className="relative w-full">
            {/* Sparkles Background */}
            <div className="fixed inset-0 w-full h-screen z-0 pointer-events-none">
                <SparklesCore
                    id="tsparticles-background"
                    background="transparent"
                    minSize={0.6}
                    maxSize={1.4}
                    particleDensity={100}
                    className="w-full h-full"
                    particleColor="#FFFFFF"
                    speed={1}
                />
            </div>

            {/* Content Wrapper */}
            <div className="relative z-10">
                {/* Theme Toggle */}
                <ThemeToggle />

                {/* Table of Contents Sidebar */}
                <TableOfContents />

                {/* Storybook Sections */}
                <section id="cover">
                    <CoverPage />
                </section>
                <section id="about-ai">
                    <ChapterAboutAI />
                </section>
                <section id="events">
                    <ChapterEvents />
                </section>
                <section id="discussions">
                    <ChapterDiscussions />
                </section>
                <section id="team">
                    <ChapterTeam />
                </section>
                <section id="developers">
                    <ChapterDevelopers />
                </section>
                <section id="contact">
                    <ChapterContact />
                </section>
                <Footer />

                {/* Floating AI Chatbot */}
                <AIChatbot />
            </div>
        </main>
    );
};

export default Index;
