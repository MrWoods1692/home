import { useState } from "react";
import { PERSONAL_INFO } from "@/lib/data";
import { useLanguage } from "@/contexts/AppContext";

export function AvatarCard() {
  const [isFlipped, setIsFlipped] = useState(false);
  const { t } = useLanguage();

  return (
    <div className="flex flex-col items-center gap-4">
      <div
        className="perspective-1000 cursor-pointer w-48 h-48"
        onClick={() => setIsFlipped(!isFlipped)}
      >
        <div
          className={`relative w-full h-full preserve-3d transition-transform duration-700 ${
            isFlipped ? "rotate-y-180" : ""
          }`}
        >
          <img
            src={PERSONAL_INFO.avatars[0]}
            alt={t('home.welcome')}
            className="absolute w-full h-full object-cover rounded-full backface-hidden hand-border"
          />
          <img
            src={PERSONAL_INFO.avatars[1]}
            alt={t('home.welcome')}
            className="absolute w-full h-full object-cover rounded-full backface-hidden rotate-y-180 hand-border"
          />
        </div>
      </div>
      <div className="text-center">
        <h1 className="text-3xl md:text-4xl mb-2">{PERSONAL_INFO.name}</h1>
      </div>
    </div>
  );
}
