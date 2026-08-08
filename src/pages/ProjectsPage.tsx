import { ProjectList } from "@/components/ProjectList";
import { useLanguage } from "@/contexts/AppContext";
import { Code2 } from "lucide-react";

export default function ProjectsPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen pb-20 px-4 md:px-8 max-w-6xl mx-auto space-y-16 animate-in fade-in slide-in-from-bottom-10 duration-700">
      {/* 页面标题 */}
      <div className="text-center space-y-4 mt-10">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 border border-blue-500/20 mb-2">
          <Code2 size={32} className="text-primary" />
        </div>
        <h1 className="text-5xl font-bold tracking-tight bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
          {t('projects.title')}
        </h1>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto">
          {t('projects.items.personal_home')}
        </p>
      </div>
      
      <ProjectList />
    </div>
  );
}
