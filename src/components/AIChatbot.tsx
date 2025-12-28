import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Bookmark, X, Send, Sparkles } from "lucide-react";

interface Message {
  id: number;
  text: string;
  isBot: boolean;
}

const quickReplies = [
  "What is AI Club?",
  "Upcoming events",
  "How to join?",
  "Meet the team",
];

const botResponses: Record<string, string> = {
  "what is ai club?":
    "Ah, a curious soul! AI Club is a magical gathering of students passionate about Artificial Intelligence. We explore, learn, and create together—turning dreams of intelligent machines into reality!",
  "upcoming events":
    "Let me check the scrolls... 📜 We have an Introduction to ML workshop on January 15th, an AI Art Generation session on the 22nd, and our grand Hackathon in February! Exciting times ahead!",
  "how to join?":
    "Joining our fellowship is simple, dear friend! Just scroll down to Chapter 6 and write us a letter. We welcome all who are curious about the wonders of AI!",
  "meet the team":
    "Our guardians await your introduction! Scroll to Chapter 4 to meet the wise mentors and dedicated leaders who guide our journey. Dr. Sarah Mitchell leads as Faculty Coordinator!",
  default:
    "Hmm, that's an interesting query! I'm but a humble bookmark, still learning the ways of conversation. Perhaps try asking about our club, events, or how to join?",
};

const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Greetings, traveler! 📖 I'm your magical bookmark companion. How may I assist you on your journey through the Story of AI Club?",
      isBot: true,
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (text: string) => {
    if (!text.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: text.trim(),
      isBot: false,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    // Simulate typing delay
    await new Promise((resolve) => setTimeout(resolve, 1000 + Math.random() * 1000));

    const lowerText = text.toLowerCase().trim();
    let response = botResponses.default;

    for (const [key, value] of Object.entries(botResponses)) {
      if (key !== "default" && lowerText.includes(key.replace("?", ""))) {
        response = value;
        break;
      }
    }

    const botMessage: Message = {
      id: messages.length + 2,
      text: response,
      isBot: true,
    };

    setIsTyping(false);
    setMessages((prev) => [...prev, botMessage]);
  };

  const handleQuickReply = (reply: string) => {
    handleSend(reply);
  };

  return (
    <div className="bookmark-chat">
      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-80 md:w-96 bg-card rounded-2xl shadow-2xl border border-border overflow-hidden animate-scale-in">
          {/* Header */}
          <div className="bg-primary p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center">
                <Bookmark className="w-5 h-5 text-ink" />
              </div>
              <div>
                <h3 className="font-display text-sm font-semibold text-primary-foreground">
                  Magic Bookmark
                </h3>
                <p className="text-xs text-primary-foreground/70">
                  Your story guide
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="w-8 h-8 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
            >
              <X className="w-4 h-4 text-primary-foreground" />
            </button>
          </div>

          {/* Messages */}
          <div className="h-72 overflow-y-auto p-4 space-y-4 bg-muted/50">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.isBot ? "justify-start" : "justify-end"}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-3 ${
                    msg.isBot
                      ? "bg-card rounded-bl-none border border-border"
                      : "bg-primary text-primary-foreground rounded-br-none"
                  }`}
                >
                  <p className="text-sm font-body">{msg.text}</p>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-card rounded-2xl rounded-bl-none px-4 py-3 border border-border">
                  <div className="flex gap-1">
                    <span className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" />
                    <span className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce animate-delay-100" />
                    <span className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce animate-delay-200" />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Replies */}
          <div className="p-3 border-t border-border bg-muted/50 flex flex-wrap gap-2">
            {quickReplies.map((reply) => (
              <button
                key={reply}
                onClick={() => handleQuickReply(reply)}
                className="text-xs px-3 py-1.5 bg-card rounded-full border border-border hover:border-gold hover:text-gold transition-colors font-body"
              >
                {reply}
              </button>
            ))}
          </div>

          {/* Input */}
          <div className="p-3 border-t border-border bg-card flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSend(input)}
              placeholder="Ask me anything..."
              className="flex-1 px-4 py-2 bg-muted rounded-full text-sm font-body focus:outline-none focus:ring-2 focus:ring-gold/50"
            />
            <Button
              size="icon"
              variant="story"
              onClick={() => handleSend(input)}
              className="rounded-full w-10 h-10"
            >
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-16 h-16 rounded-full bg-gold flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 ${
          isOpen ? "rotate-12" : "animate-bounce-gentle"
        }`}
        aria-label="Open chat"
      >
        {isOpen ? (
          <X className="w-6 h-6 text-ink" />
        ) : (
          <>
            <Bookmark className="w-7 h-7 text-ink" />
            <Sparkles className="absolute -top-1 -right-1 w-5 h-5 text-gold-light animate-sparkle" />
          </>
        )}
      </button>
    </div>
  );
};

export default AIChatbot;
