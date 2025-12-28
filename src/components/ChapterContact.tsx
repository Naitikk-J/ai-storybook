import { useState } from "react";
import ChapterDivider from "./ChapterDivider";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Send, Feather, Mail, User, MessageSquare } from "lucide-react";

const ChapterContact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Letter Sent!",
      description: "Your message has been delivered. We'll write back soon!",
    });

    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="chapter-6" className="py-20">
      <div className="container mx-auto px-6">
        <ChapterDivider chapterNumber={6} title="Write Your Chapter" />

        {/* Narrative Introduction */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="story-text text-lg md:text-xl leading-relaxed text-muted-foreground italic">
            "Every story awaits new characters. If you wish to join our tale, 
            pen your thoughts below and send them our way..."
          </p>
        </div>

        {/* Letter Form */}
        <div className="max-w-2xl mx-auto">
          <div className="relative bg-card rounded-xl p-8 md:p-12 card-shadow border border-border/50">
            {/* Letter Header Decoration */}
            <div className="absolute -top-6 left-1/2 -translate-x-1/2">
              <div className="w-12 h-12 rounded-full bg-destructive flex items-center justify-center shadow-lg">
                <Feather className="w-6 h-6 text-destructive-foreground" />
              </div>
            </div>

            {/* Decorative Lines */}
            <div className="absolute top-6 left-6 w-20 h-px bg-border" />
            <div className="absolute top-6 right-6 w-20 h-px bg-border" />

            <form onSubmit={handleSubmit} className="space-y-8 pt-4">
              {/* Name Field */}
              <div className="relative">
                <label
                  htmlFor="name"
                  className="block font-display text-sm text-muted-foreground mb-2"
                >
                  Dear AI Club,
                </label>
                <div className="relative">
                  <User className="absolute left-0 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="My name is..."
                    required
                    className="letter-input pl-8"
                  />
                </div>
              </div>

              {/* Email Field */}
              <div className="relative">
                <label
                  htmlFor="email"
                  className="block font-display text-sm text-muted-foreground mb-2"
                >
                  You can reach me at
                </label>
                <div className="relative">
                  <Mail className="absolute left-0 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                    className="letter-input pl-8"
                  />
                </div>
              </div>

              {/* Message Field */}
              <div className="relative">
                <label
                  htmlFor="message"
                  className="block font-display text-sm text-muted-foreground mb-2"
                >
                  I wanted to say...
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-0 top-3 w-5 h-5 text-muted-foreground" />
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message here..."
                    required
                    rows={5}
                    className="letter-input pl-8 resize-none"
                  />
                </div>
              </div>

              {/* Signature */}
              <div className="text-right">
                <p className="font-display italic text-muted-foreground mb-4">
                  Sincerely yours,
                </p>
                <p className="font-display text-lg text-foreground">
                  {formData.name || "A Future Member"}
                </p>
              </div>

              {/* Submit Button */}
              <div className="flex justify-center pt-4">
                <Button
                  type="submit"
                  variant="story"
                  size="lg"
                  disabled={isSubmitting}
                  className="group"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                      Send the Letter
                    </>
                  )}
                </Button>
              </div>
            </form>

            {/* Wax Seal Decoration */}
            <div className="absolute -bottom-4 -right-4 w-16 h-16 rounded-full bg-destructive flex items-center justify-center shadow-lg transform rotate-12">
              <span className="font-display text-xl text-destructive-foreground font-bold">
                AI
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChapterContact;
