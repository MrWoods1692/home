import { useEffect, useState } from "react";
import { 
  PERSONAL_INFO, 
  ACADEMIC_EXPERIENCE, 
  AWARDS, 
  MUSIC_LIST 
} from "@/lib/data";
import { Timeline } from "@/components/Timeline";
import { HometownGallery } from "@/components/HometownGallery";
import { useLanguage } from "@/contexts/AppContext";
import { 
  Music, 
  Quote, 
  Users, 
  Star,
  FileText,
  MapPin
} from "lucide-react";

export default function About() {
  const { t } = useLanguage();
  const [age, setAge] = useState(0);

  useEffect(() => {
    const birthDate = new Date(PERSONAL_INFO.birthday);
    const today = new Date();
    let calculatedAge = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      calculatedAge--;
    }
    setAge(calculatedAge);
  }, []);

  return (
    <div className="min-h-screen pb-20 px-4 md:px-8 max-w-6xl mx-auto space-y-24 animate-in fade-in slide-in-from-bottom-10 duration-700">
      <h1 className="text-5xl text-center mt-10">{t('about.title')}</h1>

      <section className="grid grid-cols-1 gap-12">
        <div className="relative group max-w-2xl mx-auto w-full">
          <div className="sticky-note group-hover:rotate-0 transition-all duration-500">
            <div className="flex items-center gap-2 text-[#5d4037] dark:text-[#d7ccc8] opacity-60 mb-4">
              <Quote size={20} />
              <h3 className="text-xl font-hand-semibold">{t('about.motto')}</h3>
            </div>
            <div className="space-y-6">
              <p className="text-4xl md:text-5xl font-hand-semibold text-center py-4 leading-tight">
                "{t('about.motto_text')}"
              </p>
              <div className="h-px bg-[#5d4037]/20 dark:bg-[#d7ccc8]/20 w-3/4 mx-auto" />
              <p className="text-xl leading-relaxed text-justify opacity-90">
                {t('about.inspiration')}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-8">
          <h2 className="text-3xl flex items-center gap-3">
            <FileText /> {t('about.academic')}
          </h2>
          <Timeline items={t('about.academic_list') as any} />
        </div>
        <div className="space-y-8">
          <h2 className="text-3xl flex items-center gap-3">
            <Star /> {t('about.awards')}
          </h2>
          <Timeline items={t('about.awards_list') as any} />
        </div>
      </section>

      <section className="space-y-8">
        <h2 className="text-3xl flex items-center gap-3">
          <MapPin /> {t('about.hometown')}
        </h2>
        <HometownGallery />
      </section>

      <section className="space-y-8">
        <h2 className="text-3xl flex items-center gap-3">
          <Music /> {t('about.music')}
        </h2>
        <div className="paper-card hand-border bg-[#fdfdfd] dark:bg-neutral-900/50 p-8 shadow-inner overflow-hidden relative">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-2">
            {MUSIC_LIST.map((music, idx) => {
              const musicMap: Record<string, string> = {
                "唯一": "only",
                "天空没有极限": "sky",
                "桃花诺": "peach",
                "爱能克服远距离": "love_distance",
                "泡沫": "bubble",
                "倒数": "countdown",
                "回忆的沙漏": "sand",
                "红蔷薇白玫瑰": "rose",
                "喜欢你": "like",
                "句号": "fullstop",
                "光年之外": "lightyear",
                "再见": "goodbye",
                "雨爱": "rain",
                "跳楼机": "drop",
                "义勇军进行曲": "march"
              };
              const key = musicMap[music];
              return (
                <div key={idx} className="notebook-line flex items-center gap-3 py-3 group">
                  <span className="text-sm opacity-30 font-mono">{(idx + 1).toString().padStart(2, '0')}</span>
                  <span className="text-xl group-hover:text-primary transition-colors flex-1 truncate">
                    {key ? t(`common.music.${key}`) : music}
                  </span>
                  <Music className="opacity-0 group-hover:opacity-100 transition-opacity" size={16} />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl flex items-center gap-3">
          <Users /> {t('about.friends')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PERSONAL_INFO.friends.map((friend, idx) => {
            const bios: any = t('about.friend_bios');
            const friendKeyMap: Record<string, string> = {
              '秦俊言': 'qin',
              '陈科羽': 'chen',
              '莫可柔': 'moke',
              '...': 'm'
            };
            const friendKey = friendKeyMap[friend.name] || 'unknown';
            return (
              <div key={idx} className="paper-card hand-border flex items-start gap-6 group hover:bg-muted/30 transition-colors">
                <div className="w-20 h-20 rounded-full overflow-hidden shrink-0 border-2 border-primary">
                  <img src={friend.avatar} alt={friend.name} className="w-full h-full object-cover" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-hand-semibold">{friend.name}</h3>
                  <p className="text-muted-foreground leading-relaxed">{bios[friendKey] || friend.bio}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
