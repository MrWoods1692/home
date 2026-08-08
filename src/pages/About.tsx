import { useEffect, useState } from "react";
import { 
  PERSONAL_INFO, 
  ACADEMIC_EXPERIENCE, 
  AWARDS, 
} from "@/lib/data";
import { Timeline } from "@/components/Timeline";
import { HometownGallery } from "@/components/HometownGallery";
import { useLanguage } from "@/contexts/AppContext";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog";
import { 
  Quote, 
  Users, 
  Star,
  FileText,
  MapPin,
  ChevronDown
} from "lucide-react";

export default function About() {
  const { t } = useLanguage();
  const [showConfirm, setShowConfirm] = useState(false);
  const [showAcademic, setShowAcademic] = useState(true);
  const [showAwards, setShowAwards] = useState(true);
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
          <h2 className="text-3xl flex items-center gap-3 cursor-pointer select-none" onClick={() => setShowAcademic(!showAcademic)}>
            <FileText />
            <span>{t('about.academic')}</span>
            <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${showAcademic ? 'rotate-180' : ''}`} />
          </h2>
          {showAcademic && (
            <Timeline items={ACADEMIC_EXPERIENCE.map(exp => ({
              ...exp,
              stage: (() => {
                const stageMap: Record<string, string> = {
                  '幼儿园': 'preschool',
                  '小学': 'primary',
                  '初中': 'junior',
                  '高中': 'senior'
                };
                const key = stageMap[exp.stage];
                const translated = key ? t(`about.academic_stages.${key}`) : '';
                return translated && translated !== `about.academic_stages.${key}` ? translated : exp.stage;
              })()
            }))} />
          )}
        </div>
        <div className="space-y-8">
          <h2 className="text-3xl flex items-center gap-3 cursor-pointer select-none" onClick={() => setShowAwards(!showAwards)}>
            <Star />
            <span>{t('about.awards')}</span>
            <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${showAwards ? 'rotate-180' : ''}`} />
          </h2>
          {showAwards && (
            <Timeline items={AWARDS.map(aw => ({
              ...aw,
              organization: (() => {
                const orgMap: Record<string, string> = {
                  '中国计算机协会': 'ccf',
                  '活动': 'activity',
                  '桂林市教育局': 'guilinEdu',
                  '广西计算机协会': 'gxcf'
                };
                const key = orgMap[aw.organization];
                const translated = key ? t(`about.award_orgs.${key}`) : '';
                return translated && translated !== `about.award_orgs.${key}` ? translated : aw.organization;
              })()
            }))} />
          )}
        </div>
      </section>

      <section className="space-y-8">
        <h2 className="text-3xl flex items-center gap-3">
          <MapPin /> {t('about.hometown')}
        </h2>
        <HometownGallery />
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl flex items-center gap-3">
          <Users /> {t('about.friends')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PERSONAL_INFO.friends.map((friend, idx) => {
            const isQin = friend.name === '秦骏言';
            return (
              <div key={idx} className={`paper-card hand-border flex items-start gap-6 group hover:bg-muted/30 transition-colors ${isQin ? 'cursor-pointer' : ''}`} onClick={() => isQin && setShowConfirm(true)}>
                <div className="w-20 h-20 rounded-full overflow-hidden shrink-0 border-2 border-primary">
                  <img src={friend.avatar} alt={friend.name} className="w-full h-full object-cover" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-hand-semibold">{friend.name}</h3>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <AlertDialog open={showConfirm} onOpenChange={setShowConfirm}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>{t('about.alert_confirm')}</AlertDialogTitle>
            <AlertDialogDescription>
              {t('about.alert_message')}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>{t('about.alert_cancel')}</AlertDialogCancel>
            <AlertDialogAction onClick={() => { window.open('https://rockchin.top/', '_blank'); setShowConfirm(false); }}>
              {t('about.alert_confirm')}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
