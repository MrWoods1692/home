import { PERSONAL_INFO } from "@/lib/data";
import { AvatarCard } from "@/components/AvatarCard";
import { useLanguage } from "@/contexts/AppContext";
import { ArrowRight, Sparkles, Book, Rocket, Coffee } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="min-h-[calc(100vh-5rem)] flex flex-col items-center px-4 md:px-8 max-w-6xl mx-auto space-y-20 py-10">
      {/* Hero Section */}
      <section className="flex flex-col items-center text-center space-y-12 animate-in fade-in zoom-in duration-1000 max-w-4xl">
        <AvatarCard />
        
        <div className="space-y-6">
          <h2 className="text-4xl md:text-6xl font-hand-semibold tracking-tight">{t('home.welcome')}</h2>
          <div className="paper-3d p-8 bg-muted/10 relative overflow-hidden group">
            <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary/5 rounded-full blur-xl" />
            <p className="text-xl md:text-2xl leading-relaxed italic text-muted-foreground relative z-10">
              "{t('home.bio')}"
            </p>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          <Button asChild size="lg" className="paper-3d-black h-16 px-10 text-xl hover:bg-primary/90">
            <Link to="/about">
              {t('nav.about')} <ArrowRight className="ml-2" />
            </Link>
          </Button>
          <Button variant="outline" asChild size="lg" className="paper-3d-white h-16 px-10 text-xl">
            <Link to="/projects">
              {t('nav.projects')}
            </Link>
          </Button>
        </div>
      </section>

      {/* Grid Highlights */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
        <div className="paper-3d-white p-8 space-y-4 hover:rotate-1 transition-transform">
          <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500">
            <Sparkles size={24} />
          </div>
          <h3 className="text-2xl font-hand-semibold">{t('home.recent_title')}</h3>
          <p className="text-muted-foreground">
            {t('home.recent_content')}
          </p>
          <ul className="text-sm space-y-2 pt-2">
            <li className="flex items-center gap-2">• {t('home.recent_item1')}</li>
            <li className="flex items-center gap-2">• {t('home.recent_item2')}</li>
          </ul>
        </div>

        <div className="paper-3d-white p-8 space-y-4 hover:-rotate-1 transition-transform bg-primary/5 border-dashed">
          <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-500">
            <Book size={24} />
          </div>
          <h3 className="text-2xl font-hand-semibold">{t('home.tech_title')}</h3>
          <div className="flex flex-wrap gap-2">
            {['React', 'Rust', 'Python', 'Docker', 'TypeScript'].map(tech => (
              <span key={tech} className="px-3 py-1 bg-background border border-primary/20 rounded-md text-sm font-hand-semibold">
                {tech}
              </span>
            ))}
          </div>
          <p className="text-sm text-muted-foreground pt-2">
            {t('home.tech_desc')}
          </p>
        </div>

        <div className="paper-3d-white p-8 space-y-4 hover:rotate-1 transition-transform">
          <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center text-green-500">
            <Rocket size={24} />
          </div>
          <h3 className="text-2xl font-hand-semibold">{t('home.future_title')}</h3>
          <p className="text-muted-foreground">
            {t('home.future_content')}
          </p>
          <div className="pt-4">
            <div className="w-full bg-muted h-2 rounded-full overflow-hidden">
              <div className="bg-primary h-full w-[15%]" />
            </div>
            <p className="text-[10px] mt-1 text-right opacity-50">{t('home.future_progress')}: 15%</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="w-full paper-3d-black p-12 text-center space-y-6">
        <div className="flex justify-center">
          <Coffee size={48} className="animate-bounce" />
        </div>
        <h2 className="text-3xl md:text-4xl font-hand-semibold">{t('home.cta_title')}</h2>
        <p className="max-w-2xl mx-auto opacity-80 text-lg">
          {t('home.cta_desc')}
        </p>
        <Button asChild variant="secondary" size="lg" className="rounded-xl h-14 px-8 text-xl text-primary font-hand-semibold">
          <Link to="/contact">
            {t('home.cta_button')}
          </Link>
        </Button>
      </section>
    </div>
  );
}
