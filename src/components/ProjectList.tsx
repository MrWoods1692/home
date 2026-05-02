import { PROJECTS } from "@/lib/data";
import { Github, ExternalLink, Hash } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/AppContext";
import { Badge } from "@/components/ui/badge";

export function ProjectList() {
  const { t } = useLanguage();
  const projectItems: any = t('projects.items');

  const getProjectDesc = (name: string, fallback: string) => {
    const keyMap: Record<string, string> = {
      "LangBot": "langbot",
      "Xmail Pro": "xmail",
      "Campux": "campux",
      "在线C++IDE": "cpp_ide",
      "云端图片储存平台": "img_cloud",
      "AI智能助手": "ai_assistant",
      "Hydro-OJ-IDE": "hydro_oj",
      "Free-one-api": "free_one_api",
      "个人主页": "personal_home"
    };
    const key = keyMap[name];
    return projectItems[key] || fallback;
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {PROJECTS.map((project, idx) => (
        <div key={idx} className="paper-3d-white flex flex-col h-full group overflow-hidden">
          <div className="p-8 flex-1 space-y-6">
            <div className="flex items-start justify-between">
              <h3 className="text-3xl font-hand-semibold group-hover:text-primary transition-colors">
                {project.name}
              </h3>
              <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Hash size={20} />
              </div>
            </div>
            
            <p className="text-muted-foreground leading-relaxed text-lg min-h-[80px]">
              {getProjectDesc(project.name, project.desc)}
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              {project.tags?.map((tag, i) => (
                <Badge key={i} variant="outline" className="hand-border bg-background/50 border-primary/20 text-xs py-0 h-6">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          <div className="p-6 bg-muted/20 border-t-2 border-primary/10 flex gap-4">
            {project.github && (
              <Button variant="outline" size="sm" asChild className="hand-border flex-1 h-11 bg-background hover:bg-primary hover:text-primary-foreground transition-all">
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" /> {t('projects.github')}
                </a>
              </Button>
            )}
            {project.site && (
              <Button variant="outline" size="sm" asChild className="hand-border flex-1 h-11 bg-background hover:bg-primary hover:text-primary-foreground transition-all">
                <a href={project.site} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" /> {t('projects.site')}
                </a>
              </Button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
