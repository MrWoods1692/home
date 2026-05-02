import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useLanguage, useTheme } from "@/contexts/AppContext";
import { 
  Sun, 
  Moon, 
  Monitor,
  Globe,
  Menu,
  ChevronRight,
  ArrowRight
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

const navItems = [
  { path: "/", labelKey: "nav.home" },
  { path: "/about", labelKey: "nav.about" },
  { path: "/skills", labelKey: "nav.skills" },
  { path: "/projects", labelKey: "nav.projects" },
  { path: "/blog", labelKey: "nav.blog" },
  { path: "/contact", labelKey: "nav.contact" },
  { path: "/love", labelKey: "nav.love" },
];

export function Navbar() {
  const { t, setLanguage } = useLanguage();
  const { theme, setTheme } = useTheme();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`dynamic-island ${isScrolled ? "dynamic-island-compact" : "dynamic-island-expanded"} bg-neutral-900 dark:bg-black border-2 border-white/20 shadow-2xl`}>
      {/* Brand & All Controls inside the same pill */}
      <div className="flex items-center gap-2 sm:gap-4">
        {/* Left: Brand */}
        <div className="flex items-center gap-2 pr-2 sm:pr-4 border-r border-white/10 shrink-0">
          <div className="w-6 h-6 sm:w-7 sm:h-7 bg-white text-black rounded-md flex items-center justify-center font-hand-semibold text-xs sm:text-sm border border-black/10 shadow-sm">
            F
          </div>
          <span className="text-sm sm:text-base font-hand-semibold tracking-tight whitespace-nowrap text-white">
            Forest Space
          </span>
        </div>

        {/* Right: Integrated Controls */}
        <div className="flex items-center gap-0.5 sm:gap-1">
          {/* Language Switch */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-lg hover:bg-white/10 text-white w-8 h-8 sm:w-9 sm:h-9">
                <Globe size={16} />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center" className="hand-border bg-neutral-900 text-white border-white/20 min-w-[130px] p-1.5 z-[1000]">
              <DropdownMenuItem onClick={() => setLanguage('zh-CN')} className="rounded-md hover:bg-white/10 focus:bg-white/10 focus:text-white cursor-pointer">简体中文</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setLanguage('zh-TW')} className="rounded-md hover:bg-white/10 focus:bg-white/10 focus:text-white cursor-pointer">繁體中文</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setLanguage('en')} className="rounded-md hover:bg-white/10 focus:bg-white/10 focus:text-white cursor-pointer">English</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Theme Switch */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-lg hover:bg-white/10 text-white w-8 h-8 sm:w-9 sm:h-9">
                {theme === 'light' ? <Sun size={16} /> : theme === 'dark' ? <Moon size={16} /> : <Monitor size={16} />}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center" className="hand-border bg-neutral-900 text-white border-white/20 min-w-[130px] p-1.5 z-[1000]">
              <DropdownMenuItem onClick={() => setTheme('light')} className="rounded-md hover:bg-white/10 focus:bg-white/10 focus:text-white cursor-pointer">
                <Sun className="mr-2 h-4 w-4" /> {t('common.light')}
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme('dark')} className="rounded-md hover:bg-white/10 focus:bg-white/10 focus:text-white cursor-pointer">
                <Moon className="mr-2 h-4 w-4" /> {t('common.dark')}
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme('system')} className="rounded-md hover:bg-white/10 focus:bg-white/10 focus:text-white cursor-pointer">
                <Monitor className="mr-2 h-4 w-4" /> {t('common.system')}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <div className="h-4 w-[1px] bg-white/10 mx-1" />

          {/* Navigation Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-lg hover:bg-white/10 text-white w-8 h-8 sm:w-9 sm:h-9">
                <Menu size={18} />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="hand-border bg-neutral-900 text-white border-white/20 w-60 p-2 space-y-1 z-[1000]">
              <div className="px-2 py-1 text-[10px] font-hand-semibold opacity-40 uppercase tracking-widest text-white/60">{t('common.menu') === 'Menu' ? 'Navigate' : '导航'}</div>
              <DropdownMenuSeparator className="bg-white/10" />
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <DropdownMenuItem key={item.path} asChild>
                    <Link
                      to={item.path}
                      className={`flex items-center justify-between w-full cursor-pointer rounded-md px-2.5 py-2 text-sm transition-all ${
                        isActive ? "bg-white text-black font-hand-semibold" : "hover:bg-white/10 focus:bg-white/10 focus:text-white"
                      }`}
                    >
                      <span>{t(item.labelKey)}</span>
                      {isActive ? <ChevronRight size={14} /> : <ArrowRight size={12} className="opacity-30" />}
                    </Link>
                  </DropdownMenuItem>
                );
              })}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
}
