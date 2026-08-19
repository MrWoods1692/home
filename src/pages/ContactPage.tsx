import { CONTACTS, PERSONAL_INFO } from "@/lib/data";
import { useLanguage } from "@/contexts/AppContext";
import { 
  Mail,
  MessageCircle,
  MessageSquare,
  Send,
  Coffee,
  Copy,
  Check
} from "lucide-react";
import { QQIcon } from "@/components/QQIcon";
import { WeChatIcon } from "@/components/WeChatIcon";
import { TelegramIcon } from "@/components/TelegramIcon";
import { DiscordIcon } from "@/components/DiscordIcon";
import { AlipayIcon } from "@/components/AlipayIcon";
import { WeChatPayIcon } from "@/components/WeChatPayIcon";
import { AifadianIcon } from "@/components/AifadianIcon";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { toast } from "sonner";

const iconMap: Record<string, any> = {
  Mail, MessageCircle, MessageSquare, Send, QQ: QQIcon, WeChat: WeChatIcon, Telegram: TelegramIcon, Discord: DiscordIcon
};

export default function ContactPage() {
  const { t } = useLanguage();
  const [copiedIdx, setCopiedIdx] = useState<number | null>(null);

  const handleCopy = (text: string, idx: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIdx(idx);
    toast.success("Copied to clipboard!");
    setTimeout(() => setCopiedIdx(null), 2000);
  };

  return (
    <div className="min-h-screen pb-20 px-4 md:px-8 max-w-4xl mx-auto space-y-16 animate-in fade-in slide-in-from-bottom-10 duration-700">
      <h1 className="text-5xl text-center mt-10">{t('contact.title')}</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {CONTACTS.map((contact, idx) => {
          const typeMap: Record<string, string> = {
            "企业邮箱": "biz_mail",
            "谷歌邮箱": "google_mail",
            "Outlook邮箱": "outlook_mail",
            "QQ邮箱": "qq_mail",
            "腾讯QQ": "qq",
            "WeChat": "wechat",
            "Telegram": "telegram"
          };
          const typeKey = typeMap[contact.type];
          const iconKey = contact.type.includes("QQ") ? "QQ" : contact.type === "WeChat" ? "WeChat" : contact.type === "Telegram" ? "Telegram" : contact.type === "Discord" ? "Discord" : contact.icon;
          const Icon = iconMap[iconKey] || Mail;
          return (
            <div key={idx} className="paper-card hand-border group p-8 relative hover:rotate-1 transition-all overflow-hidden bg-card">
              <div className="absolute top-2 right-2 opacity-10 group-hover:opacity-30 transition-opacity">
                <Icon size={64} />
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center border border-primary/20">
                    <Icon size={20} className="text-primary" />
                  </div>
                  <p className="text-sm font-hand-semibold opacity-60 uppercase tracking-widest">{typeKey ? t(`contact.types.${typeKey}`) : contact.type}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-2xl font-hand-semibold break-all leading-tight">{contact.value}</p>
                  <div className="h-0.5 bg-primary/10 w-full rounded-full" />
                </div>
                <div className="flex justify-end pt-2">
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="hover:bg-primary hover:text-primary-foreground transition-all rounded-full"
                    onClick={() => handleCopy(contact.value, idx)}
                  >
                    {copiedIdx === idx ? <Check size={16} /> : <Copy size={16} />}
                    <span className="ml-2 text-xs">{t('contact.copy')}</span>
                  </Button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="relative pt-16">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 flex items-center gap-4 w-full max-w-md">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-orange-300/50 to-transparent" />
          <Coffee className="text-orange-500 animate-bounce" size={24} />
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-orange-300/50 to-transparent" />
        </div>

        <div className="relative mt-8 rounded-3xl bg-gradient-to-br from-orange-50/80 via-amber-50/50 to-white dark:from-orange-950/20 dark:via-amber-950/10 dark:to-background border-2 border-orange-200/50 dark:border-orange-800/30 shadow-lg overflow-hidden">
          <div className="absolute -top-20 -left-20 w-60 h-60 bg-gradient-to-br from-orange-200/20 to-amber-200/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-gradient-to-br from-amber-200/20 to-orange-200/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-orange-100/10 to-amber-100/5 rounded-full blur-2xl" />
          
          <div className="text-center pt-12 pb-6 relative z-10">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-400/20 to-amber-400/20 border border-orange-400/30 mb-4 shadow-sm">
              <Coffee size={32} className="text-orange-500" />
            </div>
            <h2 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-orange-600 to-amber-600 dark:from-orange-400 dark:to-amber-400 bg-clip-text text-transparent">
              {t('contact.donate')}
            </h2>
            <p className="text-muted-foreground text-sm mt-2 opacity-60">
              {t('contact.subtitle')}
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 px-8 pb-12 relative z-10">
            <Dialog>
              <DialogTrigger asChild>
                <button className="group relative flex flex-col items-center gap-3 px-10 py-6 rounded-2xl bg-gradient-to-b from-blue-50 to-blue-100/50 dark:from-blue-950/30 dark:to-blue-900/20 border-2 border-blue-200/60 dark:border-blue-800/40 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:border-blue-400/60 min-w-[150px]">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <AlipayIcon size={28} className="text-white" />
                  </div>
                  <span className="text-lg font-bold text-blue-700 dark:text-blue-300">{t('common.alipay')}</span>
                  <span className="text-[10px] text-blue-500/50 dark:text-blue-400/40 font-medium">{t('contact.scan_to_pay')}</span>
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-blue-500/0 to-blue-500/[0.02] opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              </DialogTrigger>
              <DialogContent className="max-w-[calc(100%-2rem)] md:max-w-sm rounded-2xl border-2 border-blue-200 dark:border-blue-800/50 bg-gradient-to-b from-blue-50/80 to-white dark:from-blue-950/30 dark:to-background">
                <DialogHeader>
                  <DialogTitle className="text-center text-2xl font-bold text-blue-600 dark:text-blue-400 flex items-center justify-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                      <AlipayIcon size={16} className="text-white" />
                    </div>
                    {t('common.alipay')}
                  </DialogTitle>
                </DialogHeader>
                <div className="flex justify-center p-8 relative">
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-24 h-6 bg-gradient-to-r from-blue-400/20 via-blue-500/30 to-blue-400/20 rounded-sm rotate-[-2deg]" />
                  <img src="https://img.cdn1.vip/i/69f565a295ead_1777690018.webp" alt="Alipay QR" className="rounded-xl w-64 h-64 shadow-xl rotate-1 hover:rotate-0 transition-transform duration-500" />
                </div>
                <p className="text-center text-sm text-muted-foreground pb-4">{t('contact.alipay_desc')}</p>
              </DialogContent>
            </Dialog>

            <Dialog>
              <DialogTrigger asChild>
                <button className="group relative flex flex-col items-center gap-3 px-10 py-6 rounded-2xl bg-gradient-to-b from-green-50 to-green-100/50 dark:from-green-950/30 dark:to-green-900/20 border-2 border-green-200/60 dark:border-green-800/40 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:border-green-400/60 min-w-[150px]">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <WeChatPayIcon size={28} className="text-white" />
                  </div>
                  <span className="text-lg font-bold text-green-700 dark:text-green-300">{t('common.wechat')}</span>
                  <span className="text-[10px] text-green-500/50 dark:text-green-400/40 font-medium">{t('contact.scan_to_pay')}</span>
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-green-500/0 to-green-500/[0.02] opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              </DialogTrigger>
              <DialogContent className="max-w-[calc(100%-2rem)] md:max-w-sm rounded-2xl border-2 border-green-200 dark:border-green-800/50 bg-gradient-to-b from-green-50/80 to-white dark:from-green-950/30 dark:to-background">
                <DialogHeader>
                  <DialogTitle className="text-center text-2xl font-bold text-green-600 dark:text-green-400 flex items-center justify-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
                      <WeChatPayIcon size={16} className="text-white" />
                    </div>
                    {t('common.wechat')}
                  </DialogTitle>
                </DialogHeader>
                <div className="flex justify-center p-8 relative">
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-24 h-6 bg-gradient-to-r from-green-400/20 via-green-500/30 to-green-400/20 rounded-sm rotate-[2deg]" />
                  <img src="https://img.cdn1.vip/i/69f565401c23e_1777699920.webp" alt="WeChat QR" className="rounded-xl w-64 h-64 shadow-xl -rotate-1 hover:rotate-0 transition-transform duration-500" />
                </div>
                <p className="text-center text-sm text-muted-foreground pb-4">{t('contact.wechat_desc')}</p>
              </DialogContent>
            </Dialog>

            <a
              href="https://www.ifdian.net/item/ff9854bc457811f189fe52540025c377?utm_source=copylink&utm_medium=link"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col items-center gap-3 px-10 py-6 rounded-2xl bg-gradient-to-b from-orange-50 to-orange-100/50 dark:from-orange-950/30 dark:to-orange-900/20 border-2 border-orange-200/60 dark:border-orange-800/40 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:border-orange-400/60 min-w-[150px]"
            >
              <div className="w-14 h-14 rounded-xl bg-[#946CE6] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <AifadianIcon size={28} className="text-[#946CE6]" />
              </div>
              <span className="text-lg font-bold text-orange-700 dark:text-orange-300">{t('common.aifadian')}</span>
              <span className="text-[10px] text-orange-500/50 dark:text-orange-400/40 font-medium">{t('contact.aifadian_desc')}</span>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-orange-500/0 to-orange-500/[0.02] opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
