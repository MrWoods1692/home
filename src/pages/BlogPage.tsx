import { BLOGS } from "@/lib/data";
import { useLanguage } from "@/contexts/AppContext";
import { 
  Share2, ExternalLink
} from "lucide-react";
import WeiboIcon from "@/components/WeiboIcon";
import CSDNIcon from "@/components/CSDNIcon";
import ZhihuIcon from "@/components/ZhihuIcon";
import BilibiliIcon from "@/components/BilibiliIcon";
import LinuxDoIcon from "@/components/LinuxDoIcon";
import JuejinIcon from "@/components/JuejinIcon";
import QQSpaceIcon from "@/components/QQSpaceIcon";
import CnblogsIcon from "@/components/CnblogsIcon";

const iconMap: Record<string, string> = {
  Share2: "M7.5 4.5A2.5 2.5 0 1 1 10 7H5.5A2.5 2.5 0 0 0 3 9.5v1a2.5 2.5 0 0 0 2.5 2.5h5a2.5 2.5 0 0 0 2.5-2.5v-1",
  Mail: "M3 8l7.89 5.26a2 2 0 0 0 2.22 0L21 8M5 19h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2z",
  MessageCircle: "M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z",
  MessageSquare: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",
  Send: "M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z",
  Tv: "M2 16V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zM8 20h8",
  Terminal: "M4 17l6-6-6-6M12 19h8",
  Star: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z",
  FileText: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zM14 2v6h6M16 13H8M16 17H8M10 9H8",
  Hash: "M4 9h16M4 15h16M10 3L8 21M16 3l-2 18",
  Layout: "M3 3h7v7H3zM14 3h7v7h-7zM3 14h7v7H3zM14 14h7v7h-7z",
  Feather: "M17.5 6.5a4.5 4.5 0 0 0-9 0v9a4.5 4.5 0 0 0 9 0v-9zM2 22l4.5-4.5M17.5 6.5L22 2M7 7L2 2"
};

const blogStyle = [
  { bg: "bg-orange-50 dark:bg-orange-950/20", border: "border-orange-200 dark:border-orange-800/40", icon: "bg-orange-500 text-white", hover: "hover:border-orange-400 hover:shadow-orange-200/50 dark:hover:shadow-orange-900/30", badge: "bg-orange-500", name: "新浪微博" },
  { bg: "bg-emerald-50 dark:bg-emerald-950/20", border: "border-emerald-200 dark:border-emerald-800/40", icon: "bg-emerald-500 text-white", hover: "hover:border-emerald-400 hover:shadow-emerald-200/50 dark:hover:shadow-emerald-900/30", badge: "bg-emerald-500", name: "CSDN" },
  { bg: "bg-blue-50 dark:bg-blue-950/20", border: "border-blue-200 dark:border-blue-800/40", icon: "bg-blue-500 text-white", hover: "hover:border-blue-400 hover:shadow-blue-200/50 dark:hover:shadow-blue-900/30", badge: "bg-blue-500", name: "知乎" },
  { bg: "bg-pink-50 dark:bg-pink-950/20", border: "border-pink-200 dark:border-pink-800/40", icon: "bg-pink-500 text-white", hover: "hover:border-pink-400 hover:shadow-pink-200/50 dark:hover:shadow-pink-900/30", badge: "bg-pink-500", name: "哔哩哔哩" },
  { bg: "bg-cyan-50 dark:bg-cyan-950/20", border: "border-cyan-200 dark:border-cyan-800/40", icon: "bg-cyan-500 text-white", hover: "hover:border-cyan-400 hover:shadow-cyan-200/50 dark:hover:shadow-cyan-900/30", badge: "bg-cyan-500", name: "LinuxDo" },
  { bg: "bg-indigo-50 dark:bg-indigo-950/20", border: "border-indigo-200 dark:border-indigo-800/40", icon: "bg-indigo-500 text-white", hover: "hover:border-indigo-400 hover:shadow-indigo-200/50 dark:hover:shadow-indigo-900/30", badge: "bg-indigo-500", name: "掘金" },
  { bg: "bg-yellow-50 dark:bg-yellow-950/20", border: "border-yellow-200 dark:border-yellow-800/40", icon: "bg-yellow-500 text-white", hover: "hover:border-yellow-400 hover:shadow-yellow-200/50 dark:hover:shadow-yellow-900/30", badge: "bg-yellow-500", name: "QQ空间" },
  { bg: "bg-violet-50 dark:bg-violet-950/20", border: "border-violet-200 dark:border-violet-800/40", icon: "bg-violet-500 text-white", hover: "hover:border-violet-400 hover:shadow-violet-200/50 dark:hover:shadow-violet-900/30", badge: "bg-violet-500", name: "博客园" },
];

export default function BlogPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen pb-20 px-4 md:px-8 max-w-6xl mx-auto space-y-16 animate-in fade-in slide-in-from-bottom-10 duration-700">
      {/* 页面标题 */}
      <div className="text-center space-y-4 mt-10">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500/20 via-pink-500/20 to-purple-500/20 border border-orange-500/20 mb-2">
          <Share2 size={32} className="text-primary" />
        </div>
        <h1 className="text-5xl font-bold tracking-tight bg-gradient-to-r from-orange-600 via-pink-600 to-purple-600 dark:from-orange-400 dark:via-pink-400 dark:to-purple-400 bg-clip-text text-transparent">
          {t('blog.title')}
        </h1>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto">
          {t('blog.subtitle')}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {BLOGS.map((blog, idx) => {
          const style = blogStyle[idx % blogStyle.length];
          const isWeibo = blog.name === "微博";
          const isCSDN = blog.name === "CSDN";
          const isZhihu = blog.name === "知乎";
          const isBilibili = blog.name === "哔哩哔哩";
          const isLinuxDo = blog.name === "LinuxDo";
          const isJuejin = blog.name === "掘金";
          const isQQSpace = blog.name === "QQ空间";
          const isCnblogs = blog.name === "博客园";
          const pathData = iconMap[blog.icon] || iconMap.Share2;
          return (
            <a
              key={idx}
              href={blog.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative flex flex-col items-center justify-center gap-5 p-8 rounded-2xl border-2 ${style.bg} ${style.border} ${style.hover} shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 overflow-hidden`}
            >
              {/* 装饰性背景圆 */}
              <div className={`absolute -top-10 -right-10 w-28 h-28 rounded-full ${style.badge} opacity-[0.08] group-hover:opacity-[0.15] transition-opacity duration-500`} />
              
              {/* 图标 */}
              <div className={`relative w-16 h-16 rounded-2xl ${style.icon} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                {isWeibo ? (
                  <WeiboIcon size={26} className="text-white" />
                ) : isCSDN ? (
                  <CSDNIcon size={26} className="text-white" />
                ) : isZhihu ? (
                  <ZhihuIcon size={26} className="text-white" />
                ) : isBilibili ? (
                  <BilibiliIcon size={26} className="text-white" />
                ) : isLinuxDo ? (
                  <LinuxDoIcon size={26} className="text-white" />
                ) : isJuejin ? (
                  <JuejinIcon size={26} className="text-white" />
                ) : isQQSpace ? (
                  <QQSpaceIcon size={26} className="text-white" />
                ) : isCnblogs ? (
                  <CnblogsIcon size={26} className="text-white" />
                ) : (
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d={pathData} />
                  </svg>
                )}
              </div>

              {/* 平台名称 */}
              <div className="text-center space-y-2 relative z-10">
                <span className="text-2xl font-bold tracking-tight block group-hover:translate-y-[-2px] transition-transform duration-300">
                  {blog.name}
                </span>
                <div className="flex items-center justify-center gap-1.5">
                  <div className={`h-1 w-8 rounded-full ${style.badge} opacity-40 group-hover:w-12 transition-all duration-300`} />
                  <span className="text-xs text-muted-foreground/60 font-medium tracking-wider uppercase">
                    {t('common.visit')}
                  </span>
                  <ExternalLink size={12} className="text-muted-foreground/40 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>

              {/* 悬停时右下角光晕 */}
              <div className={`absolute -bottom-8 -right-8 w-20 h-20 rounded-full ${style.badge} opacity-0 group-hover:opacity-[0.06] blur-xl transition-opacity duration-500`} />
            </a>
          );
        })}
      </div>
    </div>
  );
}
