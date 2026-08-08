import { SkillsSection } from "@/components/SkillsSection";
import { useLanguage } from "@/contexts/AppContext";
import { Terminal } from "lucide-react";

export default function SkillsPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen pb-20 px-4 md:px-8 max-w-6xl mx-auto space-y-12 animate-in fade-in slide-in-from-bottom-10 duration-700">
      <h1 className="text-5xl text-center mt-10">{t('skills.title')}</h1>
      
      <section className="space-y-8">
        <h2 className="text-3xl flex items-center gap-3">
          <Terminal /> {t('skills.title')}
        </h2>
        <SkillsSection />
      </section>
    </div>
  );
}
