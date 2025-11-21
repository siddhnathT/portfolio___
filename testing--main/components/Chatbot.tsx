import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { PERSONAL_INFO, SKILLS, PROJECTS, EXPERIENCE, EDUCATION, CERTIFICATIONS, RESEARCH_INTERESTS, PERSONAL_INTERESTS, QA_DATASET } from '../constants';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi! I'm Siddhnath's AI Assistant. I've been trained on his entire portfolio. Ask me about his research, projects, experience, or interests!",
      sender: 'ai',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping, isOpen]);

  const calculateScore = (text: string, keywords: string[]): number => {
    const lowerText = text.toLowerCase();
    return keywords.reduce((score, keyword) => {
      return lowerText.includes(keyword.toLowerCase()) ? score + 1 : score;
    }, 0);
  };

  const generateResponse = (query: string): string => {
    const lowerQuery = query.toLowerCase();

    // 0. Check QA Dataset (Exact/High Match)
    for (const qa of QA_DATASET) {
      if (qa.questions.some(q => lowerQuery.includes(q))) {
        return qa.answer;
      }
    }

    // 1. Check for specific Projects (Deep Dive)
    const matchedProject = PROJECTS.find(p =>
      lowerQuery.includes(p.title.toLowerCase()) ||
      calculateScore(lowerQuery, p.techStack || []) >= 2
    );
    if (matchedProject) {
      return `That's a great project! "**${matchedProject.title}**" (${matchedProject.period}). \n\n${matchedProject.description.join(' ')} \n\nIt was built using: ${(matchedProject.techStack || []).join(', ')}.`;
    }

    // 2. Check for specific Experience/Companies
    const matchedExperience = EXPERIENCE.find(e =>
      lowerQuery.includes(e.company.toLowerCase()) ||
      lowerQuery.includes(e.title.toLowerCase())
    );
    if (matchedExperience) {
      return `At **${matchedExperience.company}** (${matchedExperience.period}), Siddhnath worked as a ${matchedExperience.title}. \n\nHe ${matchedExperience.description[0].toLowerCase()} and utilized skills like ${(matchedExperience.skills || []).join(', ')}.`;
    }

    // 3. Research Interests
    if (calculateScore(lowerQuery, ['research', 'interest', 'future', 'study']) > 0) {
      return `Siddhnath is deeply interested in: \n- ${RESEARCH_INTERESTS.join('\n- ')}\n\nHe aims to bridge the gap between hardware and software in these fields.`;
    }

    // 4. Personal Interests / Hobbies
    if (calculateScore(lowerQuery, ['hobby', 'hobbies', 'fun', 'personal', 'like to do', 'free time']) > 0) {
      return `When he's not coding, Siddhnath enjoys: ${PERSONAL_INTERESTS.join(', ')}. He's also an avid chess player!`;
    }

    // 5. Education
    if (calculateScore(lowerQuery, ['education', 'study', 'university', 'college', 'degree', 'master', 'bachelor']) > 0) {
      return `He is currently pursuing a **${EDUCATION[0].degree}** at ${EDUCATION[0].institution}. \n\nPreviously, he completed his ${EDUCATION[1].degree} at ${EDUCATION[1].institution}.`;
    }

    // 6. Certifications
    if (calculateScore(lowerQuery, ['certification', 'certificate', 'badge', 'course']) > 0) {
      return `He holds several certifications, including: \n- ${CERTIFICATIONS.map(c => c.title).join('\n- ')}. \n\nNotably, he has Google Cloud Skill Badges for Agentic AI!`;
    }

    // 7. Skills (General)
    if (calculateScore(lowerQuery, ['skill', 'stack', 'tech', 'language', 'program']) > 0) {
      const topSkills = SKILLS.slice(0, 3).map(s => s.items.slice(0, 4).join(', ')).join(', ');
      return `Siddhnath has a diverse skill set including: ${topSkills}, and more. He specializes in AI, IoT, and Full-Stack development.`;
    }

    // 8. Contact / Hire
    if (calculateScore(lowerQuery, ['contact', 'email', 'hire', 'reach', 'number', 'phone']) > 0) {
      return `You can reach him via email at **${PERSONAL_INFO.email}** or connect on LinkedIn. He is currently based in ${PERSONAL_INFO.location} and is Open to Work!`;
    }

    // 9. Identity / Greeting
    if (calculateScore(lowerQuery, ['who are you', 'what are you', 'bot', 'ai']) > 0) {
      return "I am a custom-built AI assistant for this portfolio. I was trained on Siddhnath's professional data to help answer your questions instantly!";
    }

    if (calculateScore(lowerQuery, ['hi', 'hello', 'hey', 'greetings']) > 0) {
      return "Hello! I'm ready to answer questions about Siddhnath's work, research, or skills. What would you like to know?";
    }

    // Default
    return `I'm not sure about that, but please feel free to contact Siddhnath directly at ${PERSONAL_INFO.email}.`;
  };

  const handleSend = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI processing time (slightly variable for realism)
    setTimeout(() => {
      const responseText = generateResponse(userMessage.text);
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: responseText,
        sender: 'ai',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);
    }, 800 + Math.random() * 800);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <>
      {/* Toggle Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 p-4 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 text-white shadow-lg shadow-blue-600/30 flex items-center justify-center"
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 z-50 w-[350px] h-[500px] max-h-[80vh] bg-slate-900/95 backdrop-blur-xl border border-slate-700 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 bg-slate-800/50 border-b border-slate-700 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-violet-500 flex items-center justify-center">
                <Bot size={24} className="text-white" />
              </div>
              <div>
                <h3 className="font-bold text-white flex items-center gap-2">
                  Siddhnath AI <Sparkles size={14} className="text-yellow-400" />
                </h3>
                <p className="text-xs text-slate-400 flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                  Trained & Online
                </p>
              </div>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap ${msg.sender === 'user'
                      ? 'bg-blue-600 text-white rounded-br-none'
                      : 'bg-slate-800 text-slate-200 rounded-bl-none border border-slate-700'
                      }`}
                  >
                    {/* Simple bold parsing for **text** */}
                    {msg.text.split(/(\*\*.*?\*\*)/).map((part, i) =>
                      part.startsWith('**') && part.endsWith('**') ?
                        <strong key={i} className="text-white font-bold">{part.slice(2, -2)}</strong> :
                        part
                    )}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-slate-800 p-3 rounded-2xl rounded-bl-none border border-slate-700 flex gap-1">
                    <span className="w-2 h-2 rounded-full bg-slate-500 animate-bounce"></span>
                    <span className="w-2 h-2 rounded-full bg-slate-500 animate-bounce delay-100"></span>
                    <span className="w-2 h-2 rounded-full bg-slate-500 animate-bounce delay-200"></span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 bg-slate-800/30 border-t border-slate-700">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask about research, projects..."
                  className="flex-1 bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-2 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                />
                <button
                  onClick={handleSend}
                  disabled={!inputValue.trim() || isTyping}
                  className="p-2 rounded-xl bg-blue-600 text-white hover:bg-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <Send size={20} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;