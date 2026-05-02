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
  Mail, MessageCircle, MessageSquare, Send
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
          const Icon = iconMap[contact.icon] || Mail;
          const typeMap: Record<string, string> = {
            "企业邮箱": "biz_mail",
            "谷歌邮箱": "google_mail",
            "QQ邮箱": "qq_mail",
            "腾讯QQ": "qq",
            "WeChat": "wechat",
            "Telegram": "telegram"
          };
          const typeKey = typeMap[contact.type];
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

      <div className="relative pt-12">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-dashed border-t-2 border-dashed border-primary/20" />
        <div className="paper-card hand-border bg-muted/20 text-center space-y-10 py-16 relative overflow-hidden">
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl" />
          
          <h2 className="text-4xl flex items-center justify-center gap-4 relative z-10">
            <Coffee className="text-orange-600 animate-bounce" size={40} /> 
            <span className="font-hand-semibold">{t('contact.donate')}</span>
          </h2>

          <div className="flex flex-wrap justify-center gap-8 relative z-10">
            <Dialog>
              <DialogTrigger asChild>
                <Button className="paper-3d-white h-24 px-12 text-3xl hover:bg-blue-50 transition-all hover:-rotate-2" variant="outline">
                  {t('common.alipay')}
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-[calc(100%-2rem)] md:max-w-sm hand-border bg-card">
                <DialogHeader>
                  <DialogTitle className="text-center text-3xl font-hand-semibold">{t('common.alipay')}</DialogTitle>
                </DialogHeader>
                <div className="flex justify-center p-8 relative">
                  <div className="washi-tape" />
                  <img src="https://img.cdn1.vip/i/69f565a295ead_1777690018.webp" alt="Alipay QR" className="hand-border w-64 h-64 shadow-2xl rotate-1" />
                </div>
              </DialogContent>
            </Dialog>

            <Dialog>
              <DialogTrigger asChild>
                <Button className="paper-3d-white h-24 px-12 text-3xl hover:bg-green-50 transition-all hover:rotate-2" variant="outline">
                  {t('common.wechat')}
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-[calc(100%-2rem)] md:max-w-sm hand-border bg-card">
                <DialogHeader>
                  <DialogTitle className="text-center text-3xl font-hand-semibold">{t('common.wechat')}</DialogTitle>
                </DialogHeader>
                <div className="flex justify-center p-8 relative">
                  <div className="washi-tape" />
                  <img src="https://img.cdn1.vip/i/69f565401c23e_1777689920.webp" alt="WeChat QR" className="hand-border w-64 h-64 shadow-2xl -rotate-1" />
                </div>
              </DialogContent>
            </Dialog>

            <Button 
              className="paper-3d-white h-24 px-12 text-3xl hover:bg-orange-50 transition-all hover:scale-110 flex items-center gap-4" 
              variant="outline"
              asChild
            >
              <a href="https://www.ifdian.net/item/ff9854bc457811f189fe52540025c377?utm_source=copylink&utm_medium=link" target="_blank" rel="noopener noreferrer">
                <span className="text-4xl">⚡</span>
                <span className="font-hand-semibold">{t('common.aifadian')}</span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
