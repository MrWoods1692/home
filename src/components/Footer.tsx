import { useEffect, useState } from "react";
import { useLanguage } from "@/contexts/AppContext";

const START_DATE = new Date("2026-02-01");

export function Footer() {
  const { language } = useLanguage();
  const [runningTime, setRunningTime] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const diff = now.getTime() - START_DATE.getTime();
      
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      let timeStr = "";
      if (language === "en") {
        timeStr = `${days}d ${hours}h ${minutes}m ${seconds}s`;
      } else {
        timeStr = `${days}天 ${hours}时 ${minutes}分 ${seconds}秒`;
      }
      setRunningTime(timeStr);
    }, 1000);

    return () => clearInterval(timer);
  }, [language]);

  return (
    <footer className="w-full py-16 px-4 mt-32 relative overflow-hidden">
      {/* Decorative notebook background for footer */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://img.cdn1.vip/i/69f5701e9257a_1777692702.webp')]" />
      
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-10 text-center relative z-10">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full items-start">
          {/* Left: Copyright Stamp */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="hand-stamp scale-125">
              EST. 2026 • FOREST SPACE
            </div>
            <p className="font-hand-semibold text-lg opacity-70 mt-2">
              © {new Date().getFullYear()} [Your Name]
            </p>
          </div>

          {/* Middle: Running Time Entry */}
          <div className="flex flex-col items-center gap-2 p-6 paper-card hand-border bg-white/50 dark:bg-neutral-900/50 rotate-1 shadow-xl">
            <p className="text-sm uppercase tracking-widest opacity-40 font-hand-semibold">
              {language === 'en' ? 'Online' : '在线'}
            </p>
            <p className="text-2xl font-hand-semibold text-primary">
              {runningTime}
            </p>
            <div className="flex items-center gap-2 mt-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.5)]" />
              <span className="text-xs opacity-50">{language === 'en' ? 'System Stable' : '系统运行正常'}</span>
            </div>
          </div>

          {/* Right: Quick Links as scribbled notes */}
          <div className="flex flex-col items-center md:items-end gap-3 font-hand-semibold opacity-70">
            <p className="text-xs uppercase opacity-40 mb-2">{language === 'en' ? 'Author?' : '作者？'}</p>
            {['------', 'Power by Mr.C.Woods', '------'].map((link) => (
              <span key={link} className="hover:text-primary cursor-pointer transition-all hover:translate-x-[-4px] notebook-line pb-1">
                {link}
              </span>
            ))}
          </div>
        </div>

        <div className="pt-10 flex flex-col items-center gap-4">
          <div className="hand-divider w-24 opacity-20" />
          <p className="text-[10px] uppercase tracking-[0.4em] opacity-30 font-hand-semibold">
            Handwritten Notebook Aesthetic • Vite & React
          </p>
        </div>
      </div>

      {/* Sketchy decoration at the very corner */}
      <div className="footer-sketch">
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" className="text-primary/10">
          <path d="M10 10 Q 30 5 50 15 T 55 50 Q 35 55 10 45 T 10 10" stroke="currentColor" strokeWidth="1" />
          <path d="M15 15 L 45 45 M 45 15 L 15 45" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
        </svg>
      </div>
    </footer>
  );
}
