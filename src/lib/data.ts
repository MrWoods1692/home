export const PERSONAL_INFO = {
  name: "[在此处填写您的姓名]",
  gender: "[在此处选择您的性别]",
  bio: "[在此处填写个人简介，例如：一个热爱技术、追求极致的开发者，专注于项目开发与算法竞赛。喜欢探索各种新奇的技术栈，从底层的 C++ 到现代的 Rust，从传统的后端 PHP 到现代的微服务架构。致力于成为一名优秀的全栈开发工程师。]",
  motto: "[在此处填写座右铭，例如：无他，惟手熟尔]",
  birthday: "[YYYY-MM-DD]",
  hometown: "[在此处填写家乡，例如：中国 桂林]",
  avatars: [
    "[在此处填写头像1的URL]",
    "[在此处填写头像2的URL]"
  ],
  inspiration: "[在此处填写励志语句，例如：人最宝贵的是生命。生命对于每个人只有一次。人的一生应当这样度过：当回首往事时，他不因虚度年华而悔恨，也不因碌碌无为而羞耻；这样，在临死的时候，he能够说：'我的整个生命和全部精力，都已经献给了世界上最壮丽的事业——为人类的解放而斗争。']",
  loveStatus: "[在此处填写恋爱状态，例如：正在给女友编写内核。]",
  friends: [
    {
      name: "[好友1姓名]",
      avatar: "[好友1头像URL]",
      bio: "[好友1简介]"
    },
    {
      name: "[好友2姓名]",
      avatar: "[好友2头像URL]",
      bio: "[好友2简介]"
    },
    {
      name: "[好友3姓名]",
      avatar: "[好友3头像URL]",
      bio: "[好友3简介]"
    }
  ],
  hometownImages: [
    {
      url: "[家乡图片1 URL]",
      desc: "[家乡图片1描述]"
    },
    {
      url: "[家乡图片2 URL]",
      desc: "[家乡图片2描述]"
    },
    {
      url: "[家乡图片3 URL]",
      desc: "[家乡图片3描述]"
    }
  ]
};

export const ACADEMIC_EXPERIENCE = [
  { stage: "[教育阶段1，如：幼儿园]", school: "[学校1名称]", icon: "School" },
  { stage: "[教育阶段2，如：小学]", school: "[学校2名称]", icon: "GraduationCap" },
  { stage: "[教育阶段3，如：初中]", school: "[学校3名称]", icon: "BookOpen" }
];

export const AWARDS = [
  { date: "[获奖日期1]", title: "[奖项名称1]", organization: "[颁发机构1]", project: "[相关项目1]" },
  { date: "[获奖日期2]", title: "[奖项名称2]", organization: "[颁发机构2]", project: "[相关项目2]" },
  { date: "[获奖日期3]", title: "[奖项名称3]", organization: "[颁发机构3]", project: "[相关项目3]" }
];

export const BLOGS = [
  { name: "[博客/社交平台1名称]", url: "[博客/社交平台1链接]", icon: "Share2" },
  { name: "[博客/社交平台2名称]", url: "[博客/社交平台2链接]", icon: "Layout" },
  { name: "[博客/社交平台3名称]", url: "[博客/社交平台3链接]", icon: "Hash" },
  { name: "[博客/社交平台4名称]", url: "[博客/社交平台4链接]", icon: "Tv" },
  { name: "[博客/社交平台5名称]", url: "[博客/社交平台5链接]", icon: "Terminal" },
  { name: "[博客/社交平台6名称]", url: "[博客/社交平台6链接]", icon: "Feather" },
  { name: "[博客/社交平台7名称]", url: "[博客/社交平台7链接]", icon: "Star" },
  { name: "[博客/社交平台8名称]", url: "[博客/社交平台8链接]", icon: "FileText" }
];

export const CONTACTS = [
  { type: "[联系方式类型1，如：企业邮箱]", value: "[联系方式值1]", icon: "Mail" },
  { type: "[联系方式类型2，如：谷歌邮箱]", value: "[联系方式值2]", icon: "Mail" },
  { type: "[联系方式类型3，如：QQ邮箱]", value: "[联系方式值3]", icon: "Mail" },
  { type: "[联系方式类型4，如：腾讯QQ]", value: "[联系方式值4]", icon: "MessageCircle" },
  { type: "[联系方式类型5，如：WeChat]", value: "[联系方式值5]", icon: "MessageSquare" },
  { type: "[联系方式类型6，如：Telegram]", value: "[联系方式值6]", icon: "Send" }
];

export const SKILLS = [
  {
    category: "[技能类别1，如：前端开发]",
    items: ["[技能项1]", "[技能项2]", "[技能项3]"]
  },
  {
    category: "[技能类别2，如：后端开发]",
    items: ["[技能项4]", "[技能项5]", "[技能项6]"]
  },
  {
    category: "[技能类别3，如：数据库]",
    items: ["[技能项7]", "[技能项8]", "[技能项9]"]
  }
];

export const MUSIC_LIST = [
  "[音乐1]",
  "[音乐2]",
  "[音乐3]"
];

export const PROJECTS = [
  {
    name: "[项目名称1]",
    desc: "[项目描述1]",
    github: "[项目1代码仓库链接]",
    site: "[项目1在线演示链接]",
    tags: ["[标签1]", "[标签2]"]
  },
  {
    name: "[项目名称2]",
    desc: "[项目描述2]",
    github: "[项目2代码仓库链接]",
    site: "[项目2在线演示链接]",
    tags: ["[标签3]", "[标签4]"]
  },
  {
    name: "[项目名称3]",
    desc: "[项目描述3]",
    github: "[项目3代码仓库链接]",
    site: "[项目3在线演示链接]",
    tags: ["[标签5]", "[标签6]"]
  }
];

// 学习时长配置说明：
// 1. 将 [开始学习日期] 替换为您的实际开始学习日期（格式：YYYY-MM-DD）
// 2. 例如：new Date("2020-01-01")
export const BASE_DATE = new Date("[开始学习日期]");

// 初始学习时长（仅作为占位符，实际时长将根据当前日期自动计算）
export const BASE_DURATION = {
  years: 0,
  months: 0,
  days: 0
};
