import { useEffect, useState } from "react";
import { BASE_DATE, BASE_DURATION, SKILLS } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/contexts/AppContext";
import { 
  Code2, 
  Terminal, 
  Database, 
  Settings, 
  Monitor, 
  Wrench, 
  Layers,
  Clock
} from "lucide-react";

const categoryIconMap: Record<string, any> = {
  "frontend": Code2,
  "backend": Terminal,
  "client": Layers,
  "db": Database,
  "ops": Settings,
  "env": Monitor,
  "tools": Wrench
};

export function SkillsSection() {
  const [duration, setDuration] = useState(BASE_DURATION);
  const { t, language } = useLanguage();

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const diffMs = now.getTime() - BASE_DATE.getTime();
      const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
      
      let years = BASE_DURATION.years;
      let months = BASE_DURATION.months;
      let days = BASE_DURATION.days + diffDays;

      while (days >= 30) {
        days -= 30;
        months += 1;
      }
      while (months >= 12) {
        months -= 12;
        years += 1;
      }

      setDuration({ years, months, days });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const getCategoryInfo = (cat: string) => {
    const map: Record<string, string> = {
      "[技能类别1]": "frontend",
      "[技能类别2]": "backend",
      "[技能类别3]": "client",
      "[技能类别4]": "db",
      "[技能类别5]": "ops",
      "[技能类别6]": "env",
      "[技能类别7]": "tools"
    };
    const key = map[cat] || "tools";
    return {
      key,
      label: t(`skills.${key}`),
      Icon: categoryIconMap[key] || Wrench
    };
  };

  const unitMap: Record<string, {y: string, m: string, d: string}> = {
    'zh-CN': { y: '年', m: '月', d: '天' },
    'zh-TW': { y: '年', m: '月', d: '天' },
    'en': { y: ' Years', m: ' Months', d: ' Days' }
  };
  const units = unitMap[language] || unitMap['en'];

  return (
    <div className="space-y-12">
      <div className="paper-3d-black p-8 text-center space-y-4">
        <div className="flex justify-center">
          <Clock className="w-12 h-12 animate-spin-slow" />
        </div>
        <h2 className="text-3xl">{t('skills.duration')}</h2>
        <div className="text-4xl md:text-5xl font-hand-semibold tracking-wider">
          {duration.years}{units.y} {duration.months}{units.m} {duration.days}{units.d}
        </div>
        <p className="opacity-60 italic text-sm">Keep Learning, Keep Growing</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SKILLS.map((skill, idx) => {
          const { label, Icon } = getCategoryInfo(skill.category);
          return (
            <div key={idx} className="paper-3d-white p-6 space-y-4 group hover:-translate-y-2 transition-all">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Icon size={20} />
                </div>
                <h3 className="text-2xl">{label}</h3>
              </div>
              <div className="hand-divider opacity-10 !my-2" />
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item, i) => {
                  return (
                    <Badge key={i} variant="secondary" className="hand-border bg-transparent hover:bg-primary hover:text-primary-foreground transition-all px-3 py-1">
                      {t(`common.skills.[技能项${i + 1}]`)}
                    </Badge>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
