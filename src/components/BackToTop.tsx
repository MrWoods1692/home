import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export function BackToTop() {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = docHeight > 0 ? Math.min(scrollTop / docHeight, 1) : 0;

      setProgress(scrollProgress);
      setVisible(scrollTop > 300);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const size = 48;
  const strokeWidth = 3.5;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference * (1 - progress);

  return (
    <button
      onClick={scrollToTop}
      aria-label="返回顶部"
      className={`fixed bottom-8 right-8 z-50 flex items-center justify-center transition-all duration-500 w-12 h-12 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      {/* 圆形背景 */}
      <div className="absolute inset-0 rounded-full bg-background/95 backdrop-blur-sm shadow-lg border border-border/80" />
      {/* 内圈遮罩 */}
      <div className="absolute inset-[3px] rounded-full bg-background" />
      {/* 彩色环形进度条 */}
      <svg
        width={size}
        height={size}
        className="absolute -rotate-90"
        viewBox={`0 0 ${size} ${size}`}
      >
        <defs>
          <linearGradient id="rainbow-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ff6b6b" />
            <stop offset="20%" stopColor="#feca57" />
            <stop offset="40%" stopColor="#48dbfb" />
            <stop offset="60%" stopColor="#ff9ff3" />
            <stop offset="80%" stopColor="#54a0ff" />
            <stop offset="100%" stopColor="#5f27cd" />
          </linearGradient>
        </defs>
        {/* 背景圆环 */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          className="text-muted/20"
        />
        {/* 进度圆环 */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="url(#rainbow-gradient)"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          className="transition-all duration-200"
        />
      </svg>
      {/* 内部图标 */}
      <div className="absolute inset-0 flex items-center justify-center">
        <ArrowUp size={18} className="text-muted-foreground" />
      </div>
    </button>
  );
}
