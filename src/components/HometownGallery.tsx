import { useState } from "react";
import { PERSONAL_INFO } from "@/lib/data";
import { useLanguage } from "@/contexts/AppContext";

export function HometownGallery() {
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);
  const { t } = useLanguage();
  const hometownDescs = t('about.hometown_desc') as any as string[];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl">{t('about.hometown')}：{PERSONAL_INFO.hometown}</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {PERSONAL_INFO.hometownImages.map((img, idx) => (
          <div 
            key={idx} 
            className="perspective-1000 cursor-pointer h-64 w-full"
            onClick={() => setFlippedIndex(flippedIndex === idx ? null : idx)}
          >
            <div className={`relative w-full h-full preserve-3d transition-transform duration-700 ${flippedIndex === idx ? 'rotate-y-180' : ''}`}>
              {/* Front */}
              <div className="absolute inset-0 backface-hidden rounded-lg overflow-hidden hand-border">
                <img
                  src={img.url}
                  alt={`Guilin-${idx + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Back */}
              <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-lg bg-card p-6 flex items-center justify-center text-center hand-border">
                <p className="text-xl font-hand-semibold leading-relaxed">
                  {hometownDescs[idx] || img.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <p className="text-sm text-center text-muted-foreground italic">({t('common.menu') === 'Menu' ? 'Click image to view details' : '点击图片查看详情内容'})</p>
    </div>
  );
}
