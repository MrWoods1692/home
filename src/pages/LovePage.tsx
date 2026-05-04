import { PERSONAL_INFO } from "@/lib/data";
import { useLanguage } from "@/contexts/AppContext";
import { Heart } from "lucide-react";

export default function LovePage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-24 relative overflow-hidden bg-[#fdfaf6] dark:bg-neutral-950">
      {/* Background Scrapbook Elements */}
      <div className="absolute top-20 left-10 text-primary/5 -rotate-12 select-none pointer-events-none">
        <Heart size={300} fill="currentColor" />
      </div>
      <div className="absolute bottom-10 right-10 text-primary/5 rotate-12 select-none pointer-events-none">
        <Heart size={250} fill="currentColor" />
      </div>
      <div className="coffee-stain top-[15%] left-[10%] opacity-20" />
      <div className="coffee-stain bottom-[20%] right-[15%] opacity-10 scale-150" />

      {/* Main Content Card - A scrapbook page */}
      <div className="w-full max-w-3xl relative z-10 animate-in fade-in slide-in-from-bottom-8 duration-1000">
        {/* Binder Holes decoration */}
        <div className="absolute left-[-20px] top-1/2 -translate-y-1/2 flex flex-col gap-8 opacity-20">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="w-6 h-6 rounded-full bg-black dark:bg-white border-4 border-neutral-300 dark:border-neutral-700" />
          ))}
        </div>

        <div className="paper-card hand-border bg-white dark:bg-neutral-900 shadow-[20px_20px_0px_rgba(0,0,0,0.05)] p-12 md:p-16 space-y-16 relative overflow-hidden">
          {/* Paper Texture Overlay */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/recycled-paper.png')]" />
          
          {/* Header with Washi Tape */}
          <div className="relative inline-block mx-auto w-full">
            <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-40 h-10 bg-primary/10 rotate-[-2deg] z-20" style={{
              maskImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'100\' height=\'30\'%3E%3Cpath d=\'M0 5 L10 2 L20 7 L30 3 L40 8 L50 4 L60 9 L70 5 L80 10 L90 6 L100 11 L100 25 L90 20 L80 28 L70 22 L60 27 L50 21 L40 29 L30 23 L20 28 L10 22 L0 27 Z\' /%3E%3C/svg%3E")'
            }} />
            <h1 className="text-6xl md:text-7xl font-hand-semibold flex items-center justify-center gap-6">
              <Heart size={64} className="text-destructive fill-destructive animate-pulse" />
              <span className="relative">
                {t('love.title')}
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 25 0 50 5 T 100 5" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.3" />
                </svg>
              </span>
            </h1>
          </div>

          {/* Status Text - handwritten note look */}
          <div className="relative px-8">
            <div className="absolute top-0 left-0 w-2 h-full bg-primary/5 rounded-full" />
            <div className="sticky-note mx-auto max-w-md shadow-2xl">
              <p className="text-3xl md:text-4xl leading-tight font-hand-semibold text-center py-4">
                {t('love.status')}
              </p>
              <div className="flex justify-end mt-2">
                <Heart size={20} className="text-destructive/40 fill-destructive/20" />
              </div>
            </div>
          </div>

          {/* Photos Area */}
          <div className="flex flex-col md:flex-row items-center justify-around gap-12 py-10">
            <div className="flex flex-col items-center gap-4">
              <div className="scrapbook-photo -rotate-6 hover:rotate-0 transition-transform duration-500">
                <div className="w-36 h-44 overflow-hidden bg-neutral-100 flex flex-col">
                  <img src={PERSONAL_INFO.avatars[0]} alt="[人物1姓名]" className="w-full h-36 object-cover" />
                  <div className="flex-1 flex items-center justify-center font-hand-semibold text-sm opacity-60">
                    [你的名字]
                  </div>
                </div>
                {/* Small washi tape on corner */}
                <div className="absolute -top-4 -right-4 w-12 h-6 bg-blue-500/20 rotate-45" />
              </div>
            </div>

            <div className="relative group">
              <Heart size={80} className="text-destructive fill-destructive animate-float" />
              <div className="absolute inset-0 bg-destructive blur-2xl opacity-10 animate-pulse" />
            </div>

            <div className="flex flex-col items-center gap-4">
              <div className="scrapbook-photo rotate-6 hover:rotate-0 transition-transform duration-500">
                <div className="w-36 h-44 overflow-hidden bg-neutral-100 flex flex-col">
                  <img src="[在此处填写头像URL]" alt="[人物2姓名]" className="w-full h-36 object-cover" />
                  <div className="flex-1 flex items-center justify-center font-hand-semibold text-sm opacity-60">
                    [你对象的名字]
                  </div>
                </div>
                {/* Small washi tape on corner */}
                <div className="absolute -top-4 -left-4 w-12 h-6 bg-pink-500/20 -rotate-45" />
              </div>
            </div>
          </div>

          {/* Footer Decoration */}
          <div className="pt-12 flex items-center justify-center gap-4 opacity-30">
            <div className="h-px w-20 bg-primary" />
            <span className="text-xs uppercase tracking-[0.3em] font-hand-semibold">Memory Lane</span>
            <div className="h-px w-20 bg-primary" />
          </div>
        </div>
      </div>
    </div>
  );
}
