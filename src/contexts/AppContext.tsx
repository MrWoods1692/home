import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'zh-CN' | 'en';

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
    },
    home: {
      welcome: '欢迎来到我的主页',
      bio: "一个热爱技术、追求极致的高中生，专注于Github开源项目开发。喜欢探索各种新奇的技术栈，从底层的 C++ 到现代的 Rust，从传统的后端 PHP 到现代的微服务架构。目前正在桂林市奎光学校就读，致力于成为一名“优秀”的全栈开发工程师(bushi)。",
      recent_title: '最近动态',
      recent_content: '正在深耕 Rust 开发，并探索 AI Agent 在自动化工作流中的更多可能性。',
      recent_item1: '完成了 Memories 的大体开发',
      recent_item2: '开始学习 Rust 开发',
      tech_title: '技术栈焦点',
      tech_desc: '追求高性能与简洁代码的完美结合，从底层到前端全链路覆盖。',
      future_title: '未来计划',
      future_content: '参与Github开源项目开发。',
      future_progress: '技术学习进度',
      cta_title: '想一起聊聊技术吗？',
      cta_desc: '无论是开源项目合作、技术选型探讨，还是仅仅想打个招呼，或者闲聊，我都非常欢迎。',
      cta_button: '即刻联系我',
    },
    about: {
      title: '关于我',
      academic: '学业经历',
      awards: '获奖经历',
      hometown: '我的家乡',
      hometown_name: '中国 桂林',
      music: '我常听的音乐',
      friends: '我的好友',
      motto: '座右铭',
      age: '我的年龄',
      motto_text: '无他，惟手熟尔',
      alert_confirm: '确认跳转',
      alert_cancel: '取消',
      alert_message: '即将跳转到 https://rockchin.top/ ，是否继续？',
      hometown_click: '点击图片查看详情内容',
      inspiration: '人最宝贵的是生命。生命对于每个人只有一次。人的一生应当这样度过：当回首往事时，他不因虚度年华而悔恨，也不因碌碌无为而羞耻；这样，在临死的时候，他能够说：“我的整个生命和全部精力，都已经献给了世界上最壮丽的事业——为人类的解放而斗争。”',
      hometown_desc: [
        '漓江如一条碧绿的绸带，蜿蜒于奇峰之间，竹筏轻荡，山水入画，这便是我魂牵梦绕的故乡。',
        '象鼻山静卧于漓江畔，如一头巨象饮水，夜幕降临时灯火阑珊，更显神秘动人。',
        '阳朔西街的青石板路上，中西文化交融碰撞，夜晚的灯笼与民谣，是我最怀念的乡愁。',
        '七星公园峰林叠翠，溶洞幽深，一步一景，仿佛走进了桂林山水的立体画卷。',
        '芦笛岩内钟乳石千姿百态，灯光映照下如梦似幻，是大自然用亿万年雕琢的艺术殿堂。',
        '日月双塔矗立于杉湖之上，金碧辉煌，倒影摇曳，是桂林夜色中最温暖的一抹光。'
      ]
    },
    skills: {
      title: '技能树',
      duration: '编程学习时长',
      frontend: '前端开发',
      framework: '前端框架',
      backend: '后端开发',
      systems: '系统编程',
      client: '客户端开发',
      db: '数据库',
      server: '服务器运维',
      deploy: '部署平台',
      virtual: '虚拟化',
      os: '操作系统',
      container: '容器化',
      tools: '开发工具',
      ai: 'AI 辅助',
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
      subtitle: '在各大社区留下足迹，欢迎来和我交流'
    },
    notfound: {
      title: '页面未找到',
      error: '错误',
      message: '页面可能已被删除或不存在，请检查网址是否正确。',
      back_home: '返回首页'
    },
    contact: {
      title: '联系我',
      copy: '复制',
      donate: '请我喝咖啡',
      subtitle: '你的支持是我前进的动力 ❤️',
      scan_to_pay: '扫一扫向我付款',
      alipay_desc: '打开支付宝扫码向我付款',
      wechat_desc: '打开微信扫码向我付款',
      aifadian_desc: '点击前往赞助页面',
      types: {
        biz_mail: '企业邮箱',
        google_mail: '谷歌邮箱',
        qq_mail: 'QQ邮箱',
        qq: '腾讯QQ',
        wechat: 'WeChat',
        telegram: 'Telegram',
        discord: 'Discord'
      }
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
        march: '义勇军进行曲',
        devil: '来自天堂的魔鬼',
        together: '多远都要在一起',
        mySecret: '我的秘密',
        draw: '画',
        heartbeat: '新的心跳',
        ainy: 'A.I.N.Y.',
        drunk: '你把我灌醉',
        almost: '差不多姑娘',
        farewell: '后会无期',
        longAfter: '很久以后',
        walkOnWater: 'Walk on Water',
        transparent: '透明',
        zoo: '摩天动物园',
        flyAway: 'Fly Away',
        whereDidUGo: 'Where Did U Go',
        sleepingPrincess: '睡公主',
        whatHaveUDone: 'What Have U Done',
        ohBoy: 'Oh Boy',
        occasionally: '偶尔',
        gloria: 'GLORIA',
        notFirst: '你不是第一个离开的人',
        oldManAndSea: '老人与海',
        findYou: 'FIND YOU',
        endOfNight: '夜的尽头',
        youthAndSea: '少年与海',
        hell: 'HELL',
        centrifugal: '离心力',
        pause: '让世界暂停一分钟',
        dontGoHome: '不想回家',
        passion: '受难曲',
        iceAge: '冰河时代',
        us: '只有我和你的地方'
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
    },
    home: {
      welcome: '歡迎來到我的主頁',
      bio: '一個熱愛技術、追求極致的初中生，專注於專案開發與演算法競賽。喜歡探索各種新奇的技術棧，從底層的 C++ 到現代的 Rust，從傳統的後端 PHP 到現代的微服務架構。目前正在桂林市奎光學校就讀，致力於成為一名優秀的全棧開發工程師。',
      recent_title: '最近動態',
      recent_content: '正在深耕 Rust 開發，並探索 AI Agent 在自動化工作流中的更多可能性。',
      recent_item1: '完成了 Campux-Memories 的核心框架',
      recent_item2: '開始學習 Rust 開發',
      tech_title: '技術棧焦點',
      tech_desc: '追求高性能與簡潔代碼的完美結合，從底層到前端全鏈路覆蓋。',
      future_title: '未來計劃',
      future_content: '完善 Campux 生態。',
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
      hometown_name: '中國 桂林',
      music: '我常聽的音樂',
      friends: '我的好友',
      motto: '座右銘',
      age: '我的年齡',
      motto_text: '無他，惟手熟爾',
      inspiration: '人最寶貴的是生命。生命對於每個人只有一次。人的一生應當這樣度過：當回首往事時，他不因虛度年華而悔恨，也不因碌碌無為而羞恥；這樣，在臨死的時候，他能夠說：「我的整個生命和全部精力，都已經獻給了世界上最壯麗的事業——為人類的解放而鬥爭。」',
      academic_stages: {
        preschool: '幼稚園',
        primary: '小學',
        junior: '初中',
        senior: '高中',
        senior: '高中',
        senior: '高中',
        senior: '高中'
      },
      award_orgs: {
        ccf: '中國計算機協會',
        activity: '活動',
        guilinEdu: '桂林市教育局',
        gxcf: '廣西計算機協會'
      },
      friend_bios: {
        qin: 'LangBot創始人；Dify後端開發者；技術大牛；我的學長。',
        chen: '我的好朋友。國龍學生。',
        moke: '姐姐哦。國龍學生。',
        m: '...'
      },
      hometown_desc: [
        '漓江如一條碧綠的綢帶，蜿蜒於奇峰之間，竹筏輕蕩，山水入畫，這便是我魂牽夢繞的家鄉。',
        '象鼻山靜臥於漓江畔，如一頭巨象飲水，夜幕降臨時燈火闌珊，更顯神秘動人。',
        '陽朔西街的青石板路上，中西文化交融碰撞，夜晚的燈籠與民謠，是我最懷念的鄉愁。',
        '七星公園峰林疊翠，溶洞幽深，一步一景，彷彿走進了桂林山水的立體畫卷。',
        '蘆笛岩內鐘乳石千姿百態，燈光映照下如夢似幻，是大自然用億萬年雕琢的藝術殿堂。',
        '日月雙塔矗立於杉湖之上，金碧輝煌，倒影搖曳，是桂林夜色中最溫暖的一抹光。'
      ]
    },
    skills: {
      title: '技能樹',
      duration: '學習時長',
      frontend: '前端開發',
      framework: '前端框架',
      backend: '後端開發',
      systems: '系統程式設計',
      client: '客戶端開發',
      db: '資料庫',
      server: '伺服器運維',
      deploy: '部署平台',
      virtual: '虛擬化',
      os: '作業系統',
      container: '容器化',
      tools: '開發工具',
      ai: 'AI 輔助',
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
      subtitle: '你的支持是我前進的動力 ❤️',
      scan_to_pay: '掃描二維碼向我付款',
      alipay_desc: '打開支付寶掃描二維碼向我付款',
      wechat_desc: '打開微信掃描二維碼向我付款',
      aifadian_desc: '點擊前往贊助頁面',
      types: {
        biz_mail: '企業郵箱',
        google_mail: '谷歌郵箱',
        qq_mail: 'QQ郵箱',
        qq: '騰訊QQ',
        wechat: 'WeChat',
        telegram: 'Telegram',
        discord: 'Discord'
      }
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
        march: '義勇軍進行曲',
        devil: '來自天堂的魔鬼',
        together: '多遠都要在一起',
        mySecret: '我的秘密',
        draw: '畫',
        heartbeat: '新的心跳',
        ainy: 'A.I.N.Y.',
        drunk: '你把我灌醉',
        almost: '差不多姑娘',
        farewell: '後會無期',
        longAfter: '很久以後',
        walkOnWater: 'Walk on Water',
        transparent: '透明',
        zoo: '摩天動物園',
        flyAway: 'Fly Away',
        whereDidUGo: 'Where Did U Go',
        sleepingPrincess: '睡公主',
        whatHaveUDone: 'What Have U Done',
        ohBoy: 'Oh Boy',
        occasionally: '偶爾',
        gloria: 'GLORIA',
        notFirst: '你不是第一個離開的人',
        oldManAndSea: '老人與海',
        findYou: 'FIND YOU',
        endOfNight: '夜的盡頭',
        youthAndSea: '少年與海',
        hell: 'HELL',
        centrifugal: '離心力',
        pause: '讓世界暫停一分鐘',
        dontGoHome: '不想回家',
        passion: '受難曲',
        iceAge: '冰河時代',
        us: '只有我和你的地方'
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
    },
    home: {
      welcome: 'Welcome to My Home',
      bio: 'A tech-enthusiast junior high student pursuing excellence, focusing on project development and algorithm competitions. I love exploring various tech stacks, from low-level C++ to modern Rust, from traditional backend PHP to modern microservices architecture. Currently studying at Guilin Kuiguang School, striving to become an excellent full-stack engineer.',
      recent_title: 'Recent Updates',
      recent_content: 'Deeply involved in Rust development and exploring AI Agents in automated workflows.',
      recent_item1: 'Completed the core framework of Campux-Memories',
      recent_item2: 'Started learning Rust development',
      tech_title: 'Tech Stack Focus',
      tech_desc: 'Pursuing the perfect blend of performance and clean code, covering from low-level to frontend.',
      future_title: 'Future Plans',
      future_content: 'Improve the Campux ecosystem.',
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
      hometown_name: 'Guilin, China',
      music: 'Favorite Music',
      friends: 'Friends',
      motto: 'Motto',
      age: 'My Age',
      motto_text: 'Practice makes perfect',
      alert_confirm: 'Confirm',
      alert_cancel: 'Cancel',
      alert_message: 'You are about to navigate to https://rockchin.top/ . Continue?',
      hometown_click: 'Click image to view details',
      inspiration: 'The most precious thing a person has is life. Life is given to each person only once. A person\'s life should be spent in such a way that when they look back on the past, they do not feel regret for wasting their years, nor feel ashamed for doing nothing; thus, when dying, they can say: "My whole life and all my energy have been dedicated to the most magnificent cause in the world—the struggle for the liberation of humanity."',
      academic_stages: {
        preschool: 'Preschool',
        primary: 'Primary School',
        junior: 'Junior High',
        senior: 'Senior High'
      },
      award_orgs: {
        ccf: 'China Computer Federation',
        activity: 'Activity',
        guilinEdu: 'Guilin Education Bureau',
        gxcf: 'Guangxi Computer Federation'
      },
      friend_bios: {
        qin: 'Founder of LangBot; Dify backend developer; tech guru; my senior.',
        chen: 'My good friend. Student at Guolong.',
        moke: 'Older sister. Student at Guolong.',
        m: '...'
      },
      hometown_desc: [
        'The Li River winds like a jade ribbon through towering karst peaks — bamboo rafts drift by, and every view is a painting from my beloved hometown.',
        'Elephant Trunk Hill rests by the Li River like a giant elephant drinking water; at night, its lights glow with an enchanting mystery.',
        'On Yangshuo West Street, Chinese and Western cultures blend along cobblestone lanes — lanterns and folk songs at night are the nostalgia I cherish most.',
        'Seven Star Park unfolds like a living painting of Guilin — layered peaks, deep caves, and a new view at every step.',
        'Inside Reed Flute Cave, stalactites take on a thousand forms; under colored lights, it feels like a palace carved by nature over millions of years.',
        'The Sun and Moon Pagodas rise from Shan Lake, golden and radiant — their reflections swaying in the water, the warmest glow in Guilin\'s night sky.'
      ]
    },
    skills: {
      title: 'Skill Tree',
      duration: 'Learning Duration',
      frontend: 'Frontend',
      framework: 'Frontend Frameworks',
      backend: 'Backend',
      systems: 'Systems Programming',
      client: 'Client Development',
      db: 'Database',
      server: 'Server Ops',
      deploy: 'Deployment',
      virtual: 'Virtualization',
      os: 'Operating Systems',
      container: 'Containerization',
      tools: 'Dev Tools',
      ai: 'AI Assistants',
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
      subtitle: 'Leaving footprints across communities, welcome to connect with me'
    },
    notfound: {
      title: 'Page Not Found',
      error: 'Error',
      message: 'The page may have been deleted or does not exist. Please check the URL.',
      back_home: 'Back to Home'
    },
    contact: {
      title: 'Contact Me',
      copy: 'Copy',
      donate: 'Buy me a coffee',
      subtitle: 'Your support keeps me going ❤️',
      scan_to_pay: 'Scan to pay',
      alipay_desc: 'Open Alipay and scan to pay',
      wechat_desc: 'Open WeChat and scan to pay',
      aifadian_desc: 'Click to visit the sponsorship page',
      types: {
        biz_mail: 'Business Email',
        google_mail: 'Google Email',
        qq_mail: 'QQ Email',
        qq: 'Tencent QQ',
        wechat: 'WeChat',
        telegram: 'Telegram',
        discord: 'Discord'
      }
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
        only: 'Only One',
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
        march: 'March of the Volunteers',
        devil: 'Devil from Heaven',
        together: 'Together No Matter the Distance',
        mySecret: 'My Secret',
        draw: 'Draw',
        heartbeat: 'New Heartbeat',
        ainy: 'A.I.N.Y.',
        drunk: 'You Get Me Drunk',
        almost: 'Almost Girl',
        farewell: 'Never See You Again',
        longAfter: 'Long After',
        walkOnWater: 'Walk on Water',
        transparent: 'Transparent',
        zoo: 'Concrete Zoo',
        flyAway: 'Fly Away',
        whereDidUGo: 'Where Did U Go',
        sleepingPrincess: 'Sleeping Princess',
        whatHaveUDone: 'What Have U Done',
        ohBoy: 'Oh Boy',
        occasionally: 'Occasionally',
        gloria: 'GLORIA',
        notFirst: 'You\'re Not the First to Leave',
        oldManAndSea: 'The Old Man and the Sea',
        findYou: 'FIND YOU',
        endOfNight: 'End of the Night',
        youthAndSea: 'Youth and the Sea',
        hell: 'HELL',
        centrifugal: 'Centrifugal Force',
        pause: 'Pause the World for a Minute',
        dontGoHome: 'Don\'t Go Home',
        passion: 'Passion',
        iceAge: 'Ice Age',
        us: 'Only the Place With You and Me'
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
