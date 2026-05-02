import { BLOGS } from "@/lib/data";
import { useLanguage } from "@/contexts/AppContext";
import { 
  Share2,
  Mail,
  MessageCircle,
  MessageSquare,
  Send,
  Tv,
  Terminal,
  Star,
  FileText,
  Hash,
  Layout
} from "lucide-react";

const iconMap: Record<string, any> = {
  Mail, MessageCircle, MessageSquare, Send, Share2, Tv, Terminal, Star, FileText, Hash, Layout
};

export default function BlogPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen pb-20 px-4 md:px-8 max-w-6xl mx-auto space-y-12 animate-in fade-in slide-in-from-bottom-10 duration-700">
      <h1 className="text-5xl text-center mt-10">{t('blog.title')}</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {BLOGS.map((blog, idx) => {
          const Icon = iconMap[blog.icon] || Share2;
          return (
            <a 
              key={idx} 
              href={blog.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="paper-3d-white flex flex-col items-center justify-center gap-6 hover:bg-primary hover:text-primary-foreground transition-all group p-12 text-center"
            >
              <div className="w-20 h-20 rounded-2xl bg-primary/5 flex items-center justify-center group-hover:bg-primary-foreground group-hover:text-primary transition-all rotate-3 group-hover:rotate-0 shadow-sm">
                <Icon size={40} />
              </div>
              <div className="space-y-2">
                <span className="text-3xl font-hand-semibold block">{blog.name}</span>
                <div className="w-12 h-1 bg-primary/20 mx-auto rounded-full group-hover:bg-primary-foreground/40" />
              </div>
              <p className="text-sm opacity-0 group-hover:opacity-100 transition-opacity font-hand-semibold">
                {t('common.visit')}
              </p>
            </a>
          );
        })}
      </div>
    </div>
  );
}
