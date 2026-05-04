import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'zh-CN' | 'zh-TW' | 'en';

interface Translation {
  [key: string]: string | Translation | any[];
}

const translations: Record<Language, Translation> = {
  'zh-CN': {
    nav: {
      home: '[首页]',
      about: '[关于我]',
      skills: '[技能]',
      projects: '[项目]',
      blog: '[博客]',
      contact: '[联系我]',
      love: '[恋爱]',
    },
    home: {
      welcome: '[欢迎语，例如：欢迎来到我的主页]',
      bio: '[个人简介，例如：一个热爱技术、追求极致的初中生，专注于项目开发与算法竞赛。喜欢探索各种新奇的技术栈，从底层的 C++ 到现代的 Rust，从传统的后端 PHP 到现代的微服务架构。目前正在桂林市奎光学校就读，致力于成为一名优秀的全栈开发工程师。]',
      recent_title: '[最近动态标题]',
      recent_content: '[最近动态内容]',
      recent_item1: '[最近动态条目1]',
      recent_item2: '[最近动态条目2]',
      tech_title: '[技术栈焦点标题]',
      tech_desc: '[技术栈描述]',
      future_title: '[未来计划标题]',
      future_content: '[未来计划内容]',
      future_progress: '[生态构建进度]',
      cta_title: '[行动号召标题]',
      cta_desc: '[行动号召描述]',
      cta_button: '[行动号召按钮文字]'
    },
    about: {
      title: '[关于我]',
      academic: '[学业经历]',
      awards: '[获奖经历]',
      hometown: '[我的家乡]',
      music: '[我常听的音乐]',
      friends: '[我的好友]',
      motto: '[座右铭]',
      age: '[我的年龄]',
      motto_text: '[座右铭文本]',
      inspiration: '[励志语句]',
      academic_stages: {
        preschool: '[幼儿园]',
        primary: '[小学]',
        junior: '[初中]'
      },
      academic_schools: {
        preschool: '[万福幼儿园]',
        primary: '[象山区博雅双语学校]',
        junior: '[桂林市奎光学校]'
      },
      hometown_desc: [
        '[家乡描述1]',
        '[家乡描述2]',
        '[家乡描述3]',
        '[家乡描述4]',
        '[家乡描述5]',
        '[家乡描述6]'
      ],
      friend_bios: {
        qin: '[好友1简介]',
        chen: '[好友2简介]',
        moke: '[好友3简介]',
        m: '[其他好友简介]'
      },
      academic_list: [
        { stage: '[教育阶段1]', school: '[学校名称1]' },
        { stage: '[教育阶段2]', school: '[学校名称2]' },
        { stage: '[教育阶段3]', school: '[学校名称3]' }
      ],
      awards_list: [
        { date: '[获奖日期1]', title: '[奖项名称1]', organization: '[颁发机构1]', project: '[相关项目1]' },
        { date: '[获奖日期2]', title: '[奖项名称2]', organization: '[颁发机构2]', project: '[相关项目2]' },
        { date: '[获奖日期3]', title: '[奖项名称3]', organization: '[颁发机构3]', project: '[相关项目3]' }
      ]
    },
    skills: {
      title: '[技能树]',
      duration: '[学习时长]',
      frontend: '[前端开发]',
      backend: '[后端开发]',
      client: '[客户端 & 其他]',
      db: '[数据库]',
      ops: '[运维工具]',
      env: '[运行环境]',
      tools: '[开发工具]',
    },
    projects: {
      title: '[我的项目]',
      github: '[代码仓库]',
      site: '[在线演示]',
      items: {
        langbot: '[项目1描述]',
        xmail: '[项目2描述]',
        campux: '[项目3描述]',
        cpp_ide: '[项目4描述]',
        img_cloud: '[项目5描述]',
        ai_assistant: '[项目6描述]',
        hydro_oj: '[项目7描述]',
        free_one_api: '[项目8描述]',
        personal_home: '[项目9描述]'
      }
    },
    blog: {
      title: '[博客 & 社交]',
    },
    contact: {
      title: '[联系我]',
      copy: '[复制]',
      donate: '[请我喝咖啡]',
      types: {
        biz_mail: '[企业邮箱]',
        google_mail: '[谷歌邮箱]',
        qq_mail: '[QQ邮箱]',
        qq: '[腾讯QQ]',
        wechat: '[WeChat]',
        telegram: '[Telegram]'
      }
    },
    love: {
      title: '[恋爱]',
      status: '[恋爱状态]'
    },
    common: {
      alipay: '[支付宝]',
      wechat: '微信钱包',
      system: '[系统]',
      light: '[亮色]',
      dark: '[暗色]',
      menu: '[菜单]',
      aifadian: '[爱发电]',
      visit: '[点击访问]',
      girlfriend: '[女友]',
      skills: {
        bt_panel: '[宝塔面板]',
        runtime: '[运行环境]',
        dev_tools: '[开发工具]',
        client_other: '[客户端 & 其他]'
      },
      music: {
        only: '[唯一]',
        sky: '[天空没有极限]',
        peach: '[桃花诺]',
        love_distance: '[爱能克服远距离]',
        bubble: '[泡沫]',
        countdown: '[倒数]',
        sand: '[回忆的沙漏]',
        rose: '[红蔷薇白玫瑰]',
        like: '[喜欢你]',
        fullstop: '[句号]',
        lightyear: '[光年之外]',
        goodbye: '[再见]',
        rain: '[雨爱]',
        drop: '[跳楼机]',
        march: '[义勇军进行曲]'
      }
    }
  },
   'zh-TW': {
    nav: {
      home: '[首頁]',
      about: '[關於我]',
      skills: '[技能]',
      projects: '[項目]',
      blog: '[部落格]',
      contact: '[聯繫我]',
      love: '[戀愛]',
    },
    home: {
      welcome: '[歡迎語]',
      bio: '[個人簡介]',
      recent_title: '[最近動態標題]',
      recent_content: '[最近動態內容]',
      recent_item1: '[最近動態條目1]',
      recent_item2: '[最近動態條目2]',
      tech_title: '[技術棧焦點標題]',
      tech_desc: '[技術棧描述]',
      future_title: '[未來計劃標題]',
      future_content: '[未來計劃內容]',
      future_progress: '[生態構建進度]',
      cta_title: '[行動號召標題]',
      cta_desc: '[行動號召描述]',
      cta_button: '[行動號召按鈕文字]'
    },
    about: {
      title: '[關於我]',
      academic: '[學業經歷]',
      awards: '[獲獎經歷]',
      hometown: '[我的家鄉]',
      music: '[我常聽的音樂]',
      friends: '[我的好友]',
      motto: '[座右銘]',
      age: '[我的年齡]',
      motto_text: '[座右銘文本]',
      inspiration: '[勵志語句]',
      academic_stages: {
        preschool: '[幼稚園]',
        primary: '[小學]',
        junior: '[初中]'
      },
      academic_schools: {
        preschool: '[萬福幼稚園]',
        primary: '[象山區博雅雙語學校]',
        junior: '[桂林市奎光學校]'
      },
      hometown_desc: [
        '[家鄉描述1]',
        '[家鄉描述2]',
        '[家鄉描述3]',
        '[家鄉描述4]',
        '[家鄉描述5]',
        '[家鄉描述6]'
      ],
      friend_bios: {
        qin: '[好友1簡介]',
        chen: '[好友2簡介]',
        moke: '[好友3簡介]',
        m: '[其他好友簡介]'
      },
      academic_list: [
        { stage: '[教育階段1]', school: '[學校名稱1]' },
        { stage: '[教育階段2]', school: '[學校名稱2]' },
        { stage: '[教育階段3]', school: '[學校名稱3]' }
      ],
      awards_list: [
        { date: '[獲獎日期1]', title: '[獎項名稱1]', organization: '[頒發機構1]', project: '[相關項目1]' },
        { date: '[獲獎日期2]', title: '[獎項名稱2]', organization: '[頒發機構2]', project: '[相關項目2]' },
        { date: '[獲獎日期3]', title: '[獎項名稱3]', organization: '[頒發機構3]', project: '[相關項目3]' }
      ]
    },
    skills: {
      title: '[技能樹]',
      duration: '[學習時長]',
      frontend: '[前端開發]',
      backend: '[後端開發]',
      client: '[客戶端 & 其他]',
      db: '[資料庫]',
      ops: '[運維工具]',
      env: '[執行環境]',
      tools: '[開發工具]',
    },
    projects: {
      title: '[我的項目]',
      github: '[代碼倉庫]',
      site: '[線上演示]',
      items: {
        langbot: '[項目1描述]',
        xmail: '[項目2描述]',
        campux: '[項目3描述]',
        cpp_ide: '[項目4描述]',
        img_cloud: '[項目5描述]',
        ai_assistant: '[項目6描述]',
        hydro_oj: '[項目7描述]',
        free_one_api: '[項目8描述]',
        personal_home: '[項目9描述]'
      }
    },
    blog: {
      title: '[部落格 & 社交]',
    },
    contact: {
      title: '[聯繫我]',
      copy: '[複製]',
      donate: '[請我喝咖啡]',
      types: {
        biz_mail: '[企業郵箱]',
        google_mail: '[谷歌郵箱]',
        qq_mail: '[QQ郵箱]',
        qq: '[騰訊QQ]',
        wechat: '[WeChat]',
        telegram: '[Telegram]'
      }
    },
    love: {
      title: '[戀愛]',
      status: '[戀愛狀態]'
    },
    common: {
      alipay: '[支付寶]',
      wechat: '微信支付',
      system: '[系統]',
      light: '[亮色]',
      dark: '[暗色]',
      menu: '[菜單]',
      aifadian: '[愛發電]',
      visit: '[點擊訪問]',
      girlfriend: '[女友]',
      skills: {
        bt_panel: '[寶塔面板]',
        runtime: '[執行環境]',
        dev_tools: '[開發工具]',
        client_other: '[用戶端 & 其他]'
      },
      music: {
        only: '[唯一]',
        sky: '[天空沒有極限]',
        peach: '[桃花諾]',
        love_distance: '[愛能克服遠距離]',
        bubble: '[泡沫]',
        countdown: '[倒數]',
        sand: '[回憶的沙漏]',
        rose: '[紅薔薇白玫瑰]',
        like: '[喜歡你]',
        fullstop: '[句號]',
        lightyear: '[光年之外]',
        goodbye: '[再見]',
        rain: '[雨愛]',
        drop: '[跳樓機]',
        march: '[義勇軍進行曲]'
      }
    }
  },
  'en': {
    nav: {
      home: '[Home]',
      about: '[About]',
      skills: '[Skills]',
      projects: '[Projects]',
      blog: '[Blog]',
      contact: '[Contact]',
      love: '[Love]',
    },
    home: {
      welcome: '[Welcome message]',
      bio: '[Bio text]',
      recent_title: '[Recent updates title]',
      recent_content: '[Recent updates content]',
      recent_item1: '[Recent update item 1]',
      recent_item2: '[Recent update item 2]',
      tech_title: '[Tech stack focus title]',
      tech_desc: '[Tech stack description]',
      future_title: '[Future plans title]',
      future_content: '[Future plans content]',
      future_progress: '[Ecosystem build progress]',
      cta_title: '[Call to action title]',
      cta_desc: '[Call to action description]',
      cta_button: '[Call to action button text]'
    },
    about: {
      title: '[About Me]',
      academic: '[Education]',
      awards: '[Awards]',
      hometown: '[Hometown]',
      music: '[Favorite Music]',
      friends: '[Friends]',
      motto: '[Motto]',
      age: '[My Age]',
      motto_text: '[Motto text]',
      inspiration: '[Inspirational quote]',
      academic_stages: {
        preschool: '[Preschool]',
        primary: '[Primary School]',
        junior: '[Junior High]'
      },
      academic_schools: {
        preschool: '[Wanfu Kindergarten]',
        primary: '[Boya Bilingual School]',
        junior: '[Guilin Kuiguang School]'
      },
      hometown_desc: [
        '[Hometown description 1]',
        '[Hometown description 2]',
        '[Hometown description 3]',
        '[Hometown description 4]',
        '[Hometown description 5]',
        '[Hometown description 6]'
      ],
      friend_bios: {
        qin: '[Friend 1 bio]',
        chen: '[Friend 2 bio]',
        moke: '[Friend 3 bio]',
        m: '[Other friend bio]'
      },
      academic_list: [
        { stage: '[Education stage 1]', school: '[School name 1]' },
        { stage: '[Education stage 2]', school: '[School name 2]' },
        { stage: '[Education stage 3]', school: '[School name 3]' }
      ],
      awards_list: [
        { date: '[Award date 1]', title: '[Award title 1]', organization: '[Organization 1]', project: '[Project 1]' },
        { date: '[Award date 2]', title: '[Award title 2]', organization: '[Organization 2]', project: '[Project 2]' },
        { date: '[Award date 3]', title: '[Award title 3]', organization: '[Organization 3]', project: '[Project 3]' }
      ]
    },
    skills: {
      title: '[Skill Tree]',
      duration: '[Learning Duration]',
      frontend: '[Frontend]',
      backend: '[Backend]',
      client: '[Client & Other]',
      db: '[Database]',
      ops: '[DevOps]',
      env: '[Runtime]',
      tools: '[Development Tools]',
    },
    projects: {
      title: '[My Projects]',
      github: '[GitHub]',
      site: '[Live Demo]',
      items: {
        langbot: '[Project 1 description]',
        xmail: '[Project 2 description]',
        campux: '[Project 3 description]',
        cpp_ide: '[Project 4 description]',
        img_cloud: '[Project 5 description]',
        ai_assistant: '[Project 6 description]',
        hydro_oj: '[Project 7 description]',
        free_one_api: '[Project 8 description]',
        personal_home: '[Project 9 description]'
      }
    },
    blog: {
      title: '[Blog & Social]',
    },
    contact: {
      title: '[Contact Me]',
      copy: '[Copy]',
      donate: '[Buy me a coffee]',
      types: {
        biz_mail: '[Business Email]',
        google_mail: '[Google Email]',
        qq_mail: '[QQ Email]',
        qq: '[Tencent QQ]',
        wechat: '[WeChat]',
        telegram: '[Telegram]'
      }
    },
    love: {
      title: '[Love]',
      status: '[Relationship status]'
    },
    common: {
      alipay: '[Alipay]',
      wechat: '[WeChat Pay]',
      system: '[System]',
      light: '[Light]',
      dark: '[Dark]',
      menu: '[Menu]',
      aifadian: '[Aifadian]',
      visit: '[Visit Page]',
      girlfriend: '[Girlfriend]',
      skills: {
        bt_panel: '[BT Panel]',
        runtime: '[Runtime]',
        dev_tools: '[Dev Tools]',
        client_other: '[Client & Other]'
      },
      music: {
        only: '[Only]',
        sky: '[Sky Has No Limit]',
        peach: '[Peach Blossom Promise]',
        love_distance: '[Love Can Overcome Distance]',
        bubble: '[Bubble]',
        countdown: '[Tik Tok]',
        sand: '[Sand of Memories]',
        rose: '[Red Rose White Rose]',
        like: '[Like You]',
        fullstop: '[Full Stop]',
        lightyear: '[Light Years Away]',
        goodbye: '[Goodbye]',
        rain: '[Rainie Love]',
        drop: '[Sky Drop]',
        march: '[March of the Volunteers]'
      }
    }
  }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (path: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    return (localStorage.getItem('language') as Language) || 'zh-CN';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const t = (path: string): any => {
    const keys = path.split('.');
    let current: any = translations[language];
    for (const key of keys) {
      if (current === undefined || current[key] === undefined) return path;
      current = current[key];
    }
    return current;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
};

// Theme Context
type Theme = 'light' | 'dark' | 'system';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  actualTheme: 'light' | 'dark';
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    return (localStorage.getItem('theme') as Theme) || 'system';
  });

  const [actualTheme, setActualTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    localStorage.setItem('theme', theme);
    const root = window.document.documentElement;
    
    const applyTheme = (t: 'light' | 'dark') => {
      root.classList.remove('light', 'dark');
      root.classList.add(t);
      setActualTheme(t);
    };

    if (theme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      applyTheme(systemTheme);
      
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const handleChange = (e: MediaQueryListEvent) => {
        applyTheme(e.matches ? 'dark' : 'light');
      };
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    } else {
      applyTheme(theme);
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, actualTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within ThemeProvider');
  return context;
};
