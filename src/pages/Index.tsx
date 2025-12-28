import CoverPage from "@/components/CoverPage";
import ChapterAboutAI from "@/components/ChapterAboutAI";
import ChapterEvents from "@/components/ChapterEvents";
import ChapterDiscussions from "@/components/ChapterDiscussions";
import ChapterTeam from "@/components/ChapterTeam";
import ChapterDevelopers from "@/components/ChapterDevelopers";
import ChapterContact from "@/components/ChapterContact";
import Footer from "@/components/Footer";
import AIChatbot from "@/components/AIChatbot";

const Index = () => {
  return (
    <main className="relative">
      {/* SEO Meta */}
      <title>The Story of AI Club | Where Curiosity Meets Intelligence</title>
      <meta
        name="description"
        content="Join AI Club, a magical gathering of students passionate about Artificial Intelligence. Explore workshops, hackathons, and discussions that shape the future of AI."
      />

      {/* Storybook Sections */}
      <CoverPage />
      <ChapterAboutAI />
      <ChapterEvents />
      <ChapterDiscussions />
      <ChapterTeam />
      <ChapterDevelopers />
      <ChapterContact />
      <Footer />

      {/* Floating AI Chatbot */}
      <AIChatbot />
    </main>
  );
};

export default Index;
