import { PROJECTS } from "@/lib/data";
import { Github, ExternalLink, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/AppContext";
import { Badge } from "@/components/ui/badge";

const accentColors = [
  { bg: "from-blue-500/10 via-blue-500/5 to-transparent", border: "border-blue-500/30", tag: "border-blue-400/40 text-blue-700 dark:text-blue-300 bg-blue-500/5", btn: "hover:bg-blue-500 hover:text-white border-blue-500/30", bar: "from-blue-500 to-blue-400", icon: "bg-blue-500/10 text-blue-500" },
  { bg: "from-emerald-500/10 via-emerald-500/5 to-transparent", border: "border-emerald-500/30", tag: "border-emerald-400/40 text-emerald-700 dark:text-emerald-300 bg-emerald-500/5", btn: "hover:bg-emerald-500 hover:text-white border-emerald-500/30", bar: "from-emerald-500 to-emerald-400", icon: "bg-emerald-500/10 text-emerald-500" },
  { bg: "from-purple-500/10 via-purple-500/5 to-transparent", border: "border-purple-500/30", tag: "border-purple-400/40 text-purple-700 dark:text-purple-300 bg-purple-500/5", btn: "hover:bg-purple-500 hover:text-white border-purple-500/30", bar: "from-purple-500 to-purple-400", icon: "bg-purple-500/10 text-purple-500" },
  { bg: "from-orange-500/10 via-orange-500/5 to-transparent", border: "border-orange-500/30", tag: "border-orange-400/40 text-orange-700 dark:text-orange-300 bg-orange-500/5", btn: "hover:bg-orange-500 hover:text-white border-orange-500/30", bar: "from-orange-500 to-orange-400", icon: "bg-orange-500/10 text-orange-500" },
  { bg: "from-pink-500/10 via-pink-500/5 to-transparent", border: "border-pink-500/30", tag: "border-pink-400/40 text-pink-700 dark:text-pink-300 bg-pink-500/5", btn: "hover:bg-pink-500 hover:text-white border-pink-500/30", bar: "from-pink-500 to-pink-400", icon: "bg-pink-500/10 text-pink-500" },
  { bg: "from-cyan-500/10 via-cyan-500/5 to-transparent", border: "border-cyan-500/30", tag: "border-cyan-400/40 text-cyan-700 dark:text-cyan-300 bg-cyan-500/5", btn: "hover:bg-cyan-500 hover:text-white border-cyan-500/30", bar: "from-cyan-500 to-cyan-400", icon: "bg-cyan-500/10 text-cyan-500" },
  { bg: "from-rose-500/10 via-rose-500/5 to-transparent", border: "border-rose-500/30", tag: "border-rose-400/40 text-rose-700 dark:text-rose-300 bg-rose-500/5", btn: "hover:bg-rose-500 hover:text-white border-rose-500/30", bar: "from-rose-500 to-rose-400", icon: "bg-rose-500/10 text-rose-500" },
  { bg: "from-violet-500/10 via-violet-500/5 to-transparent", border: "border-violet-500/30", tag: "border-violet-400/40 text-violet-700 dark:text-violet-300 bg-violet-500/5", btn: "hover:bg-violet-500 hover:text-white border-violet-500/30", bar: "from-violet-500 to-violet-400", icon: "bg-violet-500/10 text-violet-500" },
  { bg: "from-amber-500/10 via-amber-500/5 to-transparent", border: "border-amber-500/30", tag: "border-amber-400/40 text-amber-700 dark:text-amber-300 bg-amber-500/5", btn: "hover:bg-amber-500 hover:text-white border-amber-500/30", bar: "from-amber-500 to-amber-400", icon: "bg-amber-500/10 text-amber-500" },
  { bg: "from-teal-500/10 via-teal-500/5 to-transparent", border: "border-teal-500/30", tag: "border-teal-400/40 text-teal-700 dark:text-teal-300 bg-teal-500/5", btn: "hover:bg-teal-500 hover:text-white border-teal-500/30", bar: "from-teal-500 to-teal-400", icon: "bg-teal-500/10 text-teal-500" },
  { bg: "from-indigo-500/10 via-indigo-500/5 to-transparent", border: "border-indigo-500/30", tag: "border-indigo-400/40 text-indigo-700 dark:text-indigo-300 bg-indigo-500/5", btn: "hover:bg-indigo-500 hover:text-white border-indigo-500/30", bar: "from-indigo-500 to-indigo-400", icon: "bg-indigo-500/10 text-indigo-500" },
  { bg: "from-red-500/10 via-red-500/5 to-transparent", border: "border-red-500/30", tag: "border-red-400/40 text-red-700 dark:text-red-300 bg-red-500/5", btn: "hover:bg-red-500 hover:text-white border-red-500/30", bar: "from-red-500 to-red-400", icon: "bg-red-500/10 text-red-500" },
];

export function ProjectList() {
  const { t } = useLanguage();
  const projectItems: any = t('projects.items');

  const getProjectDesc = (name: string, fallback: string) => {
    const keyMap: Record<string, string> = {
      "Mosoo": "mosoo",
      "Campux": "campux",
      "Memories": "memories",
      "Blog": "blog",
      "Free-one-api": "free_one_api",
      "AI智能助手": "ai_assistant",
      "LangBot": "langbot",
      "NewsNook": "newsnook",
      "Twilight Echo": "twilight_echo",
      "个人主页": "personal_home",
      "258": "twenty58",
      "Xmail Pro": "xmail",
      "KG-Campux": "kg_campux",
      "在线C++IDE": "cpp_ide",
      "云端图片储存平台": "img_cloud",
      "Hydro-OJ-IDE": "hydro_oj",
      "QQ Repo Guardian": "qq_repo_guardian",
      "CSL": "csl",
      "RA Study": "ra_study",
      "LangBot Plugins": "langbot_plugins"
    };
    const key = keyMap[name];
    return projectItems[key] || fallback;
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {PROJECTS.map((project, idx) => {
        const color = accentColors[idx % accentColors.length];
        const colorIdx = idx % accentColors.length;

        return (
          <div
            key={idx}
            className={`group relative flex flex-col overflow-hidden rounded-2xl border bg-gradient-to-b ${color.bg} ${color.border} shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2`}
          >
            <div className="p-6 flex-1 space-y-5">
              {/* 标题行 */}
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-2xl font-bold tracking-tight group-hover:translate-x-1 transition-transform duration-300">
                  {project.name}
                </h3>
                <div className={`shrink-0 w-9 h-9 rounded-full flex items-center justify-center ${color.icon} opacity-0 group-hover:opacity-100 transition-all duration-300 rotate-0 group-hover:rotate-12`}>
                  <Sparkles size={16} />
                </div>
              </div>

              {/* 描述 */}
              <p className="text-muted-foreground leading-relaxed text-base min-h-[72px] line-clamp-4">
                {getProjectDesc(project.name, project.desc)}
              </p>

              {/* 标签 */}
              <div className="flex flex-wrap gap-2">
                {project.tags?.map((tag, i) => (
                  <Badge
                    key={i}
                    variant="outline"
                    className={`border ${color.tag} rounded-full text-xs font-medium px-3 py-0.5 transition-all duration-200 hover:scale-105`}
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            {/* 底部操作按钮 */}
            <div className={`p-5 border-t ${color.border} bg-background/50 backdrop-blur-sm flex gap-3`}>
              {project.github && (
                <Button variant="outline" size="sm" asChild className={`flex-1 h-10 rounded-xl border ${color.btn} transition-all duration-200 bg-background/80`}>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5">
                    <Github size={16} />
                    <span className="text-xs">{t('projects.github')}</span>
                  </a>
                </Button>
              )}
              {project.site && (
                <Button variant="outline" size="sm" asChild className={`flex-1 h-10 rounded-xl border ${color.btn} transition-all duration-200 bg-background/80`}>
                  <a href={project.site} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5">
                    <ExternalLink size={16} />
                    <span className="text-xs">{t('projects.site')}</span>
                  </a>
                </Button>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
