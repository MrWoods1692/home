import { LucideIcon, School, GraduationCap, BookOpen, Trophy } from "lucide-react";

interface TimelineItemProps {
  date?: string;
  stage?: string;
  school?: string;
  title?: string;
  organization?: string;
  project?: string;
  icon?: string;
}

const icons: Record<string, any> = {
  School,
  GraduationCap,
  BookOpen,
  Trophy
};

export function Timeline({ items }: { items: TimelineItemProps[] }) {
  return (
    <div className="relative ml-4 space-y-16 py-8">
      {/* Hand-drawn vertical line */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary/10 rounded-full" style={{
        maskImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'4\' height=\'100\'%3E%3Cpath d=\'M2 0 Q 0 25 2 50 T 2 100\' fill=\'none\' stroke=\'black\' stroke-width=\'2\'/%3E%3C/svg%3E")',
        maskRepeat: 'repeat-y'
      }} />
      
      {items.map((item, idx) => {
        const Icon = icons[item.icon || "Trophy"] || Trophy;
        return (
          <div key={idx} className="relative pl-12 group">
            {/* Hand-sketched node */}
            <div className="absolute left-[-18px] top-0 w-10 h-10 rounded-full bg-card border-2 border-primary flex items-center justify-center z-10 group-hover:rotate-12 transition-transform shadow-md overflow-hidden">
              <Icon size={18} className="text-primary" />
              <div className="absolute inset-0 bg-primary/5 animate-pulse" />
            </div>

            <div className="relative group/card">
              {/* Date tag as a small note */}
              {item.date && (
                <div className="absolute -top-6 -left-4 bg-primary text-primary-foreground px-3 py-0.5 text-xs font-hand-semibold rotate-[-3deg] z-20 shadow-sm rounded-sm">
                  {item.date}
                </div>
              )}

              <div className="paper-card hand-border hover:shadow-2xl transition-all duration-300 group-hover/card:-translate-y-1 bg-white dark:bg-neutral-900 overflow-hidden">
                {/* Decoration tape */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-6 bg-primary/10 -translate-y-1/2 rotate-1 z-20 pointer-events-none opacity-0 group-hover/card:opacity-100 transition-opacity" style={{
                  maskImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'100\' height=\'40\'%3E%3Cpath d=\'M0 10 L10 5 L20 15 L30 8 L40 18 L50 10 L60 20 L70 12 L80 22 L90 15 L100 25 L100 35 L0 35 Z\' /%3E%3C/svg%3E")'
                }} />

                <div className="space-y-3">
                  {item.stage && (
                    <h3 className="text-2xl text-primary font-hand-semibold border-b border-primary/10 pb-1">{item.stage}</h3>
                  )}
                  {item.title && (
                    <h3 className="text-2xl text-primary font-hand-semibold border-b border-primary/10 pb-1">{item.title}</h3>
                  )}
                  
                  {item.school && (
                    <p className="text-xl opacity-80 leading-tight">{item.school}</p>
                  )}
                  {item.organization && (
                    <p className="text-muted-foreground italic text-sm">{item.organization}</p>
                  )}
                  
                  {item.project && (
                    <div className="mt-4 p-4 bg-muted/30 rounded-lg border-2 border-dashed border-primary/20 relative">
                      <div className="absolute -top-2 -right-2 text-primary/30">
                        <Trophy size={20} />
                      </div>
                      <p className="text-primary font-hand-semibold leading-snug">{item.project}</p>
                    </div>
                  )}
                </div>
              </div>
              
              {/* Bottom sketch line for shadow effect */}
              <div className="h-2 w-full bg-black/5 dark:bg-white/5 mt-2 rounded-full blur-sm -rotate-1 mx-2" />
            </div>
          </div>
        );
      })}
    </div>
  );
}
