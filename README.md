# 个人主页模板

一个基于 React 和 Supabase 构建的现代化个人主页模板，适用于开发者、设计师和技术爱好者展示个人作品、技能和联系方式。

## 功能特性

- **响应式设计**: 完美适配桌面和移动设备
- **多语言支持**: 内置中英文切换功能
- **动态主题**: 支持亮色、暗色和系统自动模式
- **内容模块化**: 包含关于我、技能、项目、博客、联系等完整页面
- **现代化UI**: 采用手写风格卡片和交互动效
- **数据驱动**: 所有内容通过数据文件集中管理，便于维护和更新

## 技术栈

- **前端框架**: React 18 + TypeScript
- **构建工具**: Vite
- **样式方案**: Tailwind CSS + 自定义CSS变量
- **状态管理**: React Context API
- **UI组件库**: Radix UI + 自定义组件
- **后端服务**: Supabase (暂不对接)
- **图标库**: Lucide React
- **国际化**: 基于 JSON 的翻译系统
- **部署平台**: 支持 Vercel、Netlify、Cloudflare Workers 等

## 目录结构

```
├── README.md # 说明文档
├── LICENSE # 许可协议
├── .gitignore # git 忽略文件
├── components.json # 组件库配置
├── index.html # 入口文件
├── package.json # 包管理
├── postcss.config.js # postcss 配置
├── public # 静态资源目录
│   ├── favicon.png # 图标
│   └── images # 图片资源
├── src # 源码目录
│   ├── App.tsx # 入口文件
│   ├── components # 组件目录
│   ├── contexts # 上下文目录
│   ├── db # 数据库配置目录
│   ├── hooks # 通用钩子函数目录
│   ├── index.css # 全局样式
│   ├── lib # 工具库目录
│   ├── main.tsx # 入口文件
│   ├── routes.tsx # 路由配置
│   ├── pages # 页面目录
│   ├── services  # 数据库交互目录
│   ├── types   # 类型定义目录
└── vite.config.ts # vite 配置文件
```

## 使用指南

### 1. 环境准备

确保已安装 Node.js (≥20) 和 npm (≥10)。

```bash
# 检查版本
node -v   # 应输出 v20.x.x 或更高
npm -v    # 应输出 10.x.x 或更高
```

#### 在 Windows 上安装 Node.js

```
# Step 1: 访问Node.js官网：https://nodejs.org/，点击下载后，会根据你的系统自动选择合适的版本（32位或64位）。
# Step 2: 运行安装程序：下载完成后，双击运行安装程序。
# Step 3: 完成安装：按照安装向导完成安装过程。
# Step 4: 验证安装：在命令提示符（cmd）或IDE终端（terminal）中输入 node -v 和 npm -v 来检查 Node.js 和 npm 是否正确安装。
```

#### 在 macOS 上安装 Node.js

```
# Step 1: 使用Homebrew安装（推荐方法）：打开终端。输入命令brew install node并回车。如果尚未安装Homebrew，需要先安装Homebrew，
可以通过在终端中运行如下命令来安装：
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
或者使用官网安装程序：访问Node.js官网。下载macOS的.pkg安装包。打开下载的.pkg文件，按照提示完成安装。
# Step 2: 验证安装：在命令提示符（cmd）或IDE终端（terminal）中输入 node -v 和 npm -v 来检查 Node.js 和 npm 是否正确安装。
```

### 2. 项目设置

```bash
# 克隆仓库
git clone https://github.com/MrWoods1692/home.git

# 进入项目目录
cd home

# 安装依赖
npm i
```

### 3. 配置个人信息

本项目已转换为模板，所有个人信息均已替换为占位符。请按照以下步骤进行个性化配置：

#### 3.1 修改基本资料

编辑 `src/lib/data.ts` 文件，更新 `PERSONAL_INFO` 对象中的各项内容：

```typescript
export const PERSONAL_INFO = {
  name: "[在此处填写您的姓名]",
  gender: "[在此处选择您的性别]",
  bio: "[在此处填写个人简介]",
  motto: "[在此处填写座右铭]",
  birthday: "[YYYY-MM-DD]",
  hometown: "[在此处填写家乡]",
  avatars: [
    "[在此处填写头像1的URL]",
    "[在此处填写头像2的URL]"
  ],
  // ... 其他字段
};
```

**提示**：对于图片URL，您可以使用云存储服务（如Supabase Storage、AWS S3、Cloudflare R2等）上传图片并获取公开链接。

#### 3.2 配置技能信息

在 `src/lib/data.ts` 中更新 `SKILLS` 数组：

```typescript
export const SKILLS = [
  {
    category: "[技能类别1]",
    items: ["[技能项1]", "[技能项2]"]
  },
  // ... 更多技能类别
];
```

**最佳实践**：按技术栈分类组织技能，例如前端、后端、数据库、DevOps等。

#### 3.3 添加项目经历

在 `src/lib/data.ts` 中更新 `PROJECTS` 数组：

```typescript
export const PROJECTS = [
  {
    name: "[项目名称]",
    desc: "[项目描述]",
    github: "[项目代码仓库链接]",
    site: "[项目在线演示链接]",
    tags: ["[标签1]", "[标签2]"]
  },
  // ... 更多项目
];
```

**建议**：每个项目应包含清晰的描述、技术栈标签和可访问的演示链接。

#### 3.4 更新联系方式

在 `src/lib/data.ts` 中更新 `CONTACTS` 数组：

```typescript
export const CONTACTS = [
  { type: "[联系方式类型]", value: "[联系方式值]", icon: "Mail" },
  // ... 更多联系方式
];
```

**示例**：
```typescript
{
  type: "企业邮箱",
  value: "contact@yourdomain.com",
  icon: "Mail"
}
```

#### 3.5 配置支付方式（可选）

如果您希望添加收款码，请在 `src/pages/ContactPage.tsx` 中更新二维码图片的src属性：

```jsx
<img src="[在此处填写支付宝收款码URL]" alt="Alipay QR" />
<img src="[在此处填写微信收款码URL]" alt="WeChat QR" />
```

#### 3.6 本地化文本

根据需要在 `src/contexts/AppContext.tsx` 中调整各语言版本的翻译文本。

**提示**：添加新语言时，复制现有语言对象并修改翻译内容，然后在 `src/main.tsx` 中更新可用语言列表。

#### 3.7 配置Supabase（可选）

如果您需要使用Supabase进行认证或数据存储，需要：

1. 创建 Supabase 项目
2. 在 `src/db/supabase.ts` 中更新连接信息
3. 在 `src/contexts/AuthContext.tsx` 中调整认证逻辑

```typescript
const supabase = createClient(
  '[在此处填写SUPABASE_URL]',
  '[在此处填写SUPABASE_ANON_KEY]'
);
```

### 4. 启动开发服务器

```bash
npm run dev
```

访问 http://127.0.0.1:5173 查看效果。开发服务器支持热重载，修改代码后浏览器会自动刷新。

### 5. 构建生产版本

```bash
npm run build
```

构建产物将生成在 `dist` 目录，可直接部署到静态网站托管服务。

## 部署指南

### 1. Cloudflare Workers 部署

#### 1.1 准备工作

1. 安装 Wrangler CLI
   ```bash
   npm install -g wrangler
   ```

2. 登录 Cloudflare 账户
   ```bash
   wrangler login
   ```

3. 初始化项目（如果尚未配置）
   ```bash
   wrangler init
   ```

#### 1.2 配置 wrangler.toml

在项目根目录创建或修改 `wrangler.toml` 文件：

```toml
name = "personal-home"
main = "src/index.js"
compatibility_date = "2026-05-02"

[[migrations]]
  tag = "v1"
  new_classes = ["PersonalHomePage"]

[site]
  bucket = "./dist"
  include = ["**/*"]
```

#### 1.3 构建和部署

```bash
# 构建项目
npm run build

# 部署到 Cloudflare
npx wrangler deploy
```

#### 1.4 版本管理

```bash
# 上传新版本
npx wrangler versions upload --assets=. --compatibility-date=2026-05-02
```

### 2. 其他平台部署

#### Vercel

1. 安装 Vercel CLI: `npm install -g vercel`
2. 登录: `vercel login`
3. 部署: `vercel`

#### Netlify

1. 安装 Netlify CLI: `npm install -g netlify-cli`
2. 登录: `netlify login`
3. 部署: `netlify deploy`

## 自定义指南

### 1. 修改主题颜色

编辑 `src/index.css` 中的 CSS 变量：

```css
:root {
  --primary: 67, 97, 238; /* 主色（RGB） */
  --primary-dark: 53, 77, 189; /* 深色主色 */
  --accent: 236, 72, 132; /* 强调色 */
  /* ... 其他颜色变量 */
}
```

### 2. 添加新页面

1. 在 `src/pages` 目录下创建新页面组件
2. 在 `src/routes.tsx` 中添加路由配置
3. （可选）在导航栏中添加链接

### 3. 添加自定义组件

1. 在 `src/components` 目录下创建新组件
2. 按照现有组件的样式和结构编写代码
3. 在需要的地方导入并使用新组件

## 项目维护

### 1. 依赖更新

```bash
# 检查过期的依赖
npm outdated

# 更新所有依赖
npm update
```

### 2. 代码质量检查

```bash
# 运行 ESLint
npm run lint

# 修复可自动修复的问题
npm run lint:fix
```

## 许可证

本项目采用 AGPL-3.0 license 许可证。