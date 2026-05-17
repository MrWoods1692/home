import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'zh-CN' | 'zh-TW' | 'en';

interface Translation {
  [key: string]: string | Translation | any[];
}

const translations: Record<Language, Translation> = {
  'zh-CN': {
    nav: {
      home: '首页',
      about: '关于我',
      skills: '技能',
      projects: '项目',
      blog: '博客',
      contact: '联系我',
      love: '恋爱',
    },
    home: {
      welcome: '欢迎来到我的主页',
      bio: "一个热爱技术、追求极致的初中生，专注于项目开发与算法竞赛。喜欢探索各种新奇的技术栈，从底层的 C++ 到现代的 Rust，从传统的后端 PHP 到现代的微服务架构。目前正在桂林市奎光学校就读，致力于成为一名优秀的全栈开发工程师。",
      recent_title: '最近动态',
      recent_content: '正在深耕 Rust 开发，并探索 AI Agent 在自动化工作流中的更多可能性。',
      recent_item1: '完成了 LangBot-Fnos 的核心框架',
      recent_item2: '开始学习 Tauri 2.0 跨平台开发',
      tech_title: '技术栈焦点',
      tech_desc: '追求高性能与简洁代码的完美结合，从底层到前端全链路覆盖。',
      future_title: '未来计划',
      future_content: '完善Campux生态。',
      future_progress: '生态构建进度',
      cta_title: '想一起聊聊技术吗？',
      cta_desc: '无论是开源项目合作、技术选型探讨，还是仅仅想打个招呼，我都非常欢迎。',
      cta_button: '即刻联系我',
    },
    about: {
      title: '关于我',
      academic: '学业经历',
      awards: '获奖经历',
      hometown: '我的家乡',
      music: '我常听的音乐',
      friends: '我的好友',
      motto: '座右铭',
      age: '我的年龄',
      motto_text: '无他，惟手熟尔',
      inspiration: '人最宝贵的是生命。生命对于每个人只有一次。人的一生应当这样度过：当回首往事时，他不因虚度年华而悔恨，也不因碌碌无为而羞耻；这样，在临死的时候，他能够说：\'我的整个生命和全部精力，都已经献给了世界上最壮丽的事业——为人类的解放而斗争。',
      academic_stages: {
        preschool: '幼儿园',
        primary: '小学',
        junior: '初中'
      },
      academic_schools: {
        preschool: '万福幼儿园',
        primary: '象山区博雅双语学校',
        junior: '桂林市奎光学校'
      },
      hometown_desc: [
        '漓江山水甲天下，这是我最引以为傲的家乡风景。',
        '象鼻山是桂林的城徽，夜晚的它更显神秘与美丽。',
        '阳朔西街充满了异国情调与古朴气息，是放松的好去处。',
        '七星公园集山清水秀、洞奇石美于一体，是桂林山水的缩影。',
        '芦笛岩是大自然鬼斧神工的杰作，被誉为‘大自然的艺术宫殿’。',
        '日月双塔交相辉映，是两江四湖景区中最为璀璨的明珠。'
      ],
      friend_bios: {
        qin: 'LangBot创始人；Dify后端开发者；技术大牛；我的学长。',
        chen: '我的好朋友。国龙学生。',
        moke: '姐姐哦。国龙学生。',
        m: '...'
      },
      academic_list: [
        { stage: '幼儿园', school: '万福幼儿园' },
        { stage: '小学', school: '象山区博雅双语学校' },
        { stage: '初中', school: '桂林市奎光学校' }
      ],
      awards_list: [
        { date: '2025.11', title: 'CSP-J二等奖', organization: '中国计算机协会' },
        { date: '2025.06', title: '中学生数理化生综合实践活动证书·建模论文和实验报告·生物·二等奖', organization: '数理化生实践活动组委会' },
        { date: '2025.04', title: '创意编程·初中组·一等奖', organization: '桂林市教育局', project: '作品《AI智能助手》' },
        { date: '2025.03', title: '桂林市青少年科技创新大赛·青少年科技DV作品·二等奖', organization: '桂林市教育局', project: '作品《车轮里的秘密》' },
        { date: '2025.01', title: '中学生数理化生综合实践活动证书·物理·二等奖', organization: '数理化生实践活动组委会' },
        { date: '2025.01', title: '中学生数理化生综合实践活动证书·生物·三等奖', organization: '数理化生实践活动组委会' },
        { date: '2024.06', title: '广西中小学生程序设计挑战赛·入门组·一等奖', organization: '广西计算机协会' }
      ]
    },
    skills: {
      title: '技能树',
      duration: '学习时长',
      frontend: '前端开发',
      backend: '后端开发',
      client: '客户端 & 其他',
      db: '数据库',
      ops: '运维工具',
      env: '运行环境',
      tools: '开发工具',
    },
    projects: {
      title: '我的项目',
      github: '代码仓库',
      site: '在线演示',
      items: {
        langbot: '开源的即时通讯 AI 机器人平台，支持 QQ、企业微信、飞书、钉钉、KOOK 等主流平台，让 AI 应用触达任何场景。',
        xmail: '专业级邮件管理工具，提升办公效率。',
        campux: '全球最先进的智能QQ空间校园墙系统（没有之一），为学生提供便捷服务。',
        cpp_ide: '基于 Web 的轻量级 C++ 编译与运行环境。',
        img_cloud: '高性能、安全的云端图床服务。',
        ai_assistant: '集成多种大模型的智能对话与任务处理助手。',
        hydro_oj: '基于HydroOJ的逆向接口实现本地 IDE兼OJ。',
        free_one_api: '聚合多种 AI 的免费分发平台。',
        personal_home: '本网站，用于展示和介绍我自己。'
      }
    },
    blog: {
      title: '博客 & 社交',
    },
    contact: {
      title: '联系我',
      copy: '复制',
      donate: '请我喝咖啡',
      types: {
        biz_mail: '企业邮箱',
        google_mail: '谷歌邮箱',
        qq_mail: 'QQ邮箱',
        qq: '腾讯QQ',
        wechat: 'WeChat',
        telegram: 'Telegram'
      }
    },
    love: {
      title: '恋爱',
      status: '正在给女友编写系统内核。'
    },
    common: {
      alipay: '支付宝',
      wechat: '微信钱包',
      system: '系统',
      light: '亮色',
      dark: '暗色',
      menu: '菜单',
      aifadian: '爱发电',
      visit: '点击访问',
      girlfriend: '女友',
      skills: {
        bt_panel: '宝塔面板',
        runtime: '运行环境',
        dev_tools: '开发工具',
        client_other: '客户端 & 其他'
      },
      music: {
        only: '唯一',
        sky: '天空没有极限',
        peach: '桃花诺',
        love_distance: '爱能克服远距离',
        bubble: '泡沫',
        countdown: '倒数',
        sand: '回忆的沙漏',
        rose: '红蔷薇白玫瑰',
        like: '喜欢你',
        fullstop: '句号',
        lightyear: '光年之外',
        goodbye: '再见',
        rain: '雨爱',
        drop: '跳楼机',
        march: '义勇军进行曲'
      }
    }
  },
   'zh-TW': {
    nav: {
      home: '首頁',
      about: '關於我',
      skills: '技能',
      projects: '項目',
      blog: '部落格',
      contact: '聯繫我',
      love: '戀愛',
    },
    home: {
      welcome: '歡迎來到我的主頁',
      bio: '一個熱愛技術、追求極致的初中生，專注於專案開發與演算法競賽。喜歡探索各種新奇的技術棧，從底層的 C++ 到現代的 Rust，從傳統的後端 PHP 到現代的微服務架構。目前正在桂林市奎光學校就讀，致力於成為一名優秀的全棧開發工程師。',
      recent_title: '最近動態',
      recent_content: '正在深耕 Rust 開發，並探索 AI Agent 在自動化工作流中的更多可能性。',
      recent_item1: '完成了 LangBot-Fnos 的核心框架',
      recent_item2: '開始學習 Tauri 2.0 跨平台開發',
      tech_title: '技術棧焦點',
      tech_desc: '追求高性能與簡潔代碼的完美結合，從底層到前端全鏈路覆蓋。',
      future_title: '未來計劃',
      future_content: '完善 LangBot 生態。',
      future_progress: '生態構建進度',
      cta_title: '想一起聊聊技術嗎？',
      cta_desc: '無論是開源項目合作、技術選型探討，還是僅僅想打個招呼，我都非常歡迎。',
      cta_button: '即刻聯繫我',
    },
    about: {
      title: '關於我',
      academic: '學業經歷',
      awards: '獲獎經歷',
      hometown: '我的家鄉',
      music: '我常聽的音樂',
      friends: '我的好友',
      motto: '座右銘',
      age: '我的年齡',
      motto_text: '無他，惟手熟爾',
      inspiration: '人最寶貴的是生命。生命對於每個人只有一次。人的一生應當這樣度過：當回首往事時，他不因虛度年華而悔恨，也不因碌碌無為而羞恥；這樣，在臨死的時候，他能夠說：「我的整個生命和全部精力，都已經獻給了世界上最壯麗的事業——為人類的解放而鬥爭。」',
      academic_stages: {
        preschool: '幼稚園',
        primary: '小學',
        junior: '初中'
      },
      academic_schools: {
        preschool: '萬福幼稚園',
        primary: '象山區博雅雙語學校',
        junior: '桂林市奎光學校'
      },
      hometown_desc: [
        '漓江山水甲天下，這是我最引以為傲的家鄉風景。',
        '象鼻山是桂林的城徽，夜晚的它更顯神秘與美麗。',
        '陽朔西街充滿了異國情調與古樸氣息，是放鬆的好去處。',
        '七星公園集山清水秀、洞奇石美於一體，是桂林山水的縮影。',
        '蘆笛岩是大自然鬼斧神工的傑作，被譽為「大自然的藝術宮殿」。',
        '日月雙塔交相輝映，是兩江四湖景區中最為璀璨的明珠。'
      ],
      friend_bios: {
        qin: 'LangBot創始人；Dify後端開發者；技術大牛；我的學長。',
        chen: '我的好朋友。國龍學生。',
        moke: '姐姐哦。國龍學生。',
        m: '...'
      },
      academic_list: [
        { stage: '幼稚園', school: '萬福幼稚園' },
        { stage: '小學', school: '象山區博雅雙語學校' },
        { stage: '初中', school: '桂林市奎光學校' }
      ],
      awards_list: [
        { date: '2025.11', title: 'CSP-J二等獎', organization: '中國計算機協會' },
        { date: '2025.06', title: '中學生數理化生綜合實踐活動證書·建模論文和實驗報告·生物·二等獎', organization: '數理化生實踐活動組委會' },
        { date: '2025.04', title: '創意編程·初中組·一等獎', organization: '桂林市教育局', project: '作品《AI智能助手》' },
        { date: '2025.03', title: '桂林市青少年科技創新大賽·青少年科技DV作品·二等獎', organization: '桂林市教育局', project: '作品《車輪里的秘密》' },
        { date: '2025.01', title: '中學生數理化生綜合實踐活動證書·物理·二等獎', organization: '數理化生實踐活動組委會' },
        { date: '2025.01', title: '中學生數理化生綜合實踐活動證書·生物·三等獎', organization: '數理化生實踐活動組委會' },
        { date: '2024.06', title: '廣西中小學生程序設計挑戰賽·入門組·一等獎', organization: '廣西計算機協會' }
      ]
    },
    skills: {
      title: '技能樹',
      duration: '學習時長',
      frontend: '前端開發',
      backend: '後端開發',
      client: '客戶端 & 其他',
      db: '資料庫',
      ops: '運維工具',
      env: '執行環境',
      tools: '開發工具',
    },
    projects: {
      title: '我的項目',
      github: '代碼倉庫',
      site: '線上演示',
      items: {
        langbot: '開源的即時通訊 AI 機器人平台，支援 QQ、企業微信、飛書、釘釘、KOOK 等主流平台，讓 AI 應用觸達任何場景。',
        xmail: '專業級郵件管理工具，提升辦公效率。',
        campux: '全球最先進的智能 QQ 空間校園牆系統（沒有之一），為學生提供便捷服務。',
        cpp_ide: '基於 Web 的輕量級 C++ 編譯與執行環境。',
        img_cloud: '高效能、安全的雲端圖床服務。',
        ai_assistant: '整合多種大模型的智慧對話與任務處理助手。',
        hydro_oj: '基於 HydroOJ 的逆向介面實現本地 IDE 兼 OJ。',
        free_one_api: '聚合多種 AI 的免費分發平台。',
        personal_home: '本網站，用於展示和介紹我自己。'
      }
    },
    blog: {
      title: '部落格 & 社交',
    },
    contact: {
      title: '聯繫我',
      copy: '複製',
      donate: '請我喝咖啡',
      types: {
        biz_mail: '企業郵箱',
        google_mail: '谷歌郵箱',
        qq_mail: 'QQ郵箱',
        qq: '騰訊QQ',
        wechat: 'WeChat',
        telegram: 'Telegram'
      }
    },
    love: {
      title: '戀愛',
      status: '正在給女友編寫系統核心。'
    },
    common: {
      alipay: '支付寶',
      wechat: '微信支付',
      system: '系統',
      light: '亮色',
      dark: '暗色',
      menu: '菜單',
      aifadian: '愛發電',
      visit: '點擊訪問',
      girlfriend: '女友',
      skills: {
        bt_panel: '寶塔面板',
        runtime: '執行環境',
        dev_tools: '開發工具',
        client_other: '用戶端 & 其他'
      },
      music: {
        only: '唯一',
        sky: '天空沒有極限',
        peach: '桃花諾',
        love_distance: '愛能克服遠距離',
        bubble: '泡沫',
        countdown: '倒數',
        sand: '回憶的沙漏',
        rose: '紅薔薇白玫瑰',
        like: '喜歡你',
        fullstop: '句號',
        lightyear: '光年之外',
        goodbye: '再見',
        rain: '雨愛',
        drop: '跳樓機',
        march: '義勇軍進行曲'
      }
    }
  },
  'en': {
    nav: {
      home: 'Home',
      about: 'About',
      skills: 'Skills',
      projects: 'Projects',
      blog: 'Blog',
      contact: 'Contact',
      love: 'Love',
    },
    home: {
      welcome: 'Welcome to My Home',
      bio: 'A tech-enthusiast junior high student pursuing excellence, focusing on project development and algorithm competitions. I love exploring various tech stacks, from low-level C++ to modern Rust, from traditional backend PHP to modern microservices architecture. Currently studying at Guilin Kuiguang School, striving to become an excellent full-stack engineer.',
      recent_title: 'Recent Updates',
      recent_content: 'Deeply involved in Rust development and exploring AI Agents in automated workflows.',
      recent_item1: 'Completed the core framework of LangBot-Fnos',
      recent_item2: 'Started learning Tauri 2.0 cross-platform development',
      tech_title: 'Tech Stack Focus',
      tech_desc: 'Pursuing the perfect blend of performance and clean code, covering from low-level to frontend.',
      future_title: 'Future Plans',
      future_content: 'Improve the LangBot ecosystem.',
      future_progress: 'Ecosystem Build Progress',
      cta_title: 'Want to talk tech?',
      cta_desc: 'Whether it\'s open-source collaboration, tech stack discussion, or just saying hi, I\'m always welcome.',
      cta_button: 'Contact Me Now',
    },
    about: {
      title: 'About Me',
      academic: 'Education',
      awards: 'Awards',
      hometown: 'Hometown',
      music: 'Favorite Music',
      friends: 'Friends',
      motto: 'Motto',
      age: 'My Age',
      motto_text: 'Practice makes perfect',
      inspiration: 'The most precious thing a person has is life. Life is given to each person only once. A person\'s life should be spent in such a way that when they look back on the past, they do not feel regret for wasting their years, nor feel ashamed for doing nothing; thus, when dying, they can say: "My whole life and all my energy have been dedicated to the most magnificent cause in the world—the struggle for the liberation of humanity."',
      academic_stages: {
        preschool: 'Preschool',
        primary: 'Primary School',
        junior: 'Junior High'
      },
      academic_schools: {
        preschool: 'Wanfu Kindergarten',
        primary: 'Boya Bilingual School',
        junior: 'Guilin Kuiguang School'
      },
      hometown_desc: [
        'Guilin scenery is the best in the world, the pride of my hometown.',
        'Elephant Trunk Hill is the symbol of Guilin, mysterious and beautiful at night.',
        'Yangshuo West Street is full of exotic charm and ancient atmosphere.',
        'Seven Star Park integrates mountains, rivers, caves, and rocks, a miniature of Guilin scenery.',
        'Reed Flute Cave is a masterpiece of nature, known as the "Palace of Natural Arts".',
        'The Sun and Moon Pagodas reflect each other, the brightest pearls in the Two Rivers and Four Lakes scenic area.'
      ],
      friend_bios: {
        qin: 'Founder of LangBot; Dify backend developer; tech guru; my senior.',
        chen: 'My good friend. Student at Guolong.',
        moke: 'Older sister. Student at Guolong.',
        m: '...'
      },
      academic_list: [
        { stage: 'Preschool', school: 'Wanfu Kindergarten' },
        { stage: 'Primary School', school: 'Boya Bilingual School' },
        { stage: 'Junior High', school: 'Guilin Kuiguang School' }
      ],
      awards_list: [
        { date: '2025.11', title: 'CSP-J Second Prize', organization: 'China Computer Federation' },
        { date: '2025.06', title: 'Certificate for Comprehensive Practical Activities for Secondary School Students in Mathematics, Physics, Chemistry and Biology · Modeling Paper and Experimental Report · Biology · Second Prize', organization: 'Organizing Committee of Practical Activities in Mathematics, Physics, Chemistry and Biology' },
        { date: '2025.04', title: 'Creative Programming · Junior High Group · First Prize', organization: 'Guilin Education Bureau', project: 'Work "AI Intelligent Assistant"' },
        { date: '2025.03', title: 'Guilin Youth Science and Technology Innovation Competition · Youth Science and Technology DV Work · Second Prize', organization: 'Guilin Education Bureau', project: 'Work "Secrets in the Wheels"' },
        { date: '2025.01', title: 'Certificate for Comprehensive Practical Activities for Secondary School Students in Mathematics, Physics, Chemistry and Biology · Physics · Second Prize', organization: 'Organizing Committee of Practical Activities in Mathematics, Physics, Chemistry and Biology' },
        { date: '2025.01', title: 'Certificate for Comprehensive Practical Activities for Secondary School Students in Mathematics, Physics, Chemistry and Biology · Biology · Third Prize', organization: 'Organizing Committee of Practical Activities in Mathematics, Physics, Chemistry and Biology' },
        { date: '2024.06', title: 'Guangxi Primary and Secondary School Students Programming Challenge · Entry Group · First Prize', organization: 'Guangxi Computer Federation' }
      ]
    },
    skills: {
      title: 'Skill Tree',
      duration: 'Learning Duration',
      frontend: 'Frontend',
      backend: 'Backend',
      client: 'Client & Other',
      db: 'Database',
      ops: 'DevOps',
      env: 'Runtime',
      tools: 'Development Tools',
    },
    projects: {
      title: 'My Projects',
      github: 'GitHub',
      site: 'Live Demo',
      items: {
        langbot: 'Open-source instant messaging AI robot platform supporting mainstream platforms such as QQ, WeChat Work, Feishu, DingTalk, KOOK, bringing AI applications to any scenario.',
        xmail: 'Professional email management tool to enhance office efficiency.',
        campux: 'The world\'s most advanced smart QQ space campus wall system (bar none), providing convenient services for students.',
        cpp_ide: 'Web-based lightweight C++ compilation and execution environment.',
        img_cloud: 'High-performance, secure cloud image hosting service.',
        ai_assistant: 'Intelligent dialogue and task processing assistant integrating multiple LLMs.',
        hydro_oj: 'Local IDE and OJ implemented based on HydroOJ reverse interface.',
        free_one_api: 'Free distribution platform aggregating multiple AIs.',
        personal_home: 'This website, used to showcase and introduce myself.'
      }
    },
    blog: {
      title: 'Blog & Social',
    },
    contact: {
      title: 'Contact Me',
      copy: 'Copy',
      donate: 'Buy me a coffee',
      types: {
        biz_mail: 'Business Email',
        google_mail: 'Google Email',
        qq_mail: 'QQ Email',
        qq: 'Tencent QQ',
        wechat: 'WeChat',
        telegram: 'Telegram'
      }
    },
    love: {
      title: 'Love',
      status: 'Currently coding a system kernel for my girlfriend.'
    },
    common: {
      alipay: 'Alipay',
      wechat: 'WeChat Pay',
      system: 'System',
      light: 'Light',
      dark: 'Dark',
      menu: 'Menu',
      aifadian: 'Aifadian',
      visit: 'Visit Page',
      girlfriend: 'Girlfriend',
      skills: {
        bt_panel: 'BT Panel',
        runtime: 'Runtime',
        dev_tools: 'Dev Tools',
        client_other: 'Client & Other'
      },
      music: {
        only: 'Only',
        sky: 'Sky Has No Limit',
        peach: 'Peach Blossom Promise',
        love_distance: 'Love Can Overcome Distance',
        bubble: 'Bubble',
        countdown: 'Tik Tok',
        sand: 'Sand of Memories',
        rose: 'Red Rose White Rose',
        like: 'Like You',
        fullstop: 'Full Stop',
        lightyear: 'Light Years Away',
        goodbye: 'Goodbye',
        rain: 'Rainie Love',
        drop: 'Sky Drop',
        march: 'March of the Volunteers'
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
