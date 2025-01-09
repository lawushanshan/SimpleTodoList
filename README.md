# Modern Todo Application

一个现代化的 Todo 应用，使用 Next.js 14 开发，具有优雅的用户界面和流畅的用户体验。

## 功能特性

- ✨ 新增 Todo 项目
- 📋 查看 Todo 列表
- ✅ 标记 Todo 为已完成
- 🎯 响应式设计，支持所有设备
- 🚀 服务器端渲染，确保最佳性能
- 🎨 现代化 UI 设计

## 技术栈

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Shadcn/ui
- Prisma (ORM)
- SQLite (数据库)

## 项目结构

todo-app/
├── app/
│ ├── api/
│ │ └── todos/
│ │ ├── route.ts
│ │ └── [id]/
│ │ └── route.ts
│ └── page.tsx
├── components/
│ ├── add-todo.tsx
│ ├── todo-list.tsx
│ └── ui/
│ ├── button.tsx
│ ├── checkbox.tsx
│ └── input.tsx
├── lib/
│ └── utils.ts
└── prisma/
└── schema.prisma

## 开发环境设置

1. 克隆项目并安装依赖：
   bash
   git clone <repository-url>
   cd todo-app
   npm install

2. 初始化数据库：

```bash
npx prisma init
npx prisma db push
```

3. 启动开发服务器：

```bash
npm run dev
```

现在你可以访问 http://localhost:3000 查看应用。

## API 接口

### GET /api/todos

获取所有 Todo 项目列表

### POST /api/todos

创建新的 Todo 项目

```json
{
  "title": "Todo项目标题"
}
```

### PATCH /api/todos/[id]

更新 Todo 项目状态

```json
{
  "completed": true
}
```

## 组件说明

### AddTodo

新增 Todo 项目的表单组件，包含输入框和提交按钮。

### TodoList

显示 Todo 列表的组件，支持标记完成功能。

### UI 组件

- Button: 自定义按钮组件
- Input: 自定义输入框组件
- Checkbox: 自定义复选框组件

## 环境要求

- Node.js 18.0.0 或更高版本
- npm 7.0.0 或更高版本

## 开发命令

```bash
npm run dev      # 启动开发服务器
npm run build    # 构建生产版本
npm run start    # 启动生产服务器
npm run lint     # 运行代码检查
```

## 数据库架构

```prisma
model Todo {
  id        String   @id @default(cuid())
  title     String
  completed  Boolean  @default(false)
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
```

## 贡献指南

1. Fork 项目
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开 Pull Request

## 许可证

MIT License - 详见 LICENSE 文件
